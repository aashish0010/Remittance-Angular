import {
  NotificationService
} from "./chunk-YVJ6TWB2.js";
import "./chunk-S5Y76ZQA.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-N4KLCW3D.js";
import {
  MatPseudoCheckbox
} from "./chunk-4ICNUTBP.js";
import "./chunk-H3UX3NVF.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-7GR7IV7E.js";
import "./chunk-NNRSADKN.js";
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
  SelectionModel
} from "./chunk-3TORE4W6.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatIconButton,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  _StructuralStylesLoader
} from "./chunk-5RGUSOA3.js";
import {
  DOWN_ARROW,
  Directionality,
  ENTER,
  FocusMonitor,
  LEFT_ARROW,
  MatCommonModule,
  MatIcon,
  MatIconModule,
  RIGHT_ARROW,
  SPACE,
  UP_ARROW,
  _CdkPrivateStyleLoader,
  _IdGenerator
} from "./chunk-BPDBYDBO.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf
} from "./chunk-Y4TRFXTA.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
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

// node_modules/@angular/material/fesm2022/button-toggle.mjs
var _c0 = ["button"];
var _c1 = ["*"];
function MatButtonToggle_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-pseudo-checkbox", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.disabled);
  }
}
var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", {
  providedIn: "root",
  factory: MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY
});
function MAT_BUTTON_TOGGLE_GROUP_DEFAULT_OPTIONS_FACTORY() {
  return {
    hideSingleSelectionIndicator: false,
    hideMultipleSelectionIndicator: false,
    disabledInteractive: false
  };
}
var MAT_BUTTON_TOGGLE_GROUP = new InjectionToken("MatButtonToggleGroup");
var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatButtonToggleGroup),
  multi: true
};
var MatButtonToggleChange = class {
  source;
  value;
  constructor(source, value) {
    this.source = source;
    this.value = value;
  }
};
var MatButtonToggleGroup = class _MatButtonToggleGroup {
  _changeDetector = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _multiple = false;
  _disabled = false;
  _disabledInteractive = false;
  _selectionModel;
  /**
   * Reference to the raw value that the consumer tried to assign. The real
   * value will exclude any values from this one that don't correspond to a
   * toggle. Useful for the cases where the value is assigned before the toggles
   * have been initialized or at the same that they're being swapped out.
   */
  _rawValue;
  /**
   * The method to be called in order to update ngModel.
   * Now `ngModel` binding is not supported in multiple selection mode.
   */
  _controlValueAccessorChangeFn = () => {
  };
  /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
  _onTouched = () => {
  };
  /** Child button toggle buttons. */
  _buttonToggles;
  /** The appearance for all the buttons in the group. */
  appearance;
  /** `name` attribute for the underlying `input` element. */
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
    this._markButtonsForCheck();
  }
  _name = inject(_IdGenerator).getId("mat-button-toggle-group-");
  /** Whether the toggle group is vertical. */
  vertical;
  /** Value of the toggle group. */
  get value() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    if (this.multiple) {
      return selected.map((toggle) => toggle.value);
    }
    return selected[0] ? selected[0].value : void 0;
  }
  set value(newValue) {
    this._setSelectionByValue(newValue);
    this.valueChange.emit(this.value);
  }
  /**
   * Event that emits whenever the value of the group changes.
   * Used to facilitate two-way data binding.
   * @docs-private
   */
  valueChange = new EventEmitter();
  /** Selected button toggles in the group. */
  get selected() {
    const selected = this._selectionModel ? this._selectionModel.selected : [];
    return this.multiple ? selected : selected[0] || null;
  }
  /** Whether multiple button toggles can be selected. */
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this._markButtonsForCheck();
  }
  /** Whether multiple button toggle group is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._markButtonsForCheck();
  }
  /** Whether buttons in the group should be interactive while they're disabled. */
  get disabledInteractive() {
    return this._disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
    this._markButtonsForCheck();
  }
  /** The layout direction of the toggle button group. */
  get dir() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  /** Event emitted when the group's value changes. */
  change = new EventEmitter();
  /** Whether checkmark indicator for single-selection button toggle groups is hidden. */
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideSingleSelectionIndicator;
  /** Whether checkmark indicator for multiple-selection button toggle groups is hidden. */
  get hideMultipleSelectionIndicator() {
    return this._hideMultipleSelectionIndicator;
  }
  set hideMultipleSelectionIndicator(value) {
    this._hideMultipleSelectionIndicator = value;
    this._markButtonsForCheck();
  }
  _hideMultipleSelectionIndicator;
  constructor() {
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.hideSingleSelectionIndicator = defaultOptions?.hideSingleSelectionIndicator ?? false;
    this.hideMultipleSelectionIndicator = defaultOptions?.hideMultipleSelectionIndicator ?? false;
  }
  ngOnInit() {
    this._selectionModel = new SelectionModel(this.multiple, void 0, false);
  }
  ngAfterContentInit() {
    this._selectionModel.select(...this._buttonToggles.filter((toggle) => toggle.checked));
    if (!this.multiple) {
      this._initializeTabIndex();
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value Value to be set to the model.
   */
  writeValue(value) {
    this.value = value;
    this._changeDetector.markForCheck();
  }
  // Implemented as part of ControlValueAccessor.
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  // Implemented as part of ControlValueAccessor.
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  // Implemented as part of ControlValueAccessor.
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  /** Handle keydown event calling to single-select button toggle. */
  _keydown(event) {
    if (this.multiple || this.disabled) {
      return;
    }
    const target = event.target;
    const buttonId = target.id;
    const index = this._buttonToggles.toArray().findIndex((toggle) => {
      return toggle.buttonId === buttonId;
    });
    let nextButton = null;
    switch (event.keyCode) {
      case SPACE:
      case ENTER:
        nextButton = this._buttonToggles.get(index) || null;
        break;
      case UP_ARROW:
        nextButton = this._getNextButton(index, -1);
        break;
      case LEFT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? -1 : 1);
        break;
      case DOWN_ARROW:
        nextButton = this._getNextButton(index, 1);
        break;
      case RIGHT_ARROW:
        nextButton = this._getNextButton(index, this.dir === "ltr" ? 1 : -1);
        break;
      default:
        return;
    }
    if (nextButton) {
      event.preventDefault();
      nextButton._onButtonClick();
      nextButton.focus();
    }
  }
  /** Dispatch change event with current selection and group value. */
  _emitChangeEvent(toggle) {
    const event = new MatButtonToggleChange(toggle, this.value);
    this._rawValue = event.value;
    this._controlValueAccessorChangeFn(event.value);
    this.change.emit(event);
  }
  /**
   * Syncs a button toggle's selected state with the model value.
   * @param toggle Toggle to be synced.
   * @param select Whether the toggle should be selected.
   * @param isUserInput Whether the change was a result of a user interaction.
   * @param deferEvents Whether to defer emitting the change events.
   */
  _syncButtonToggle(toggle, select, isUserInput = false, deferEvents = false) {
    if (!this.multiple && this.selected && !toggle.checked) {
      this.selected.checked = false;
    }
    if (this._selectionModel) {
      if (select) {
        this._selectionModel.select(toggle);
      } else {
        this._selectionModel.deselect(toggle);
      }
    } else {
      deferEvents = true;
    }
    if (deferEvents) {
      Promise.resolve().then(() => this._updateModelValue(toggle, isUserInput));
    } else {
      this._updateModelValue(toggle, isUserInput);
    }
  }
  /** Checks whether a button toggle is selected. */
  _isSelected(toggle) {
    return this._selectionModel && this._selectionModel.isSelected(toggle);
  }
  /** Determines whether a button toggle should be checked on init. */
  _isPrechecked(toggle) {
    if (typeof this._rawValue === "undefined") {
      return false;
    }
    if (this.multiple && Array.isArray(this._rawValue)) {
      return this._rawValue.some((value) => toggle.value != null && value === toggle.value);
    }
    return toggle.value === this._rawValue;
  }
  /** Initializes the tabindex attribute using the radio pattern. */
  _initializeTabIndex() {
    this._buttonToggles.forEach((toggle) => {
      toggle.tabIndex = -1;
    });
    if (this.selected) {
      this.selected.tabIndex = 0;
    } else {
      for (let i = 0; i < this._buttonToggles.length; i++) {
        const toggle = this._buttonToggles.get(i);
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
    this._markButtonsForCheck();
  }
  /** Obtain the subsequent toggle to which the focus shifts. */
  _getNextButton(startIndex, offset) {
    const items = this._buttonToggles;
    for (let i = 1; i <= items.length; i++) {
      const index = (startIndex + offset * i + items.length) % items.length;
      const item = items.get(index);
      if (item && !item.disabled) {
        return item;
      }
    }
    return null;
  }
  /** Updates the selection state of the toggles in the group based on a value. */
  _setSelectionByValue(value) {
    this._rawValue = value;
    if (!this._buttonToggles) {
      return;
    }
    const toggles = this._buttonToggles.toArray();
    if (this.multiple && value) {
      if (!Array.isArray(value) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw Error("Value must be an array in multiple-selection mode.");
      }
      this._clearSelection();
      value.forEach((currentValue) => this._selectValue(currentValue, toggles));
    } else {
      this._clearSelection();
      this._selectValue(value, toggles);
    }
    if (!this.multiple && toggles.every((toggle) => toggle.tabIndex === -1)) {
      for (const toggle of toggles) {
        if (!toggle.disabled) {
          toggle.tabIndex = 0;
          break;
        }
      }
    }
  }
  /** Clears the selected toggles. */
  _clearSelection() {
    this._selectionModel.clear();
    this._buttonToggles.forEach((toggle) => {
      toggle.checked = false;
      if (!this.multiple) {
        toggle.tabIndex = -1;
      }
    });
  }
  /** Selects a value if there's a toggle that corresponds to it. */
  _selectValue(value, toggles) {
    for (const toggle of toggles) {
      if (toggle.value === value) {
        toggle.checked = true;
        this._selectionModel.select(toggle);
        if (!this.multiple) {
          toggle.tabIndex = 0;
        }
        break;
      }
    }
  }
  /** Syncs up the group's value with the model and emits the change event. */
  _updateModelValue(toggle, isUserInput) {
    if (isUserInput) {
      this._emitChangeEvent(toggle);
    }
    this.valueChange.emit(this.value);
  }
  /** Marks all of the child button toggles to be checked. */
  _markButtonsForCheck() {
    this._buttonToggles?.forEach((toggle) => toggle._markForCheck());
  }
  static \u0275fac = function MatButtonToggleGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggleGroup)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatButtonToggleGroup,
    selectors: [["mat-button-toggle-group"]],
    contentQueries: function MatButtonToggleGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatButtonToggle, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonToggles = _t);
      }
    },
    hostAttrs: [1, "mat-button-toggle-group"],
    hostVars: 6,
    hostBindings: function MatButtonToggleGroup_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function MatButtonToggleGroup_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx.multiple ? "group" : "radiogroup")("aria-disabled", ctx.disabled);
        \u0275\u0275classProp("mat-button-toggle-vertical", ctx.vertical)("mat-button-toggle-group-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      appearance: "appearance",
      name: "name",
      vertical: [2, "vertical", "vertical", booleanAttribute],
      value: "value",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute],
      hideMultipleSelectionIndicator: [2, "hideMultipleSelectionIndicator", "hideMultipleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      change: "change"
    },
    exportAs: ["matButtonToggleGroup"],
    features: [\u0275\u0275ProvidersFeature([MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
      provide: MAT_BUTTON_TOGGLE_GROUP,
      useExisting: _MatButtonToggleGroup
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleGroup, [{
    type: Directive,
    args: [{
      selector: "mat-button-toggle-group",
      providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
        provide: MAT_BUTTON_TOGGLE_GROUP,
        useExisting: MatButtonToggleGroup
      }],
      host: {
        "class": "mat-button-toggle-group",
        "(keydown)": "_keydown($event)",
        "[attr.role]": "multiple ? 'group' : 'radiogroup'",
        "[attr.aria-disabled]": "disabled",
        "[class.mat-button-toggle-vertical]": "vertical",
        "[class.mat-button-toggle-group-appearance-standard]": 'appearance === "standard"'
      },
      exportAs: "matButtonToggleGroup"
    }]
  }], () => [], {
    _buttonToggles: [{
      type: ContentChildren,
      args: [forwardRef(() => MatButtonToggle), {
        // Note that this would technically pick up toggles
        // from nested groups, but that's not a case that we support.
        descendants: true
      }]
    }],
    appearance: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    vertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideMultipleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatButtonToggle = class _MatButtonToggle {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _idGenerator = inject(_IdGenerator);
  _animationMode = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  });
  _checked = false;
  /**
   * Attached to the aria-label attribute of the host element. In most cases, aria-labelledby will
   * take precedence so this may be omitted.
   */
  ariaLabel;
  /**
   * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
   */
  ariaLabelledby = null;
  /** Underlying native `button` element. */
  _buttonElement;
  /** The parent button toggle group (exclusive selection). Optional. */
  buttonToggleGroup;
  /** Unique ID for the underlying `button` element. */
  get buttonId() {
    return `${this.id}-button`;
  }
  /** The unique ID for this button toggle. */
  id;
  /** HTML's 'name' attribute used to group radios for unique selection. */
  name;
  /** MatButtonToggleGroup reads this to assign its own value. */
  value;
  /** Tabindex of the toggle. */
  get tabIndex() {
    return this._tabIndex;
  }
  set tabIndex(value) {
    if (value !== this._tabIndex) {
      this._tabIndex = value;
      this._markForCheck();
    }
  }
  _tabIndex;
  /** Whether ripples are disabled on the button toggle. */
  disableRipple;
  /** The appearance style of the button. */
  get appearance() {
    return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
  }
  set appearance(value) {
    this._appearance = value;
  }
  _appearance;
  /** Whether the button is checked. */
  get checked() {
    return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
  }
  set checked(value) {
    if (value !== this._checked) {
      this._checked = value;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Whether the button is disabled. */
  get disabled() {
    return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  _disabled = false;
  /** Whether the button should remain interactive when it is disabled. */
  get disabledInteractive() {
    return this._disabledInteractive || this.buttonToggleGroup !== null && this.buttonToggleGroup.disabledInteractive;
  }
  set disabledInteractive(value) {
    this._disabledInteractive = value;
  }
  _disabledInteractive;
  /** Event emitted when the group value changes. */
  change = new EventEmitter();
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const toggleGroup = inject(MAT_BUTTON_TOGGLE_GROUP, {
      optional: true
    });
    const defaultTabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    }) || "";
    const defaultOptions = inject(MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, {
      optional: true
    });
    this._tabIndex = parseInt(defaultTabIndex) || 0;
    this.buttonToggleGroup = toggleGroup;
    this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : "standard";
    this.disabledInteractive = defaultOptions?.disabledInteractive ?? false;
  }
  ngOnInit() {
    const group = this.buttonToggleGroup;
    this.id = this.id || this._idGenerator.getId("mat-button-toggle-");
    if (group) {
      if (group._isPrechecked(this)) {
        this.checked = true;
      } else if (group._isSelected(this) !== this._checked) {
        group._syncButtonToggle(this, this._checked);
      }
    }
  }
  ngAfterViewInit() {
    if (this._animationMode !== "NoopAnimations") {
      this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled");
    }
    this._focusMonitor.monitor(this._elementRef, true);
  }
  ngOnDestroy() {
    const group = this.buttonToggleGroup;
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (group && group._isSelected(this)) {
      group._syncButtonToggle(this, false, false, true);
    }
  }
  /** Focuses the button. */
  focus(options) {
    this._buttonElement.nativeElement.focus(options);
  }
  /** Checks the button toggle due to an interaction with the underlying native button. */
  _onButtonClick() {
    if (this.disabled) {
      return;
    }
    const newChecked = this.isSingleSelector() ? true : !this._checked;
    if (newChecked !== this._checked) {
      this._checked = newChecked;
      if (this.buttonToggleGroup) {
        this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);
        this.buttonToggleGroup._onTouched();
      }
    }
    if (this.isSingleSelector()) {
      const focusable = this.buttonToggleGroup._buttonToggles.find((toggle) => {
        return toggle.tabIndex === 0;
      });
      if (focusable) {
        focusable.tabIndex = -1;
      }
      this.tabIndex = 0;
    }
    this.change.emit(new MatButtonToggleChange(this, this.value));
  }
  /**
   * Marks the button toggle as needing checking for change detection.
   * This method is exposed because the parent button toggle group will directly
   * update bound properties of the radio button.
   */
  _markForCheck() {
    this._changeDetectorRef.markForCheck();
  }
  /** Gets the name that should be assigned to the inner DOM node. */
  _getButtonName() {
    if (this.isSingleSelector()) {
      return this.buttonToggleGroup.name;
    }
    return this.name || null;
  }
  /** Whether the toggle is in single selection mode. */
  isSingleSelector() {
    return this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
  }
  static \u0275fac = function MatButtonToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatButtonToggle,
    selectors: [["mat-button-toggle"]],
    viewQuery: function MatButtonToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._buttonElement = _t.first);
      }
    },
    hostAttrs: ["role", "presentation", 1, "mat-button-toggle"],
    hostVars: 14,
    hostBindings: function MatButtonToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatButtonToggle_focus_HostBindingHandler() {
          return ctx.focus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-label", null)("aria-labelledby", null)("id", ctx.id)("name", null);
        \u0275\u0275classProp("mat-button-toggle-standalone", !ctx.buttonToggleGroup)("mat-button-toggle-checked", ctx.checked)("mat-button-toggle-disabled", ctx.disabled)("mat-button-toggle-disabled-interactive", ctx.disabledInteractive)("mat-button-toggle-appearance-standard", ctx.appearance === "standard");
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      id: "id",
      name: "name",
      value: "value",
      tabIndex: "tabIndex",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      appearance: "appearance",
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change"
    },
    exportAs: ["matButtonToggle"],
    ngContentSelectors: _c1,
    decls: 7,
    vars: 13,
    consts: [["button", ""], ["type", "button", 1, "mat-button-toggle-button", "mat-focus-indicator", 3, "click", "id", "disabled"], [1, "mat-button-toggle-checkbox-wrapper"], [1, "mat-button-toggle-label-content"], [1, "mat-button-toggle-focus-overlay"], ["matRipple", "", 1, "mat-button-toggle-ripple", 3, "matRippleTrigger", "matRippleDisabled"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 3, "disabled"]],
    template: function MatButtonToggle_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 1, 0);
        \u0275\u0275listener("click", function MatButtonToggle_Template_button_click_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx._onButtonClick());
        });
        \u0275\u0275template(2, MatButtonToggle_Conditional_2_Template, 2, 1, "div", 2);
        \u0275\u0275elementStart(3, "span", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(5, "span", 4)(6, "span", 5);
      }
      if (rf & 2) {
        const button_r3 = \u0275\u0275reference(1);
        \u0275\u0275property("id", ctx.buttonId)("disabled", ctx.disabled && !ctx.disabledInteractive || null);
        \u0275\u0275attribute("role", ctx.isSingleSelector() ? "radio" : "button")("tabindex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("aria-pressed", !ctx.isSingleSelector() ? ctx.checked : null)("aria-checked", ctx.isSingleSelector() ? ctx.checked : null)("name", ctx._getButtonName())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.buttonToggleGroup && (!ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideSingleSelectionIndicator || ctx.buttonToggleGroup.multiple && !ctx.buttonToggleGroup.hideMultipleSelectionIndicator) ? 2 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("matRippleTrigger", button_r3)("matRippleDisabled", ctx.disableRipple || ctx.disabled);
      }
    },
    dependencies: [MatRipple, MatPseudoCheckbox],
    styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-standard-button-toggle-background-color, transparent);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggle, [{
    type: Component,
    args: [{
      selector: "mat-button-toggle",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matButtonToggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "[class.mat-button-toggle-standalone]": "!buttonToggleGroup",
        "[class.mat-button-toggle-checked]": "checked",
        "[class.mat-button-toggle-disabled]": "disabled",
        "[class.mat-button-toggle-disabled-interactive]": "disabledInteractive",
        "[class.mat-button-toggle-appearance-standard]": 'appearance === "standard"',
        "class": "mat-button-toggle",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[attr.id]": "id",
        "[attr.name]": "null",
        "(focus)": "focus()",
        "role": "presentation"
      },
      imports: [MatRipple, MatPseudoCheckbox],
      template: `<button #button class="mat-button-toggle-button mat-focus-indicator"
        type="button"
        [id]="buttonId"
        [attr.role]="isSingleSelector() ? 'radio' : 'button'"
        [attr.tabindex]="disabled && !disabledInteractive ? -1 : tabIndex"
        [attr.aria-pressed]="!isSingleSelector() ? checked : null"
        [attr.aria-checked]="isSingleSelector() ? checked : null"
        [disabled]="(disabled && !disabledInteractive) || null"
        [attr.name]="_getButtonName()"
        [attr.aria-label]="ariaLabel"
        [attr.aria-labelledby]="ariaLabelledby"
        [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
        (click)="_onButtonClick()">
  @if (buttonToggleGroup && (
    !buttonToggleGroup.multiple && !buttonToggleGroup.hideSingleSelectionIndicator ||
    buttonToggleGroup.multiple && !buttonToggleGroup.hideMultipleSelectionIndicator)
  ) {
    <div class="mat-button-toggle-checkbox-wrapper">
      <mat-pseudo-checkbox
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"/>
    </div>
  }

  <span class="mat-button-toggle-label-content">
    <ng-content></ng-content>
  </span>
</button>

<span class="mat-button-toggle-focus-overlay"></span>
<span class="mat-button-toggle-ripple" matRipple
     [matRippleTrigger]="button"
     [matRippleDisabled]="this.disableRipple || this.disabled">
</span>
`,
      styles: [".mat-button-toggle-standalone,.mat-button-toggle-group{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0);transform:translateZ(0);border-radius:var(--mat-legacy-button-toggle-shape)}.mat-button-toggle-standalone:not([class*=mat-elevation-z]),.mat-button-toggle-group:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}@media(forced-colors: active){.mat-button-toggle-standalone,.mat-button-toggle-group{outline:solid 1px}}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container))}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]){box-shadow:none}@media(forced-colors: active){.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,.mat-button-toggle-group-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative;color:var(--mat-legacy-button-toggle-text-color);font-family:var(--mat-legacy-button-toggle-label-text-font);font-size:var(--mat-legacy-button-toggle-label-text-size);line-height:var(--mat-legacy-button-toggle-label-text-line-height);font-weight:var(--mat-legacy-button-toggle-label-text-weight);letter-spacing:var(--mat-legacy-button-toggle-label-text-tracking);--mat-minimal-pseudo-checkbox-selected-checkmark-color: var(--mat-legacy-button-toggle-selected-state-text-color)}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-legacy-button-toggle-focus-state-layer-opacity)}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle-checkbox-wrapper{display:inline-block;justify-content:flex-start;align-items:center;width:0;height:18px;line-height:18px;overflow:hidden;box-sizing:border-box;position:absolute;top:50%;left:16px;transform:translate3d(0, -50%, 0)}[dir=rtl] .mat-button-toggle-checkbox-wrapper{left:auto;right:16px}.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:12px}[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper{left:auto;right:12px}.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper{width:18px}.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper{transition:width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper{transition:none}.mat-button-toggle-checked{color:var(--mat-legacy-button-toggle-selected-state-text-color);background-color:var(--mat-legacy-button-toggle-selected-state-background-color)}.mat-button-toggle-disabled{pointer-events:none;color:var(--mat-legacy-button-toggle-disabled-state-text-color);background-color:var(--mat-legacy-button-toggle-disabled-state-background-color);--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-legacy-button-toggle-disabled-state-text-color)}.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:var(--mat-legacy-button-toggle-disabled-selected-state-background-color)}.mat-button-toggle-disabled-interactive{pointer-events:auto}.mat-button-toggle-appearance-standard{color:var(--mat-standard-button-toggle-text-color, var(--mat-sys-on-surface));background-color:var(--mat-standard-button-toggle-background-color, transparent);font-family:var(--mat-standard-button-toggle-label-text-font, var(--mat-sys-label-large-font));font-size:var(--mat-standard-button-toggle-label-text-size, var(--mat-sys-label-large-size));line-height:var(--mat-standard-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));font-weight:var(--mat-standard-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));letter-spacing:var(--mat-standard-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking))}.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard+.mat-button-toggle-appearance-standard{border-left:none;border-right:none;border-top:solid 1px var(--mat-standard-button-toggle-divider-color, var(--mat-sys-outline))}.mat-button-toggle-appearance-standard.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));background-color:var(--mat-standard-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled{color:var(--mat-standard-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-state-background-color, transparent)}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox{--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color: var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked{color:var(--mat-standard-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));background-color:var(--mat-standard-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent))}.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{background-color:var(--mat-standard-button-toggle-state-layer-color, var(--mat-sys-on-surface))}.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity))}.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:var(--mat-standard-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity))}@media(hover: none){.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;user-select:none;display:inline-block;padding:0 16px;line-height:var(--mat-legacy-button-toggle-height);position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{padding:0 12px;line-height:var(--mat-standard-button-toggle-height, 40px)}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:inherit;pointer-events:none;opacity:0;background-color:var(--mat-legacy-button-toggle-state-layer-color)}@media(forced-colors: active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 500px;opacity:.5;height:0}.mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay{opacity:.6}.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 500px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:none;color:inherit;padding:0;margin:0;font:inherit;outline:none;width:100%;cursor:pointer}.mat-button-toggle-animations-enabled .mat-button-toggle-button{transition:padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-button-toggle-vertical .mat-button-toggle-button{transition:none}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:30px}[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper){padding-left:0;padding-right:30px}.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{--mat-focus-indicator-border-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before{border-bottom-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-bottom-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before{border-top-right-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large));border-top-left-radius:var(--mat-standard-button-toggle-shape, var(--mat-sys-corner-extra-large))}\n"]
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    _buttonElement: [{
      type: ViewChild,
      args: ["button"]
    }],
    id: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    appearance: [{
      type: Input
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }]
  });
})();
var MatButtonToggleModule = class _MatButtonToggleModule {
  static \u0275fac = function MatButtonToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatButtonToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatButtonToggleModule,
    imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
    exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule, MatButtonToggle, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatButtonToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatButtonToggleGroup, MatButtonToggle],
      exports: [MatCommonModule, MatButtonToggleGroup, MatButtonToggle]
    }]
  }], null, null);
})();

// src/app/pages/admin/compliance/compliance.component.ts
function ComplianceComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_12_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Reference");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_12_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r1.referenceNumber);
  }
}
function ComplianceComponent_mat_card_12_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Sender");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_12_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r2.senderName);
  }
}
function ComplianceComponent_mat_card_12_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_12_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(2, 2, a_r3.sendAmount, "1.2-2"), " ", a_r3.sendCurrency, "");
  }
}
function ComplianceComponent_mat_card_12_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Alert Type");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_12_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r4.alertType);
  }
}
function ComplianceComponent_mat_card_12_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_12_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r5.description);
  }
}
function ComplianceComponent_mat_card_12_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_12_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28)(1, "span", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", a_r6.isResolved ? "chip-success" : "chip-error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r6.isResolved ? "Resolved" : "Open", " ");
  }
}
function ComplianceComponent_mat_card_12_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Created");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_12_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, a_r7.createdAt, "yyyy-MM-dd HH:mm"));
  }
}
function ComplianceComponent_mat_card_12_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 27);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_12_td_25_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 32);
    \u0275\u0275listener("click", function ComplianceComponent_mat_card_12_td_25_ng_container_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const a_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.openResolvePopup(a_r9));
    });
    \u0275\u0275elementStart(2, "mat-icon", 33);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function ComplianceComponent_mat_card_12_td_25_ng_container_1_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const a_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r9 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r9.releaseAlert(a_r9));
    });
    \u0275\u0275elementStart(5, "mat-icon", 35);
    \u0275\u0275text(6, "lock_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ComplianceComponent_mat_card_12_td_25_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 36);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const a_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r9.resolution);
  }
}
function ComplianceComponent_mat_card_12_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 28);
    \u0275\u0275template(1, ComplianceComponent_mat_card_12_td_25_ng_container_1_Template, 7, 0, "ng-container", 31)(2, ComplianceComponent_mat_card_12_td_25_ng_container_2_Template, 3, 1, "ng-container", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !a_r9.isResolved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r9.isResolved);
  }
}
function ComplianceComponent_mat_card_12_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 37);
  }
}
function ComplianceComponent_mat_card_12_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 38);
  }
}
function ComplianceComponent_mat_card_12_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275text(1, " No compliance alerts found. ");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 12)(1, "table", 13);
    \u0275\u0275elementContainerStart(2, 14);
    \u0275\u0275template(3, ComplianceComponent_mat_card_12_th_3_Template, 2, 0, "th", 15)(4, ComplianceComponent_mat_card_12_td_4_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 17);
    \u0275\u0275template(6, ComplianceComponent_mat_card_12_th_6_Template, 2, 0, "th", 15)(7, ComplianceComponent_mat_card_12_td_7_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 18);
    \u0275\u0275template(9, ComplianceComponent_mat_card_12_th_9_Template, 2, 0, "th", 15)(10, ComplianceComponent_mat_card_12_td_10_Template, 3, 5, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 19);
    \u0275\u0275template(12, ComplianceComponent_mat_card_12_th_12_Template, 2, 0, "th", 15)(13, ComplianceComponent_mat_card_12_td_13_Template, 3, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 20);
    \u0275\u0275template(15, ComplianceComponent_mat_card_12_th_15_Template, 2, 0, "th", 15)(16, ComplianceComponent_mat_card_12_td_16_Template, 2, 1, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 21);
    \u0275\u0275template(18, ComplianceComponent_mat_card_12_th_18_Template, 2, 0, "th", 15)(19, ComplianceComponent_mat_card_12_td_19_Template, 3, 2, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 22);
    \u0275\u0275template(21, ComplianceComponent_mat_card_12_th_21_Template, 2, 0, "th", 15)(22, ComplianceComponent_mat_card_12_td_22_Template, 3, 4, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23, 23);
    \u0275\u0275template(24, ComplianceComponent_mat_card_12_th_24_Template, 2, 0, "th", 15)(25, ComplianceComponent_mat_card_12_td_25_Template, 3, 2, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(26, ComplianceComponent_mat_card_12_tr_26_Template, 1, 0, "tr", 24)(27, ComplianceComponent_mat_card_12_tr_27_Template, 1, 0, "tr", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, ComplianceComponent_mat_card_12_div_28_Template, 2, 0, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r9.alerts);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r9.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r9.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r9.alerts.length && !ctx_r9.loading);
  }
}
function ComplianceComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275listener("click", function ComplianceComponent_div_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.closeResolvePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "div", 51)(2, "span", 52);
    \u0275\u0275text(3, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 51)(7, "span", 52);
    \u0275\u0275text(8, "Alert Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r9.resolveAlertTarget.referenceNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r9.resolveAlertTarget.alertType);
  }
}
function ComplianceComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "h3");
    \u0275\u0275text(3, "Resolve Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function ComplianceComponent_div_14_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.closeResolvePopup());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, ComplianceComponent_div_14_div_7_Template, 11, 2, "div", 44);
    \u0275\u0275elementStart(8, "mat-form-field", 45)(9, "mat-label");
    \u0275\u0275text(10, "Resolution Notes *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 46);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceComponent_div_14_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r9 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r9.resolutionText, $event) || (ctx_r9.resolutionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 47)(13, "button", 48);
    \u0275\u0275listener("click", function ComplianceComponent_div_14_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.closeResolvePopup());
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, " Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 49);
    \u0275\u0275listener("click", function ComplianceComponent_div_14_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r9 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r9.resolveAlert());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " Resolve ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r9.resolveAlertTarget);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r9.resolutionText);
  }
}
var ComplianceComponent = class _ComplianceComponent {
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.alerts = [];
    this.displayedColumns = [
      "reference",
      "sender",
      "amount",
      "alertType",
      "description",
      "status",
      "created",
      "actions"
    ];
    this.loading = true;
    this.filterMode = "all";
    this.showResolvePopup = false;
    this.resolveAlertTarget = null;
    this.resolutionText = "";
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadAlerts();
  }
  // ---------------------------------------------------------------------------
  // Load alerts
  // ---------------------------------------------------------------------------
  loadAlerts() {
    this.loading = true;
    let resolved;
    if (this.filterMode === "open")
      resolved = false;
    else if (this.filterMode === "resolved")
      resolved = true;
    this.api.getAlerts(resolved).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.alerts = res.data;
        } else {
          this.alerts = [];
          this.notify.error(res?.message || "Failed to load alerts.");
        }
        this.loading = false;
      },
      error: () => {
        this.alerts = [];
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  onFilterChange() {
    this.loadAlerts();
  }
  // ---------------------------------------------------------------------------
  // Resolve popup
  // ---------------------------------------------------------------------------
  openResolvePopup(alert) {
    this.resolveAlertTarget = alert;
    this.resolutionText = "";
    this.showResolvePopup = true;
  }
  closeResolvePopup() {
    this.showResolvePopup = false;
    this.resolveAlertTarget = null;
    this.resolutionText = "";
  }
  resolveAlert() {
    if (!this.resolveAlertTarget)
      return;
    const resolution = this.resolutionText.trim();
    if (!resolution) {
      this.notify.warn("Please enter a resolution text.");
      return;
    }
    this.api.resolveAlert(this.resolveAlertTarget.id, resolution).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Alert resolved.");
        this.closeResolvePopup();
        this.loadAlerts();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  // ---------------------------------------------------------------------------
  // Release
  // ---------------------------------------------------------------------------
  releaseAlert(alert) {
    this.api.releaseAlert(alert.id).subscribe((r) => {
      if (r?.success) {
        this.notify.success("Transaction released.");
        this.loadAlerts();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function ComplianceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComplianceComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplianceComponent, selectors: [["app-compliance"]], decls: 15, vars: 5, consts: [[1, "page-header"], [1, "filter-bar"], [3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "open"], ["value", "resolved"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "overlay", 3, "click", 4, "ngIf"], ["class", "popup popup-sm", 4, "ngIf"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "reference"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "sender"], ["matColumnDef", "amount"], ["matColumnDef", "alertType"], ["matColumnDef", "description"], ["matColumnDef", "status"], ["matColumnDef", "created"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "chip", "chip-warning"], [1, "chip", 3, "ngClass"], [4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Resolve", 3, "click"], [1, "text-success"], ["mat-icon-button", "", "matTooltip", "Release Transaction", 3, "click"], ["color", "primary"], [1, "resolution-text"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "overlay", 3, "click"], [1, "popup", "popup-sm"], [1, "popup-header"], ["mat-icon-button", "", 3, "click"], ["class", "resolve-info", 4, "ngIf"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "rows", "3", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "resolve-info"], [1, "detail-item"], [1, "detail-label"]], template: function ComplianceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Compliance Alerts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 1)(4, "mat-button-toggle-group", 2);
        \u0275\u0275twoWayListener("ngModelChange", function ComplianceComponent_Template_mat_button_toggle_group_ngModelChange_4_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterMode, $event) || (ctx.filterMode = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ComplianceComponent_Template_mat_button_toggle_group_ngModelChange_4_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(5, "mat-button-toggle", 3);
        \u0275\u0275text(6, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-button-toggle", 4);
        \u0275\u0275text(8, "Open");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-button-toggle", 5);
        \u0275\u0275text(10, "Resolved");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(11, ComplianceComponent_div_11_Template, 2, 0, "div", 6)(12, ComplianceComponent_mat_card_12_Template, 29, 4, "mat-card", 7)(13, ComplianceComponent_div_13_Template, 1, 0, "div", 8)(14, ComplianceComponent_div_14_Template, 21, 2, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterMode);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResolvePopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResolvePopup);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  padding: 14px;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.data-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.data-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.chip.chip-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-default[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-success[_ngcontent-%COMP%] {\n  color: #2e7d32 !important;\n}\n.resolution-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  font-style: italic;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.popup[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-sm[_ngcontent-%COMP%] {\n  width: 440px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.popup-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n}\n.popup-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n.resolve-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 14px;\n  padding: 10px;\n  background: #f8fafc;\n  border-radius: 6px;\n}\n.detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .popup[_ngcontent-%COMP%] {\n    padding: 14px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=compliance.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComplianceComponent, [{
    type: Component,
    args: [{ selector: "app-compliance", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatTableModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatIconModule,
      MatTooltipModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatProgressSpinnerModule,
      DecimalPipe,
      DatePipe
    ], template: `<!-- Page Header -->\r
<div class="page-header">\r
  <h2>Compliance Alerts</h2>\r
</div>\r
\r
<!-- Filter Toggle -->\r
<div class="filter-bar">\r
  <mat-button-toggle-group [(ngModel)]="filterMode" (ngModelChange)="onFilterChange()">\r
    <mat-button-toggle value="all">All</mat-button-toggle>\r
    <mat-button-toggle value="open">Open</mat-button-toggle>\r
    <mat-button-toggle value="resolved">Resolved</mat-button-toggle>\r
  </mat-button-toggle-group>\r
</div>\r
\r
<!-- Loading -->\r
<div *ngIf="loading" class="loading-container">\r
  <mat-spinner diameter="40"></mat-spinner>\r
</div>\r
\r
<!-- Table -->\r
<mat-card *ngIf="!loading" class="table-card">\r
  <table mat-table [dataSource]="alerts" class="data-table">\r
    <!-- Reference -->\r
    <ng-container matColumnDef="reference">\r
      <th mat-header-cell *matHeaderCellDef>Reference</th>\r
      <td mat-cell *matCellDef="let a">{{ a.referenceNumber }}</td>\r
    </ng-container>\r
\r
    <!-- Sender -->\r
    <ng-container matColumnDef="sender">\r
      <th mat-header-cell *matHeaderCellDef>Sender</th>\r
      <td mat-cell *matCellDef="let a">{{ a.senderName }}</td>\r
    </ng-container>\r
\r
    <!-- Amount -->\r
    <ng-container matColumnDef="amount">\r
      <th mat-header-cell *matHeaderCellDef>Amount</th>\r
      <td mat-cell *matCellDef="let a">{{ a.sendAmount | number:'1.2-2' }} {{ a.sendCurrency }}</td>\r
    </ng-container>\r
\r
    <!-- Alert Type -->\r
    <ng-container matColumnDef="alertType">\r
      <th mat-header-cell *matHeaderCellDef>Alert Type</th>\r
      <td mat-cell *matCellDef="let a">\r
        <span class="chip chip-warning">{{ a.alertType }}</span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Description -->\r
    <ng-container matColumnDef="description">\r
      <th mat-header-cell *matHeaderCellDef>Description</th>\r
      <td mat-cell *matCellDef="let a">{{ a.description }}</td>\r
    </ng-container>\r
\r
    <!-- Status -->\r
    <ng-container matColumnDef="status">\r
      <th mat-header-cell *matHeaderCellDef>Status</th>\r
      <td mat-cell *matCellDef="let a">\r
        <span class="chip" [ngClass]="a.isResolved ? 'chip-success' : 'chip-error'">\r
          {{ a.isResolved ? 'Resolved' : 'Open' }}\r
        </span>\r
      </td>\r
    </ng-container>\r
\r
    <!-- Created -->\r
    <ng-container matColumnDef="created">\r
      <th mat-header-cell *matHeaderCellDef>Created</th>\r
      <td mat-cell *matCellDef="let a">{{ a.createdAt | date:'yyyy-MM-dd HH:mm' }}</td>\r
    </ng-container>\r
\r
    <!-- Actions -->\r
    <ng-container matColumnDef="actions">\r
      <th mat-header-cell *matHeaderCellDef>Actions</th>\r
      <td mat-cell *matCellDef="let a">\r
        <ng-container *ngIf="!a.isResolved">\r
          <button mat-icon-button matTooltip="Resolve" (click)="openResolvePopup(a)">\r
            <mat-icon class="text-success">check_circle</mat-icon>\r
          </button>\r
          <button mat-icon-button matTooltip="Release Transaction" (click)="releaseAlert(a)">\r
            <mat-icon color="primary">lock_open</mat-icon>\r
          </button>\r
        </ng-container>\r
        <ng-container *ngIf="a.isResolved">\r
          <span class="resolution-text">{{ a.resolution }}</span>\r
        </ng-container>\r
      </td>\r
    </ng-container>\r
\r
    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\r
  </table>\r
\r
  <div *ngIf="!alerts.length && !loading" class="empty-state">\r
    No compliance alerts found.\r
  </div>\r
</mat-card>\r
\r
<!-- Resolve Popup Overlay -->\r
<div *ngIf="showResolvePopup" class="overlay" (click)="closeResolvePopup()"></div>\r
<div *ngIf="showResolvePopup" class="popup popup-sm">\r
  <div class="popup-header">\r
    <h3>Resolve Alert</h3>\r
    <button mat-icon-button (click)="closeResolvePopup()"><mat-icon>close</mat-icon></button>\r
  </div>\r
  <div *ngIf="resolveAlertTarget" class="resolve-info">\r
    <div class="detail-item"><span class="detail-label">Reference</span><span>{{ resolveAlertTarget.referenceNumber }}</span></div>\r
    <div class="detail-item"><span class="detail-label">Alert Type</span><span>{{ resolveAlertTarget.alertType }}</span></div>\r
  </div>\r
  <mat-form-field appearance="outline" class="full-width">\r
    <mat-label>Resolution Notes *</mat-label>\r
    <textarea matInput [(ngModel)]="resolutionText" rows="3"></textarea>\r
  </mat-form-field>\r
  <div class="popup-actions">\r
    <button mat-button (click)="closeResolvePopup()"><mat-icon>close</mat-icon> Cancel</button>\r
    <button mat-raised-button color="primary" (click)="resolveAlert()">\r
      <mat-icon>check_circle</mat-icon> Resolve\r
    </button>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/admin/compliance/compliance.component.scss */\n.page-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.page-header h2 {\n  font-weight: 700;\n  margin: 0;\n}\n.filter-bar {\n  margin-bottom: 16px;\n}\n.loading-container {\n  display: flex;\n  justify-content: center;\n  padding: 48px 0;\n}\n.table-card {\n  border-radius: 10px;\n  padding: 14px;\n}\n.data-table {\n  width: 100%;\n}\n.data-table th.mat-mdc-header-cell {\n  font-weight: 600;\n  color: rgba(0, 0, 0, 0.7);\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.data-table td.mat-mdc-cell {\n  font-size: 13px;\n}\n.empty-state {\n  text-align: center;\n  padding: 28px;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 13px;\n}\n.chip {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.chip.chip-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.chip.chip-error {\n  background: #ffebee;\n  color: #c62828;\n}\n.chip.chip-warning {\n  background: #fff3e0;\n  color: #e65100;\n}\n.chip.chip-info {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.chip.chip-default {\n  background: #f5f5f5;\n  color: #616161;\n}\n.text-success {\n  color: #2e7d32 !important;\n}\n.resolution-text {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.6);\n  font-style: italic;\n}\n.overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 10000;\n}\n.popup {\n  position: fixed;\n  top: 50%;\n  left: calc(50% + 125px);\n  transform: translate(-50%, -50%);\n  z-index: 10001;\n  background: #fff;\n  border-radius: 10px;\n  padding: 20px;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n}\n.popup.popup-sm {\n  width: 440px;\n  max-width: calc(100vw - 300px);\n}\n.popup-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 14px;\n}\n.popup-header h3 {\n  margin: 0;\n  font-weight: 600;\n  font-size: 17px;\n}\n.popup-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  margin-top: 14px;\n}\n.resolve-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 14px;\n  padding: 10px;\n  background: #f8fafc;\n  border-radius: 6px;\n}\n.detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.detail-label {\n  font-size: 11px;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.full-width {\n  width: 100%;\n}\n@media (max-width: 768px) {\n  .page-header {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 10px;\n  }\n  .popup {\n    padding: 14px;\n    left: 50%;\n  }\n}\n/*# sourceMappingURL=compliance.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplianceComponent, { className: "ComplianceComponent", filePath: "src/app/pages/admin/compliance/compliance.component.ts", lineNumber: 39 });
})();
export {
  ComplianceComponent
};
//# sourceMappingURL=chunk-2EEHWA6F.js.map
