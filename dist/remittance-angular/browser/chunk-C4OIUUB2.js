import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-IXW56OZ7.js";
import {
  ExportService
} from "./chunk-BWFLUKJM.js";
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
} from "./chunk-NVO6BOJL.js";
import "./chunk-6JH6Y4IN.js";
import "./chunk-4RZM2DGZ.js";
import {
  MatPseudoCheckbox
} from "./chunk-Q6H4NCRS.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-4T44KS6V.js";
import "./chunk-BE35DT6E.js";
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
  MatCardModule
} from "./chunk-JCOTY37K.js";
import {
  SelectionModel
} from "./chunk-UIJ624TU.js";
import {
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-ZCHVZ7GG.js";
import {
  ApiService
} from "./chunk-2RUHVO6L.js";
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
} from "./chunk-WDVIFEQ7.js";
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
} from "./chunk-MK4SB477.js";
import {
  AuthStateService
} from "./chunk-GPY2JV2J.js";
import {
  CommonModule,
  DatePipe,
  DecimalPipe,
  NgClass,
  NgIf
} from "./chunk-MZ37WZKD.js";
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
  Subject,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  debounceTime,
  forwardRef,
  inject,
  setClassMetadata,
  takeUntil,
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
  ɵɵpureFunction0,
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
} from "./chunk-BKSYICRS.js";

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
var _c02 = () => [10, 20, 50, 100];
function ComplianceComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "mat-icon");
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19)(7, "mat-icon");
    \u0275\u0275text(8, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 20)(12, "mat-icon");
    \u0275\u0275text(13, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.openCount, " Open");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.resolvedCount, " Resolved");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.rejectedCount, " Rejected");
  }
}
function ComplianceComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ComplianceComponent_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.searchText = "";
      return \u0275\u0275resetView(ctx_r0.searchDebounce.next(""));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "clear");
    \u0275\u0275elementEnd()();
  }
}
function ComplianceComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "mat-spinner", 23);
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_31_th_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Reference");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_31_td_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r4.referenceNumber);
  }
}
function ComplianceComponent_mat_card_31_th_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Sender");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_31_td_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r5.senderCountry);
  }
}
function ComplianceComponent_mat_card_31_td_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ComplianceComponent_mat_card_31_td_8_div_3_Template, 2, 1, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r5.senderName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r5.senderCountry);
  }
}
function ComplianceComponent_mat_card_31_th_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Receiver");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_31_td_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(a_r6.receiverCountry);
  }
}
function ComplianceComponent_mat_card_31_td_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ComplianceComponent_mat_card_31_td_11_div_3_Template, 2, 1, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r6.receiverName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r6.receiverCountry);
  }
}
function ComplianceComponent_mat_card_31_th_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_31_td_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 49);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(3, 4, a_r7.sendAmount, "1.2-2"), " ", a_r7.sendCurrency, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("\u2192 ", \u0275\u0275pipeBind2(6, 7, a_r7.receiveAmount, "1.2-2"), " ", a_r7.receiveCurrency, "");
  }
}
function ComplianceComponent_mat_card_31_th_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Alert Type");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_31_td_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "span", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r8.alertType);
  }
}
function ComplianceComponent_mat_card_31_th_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Txn Status");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_31_td_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.getTxnStatusClass(a_r9.transactionStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTxnStatusLabel(a_r9.transactionStatus), " ");
  }
}
function ComplianceComponent_mat_card_31_th_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Alert");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_31_td_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46)(1, "span", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", a_r10.isResolved ? "chip-success" : "chip-error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", a_r10.isResolved ? "Resolved" : "Open", " ");
  }
}
function ComplianceComponent_mat_card_31_th_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Created");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_31_td_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, a_r11.createdAt, "MMM dd, HH:mm"));
  }
}
function ComplianceComponent_mat_card_31_th_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 44);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ComplianceComponent_mat_card_31_td_29_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 57);
    \u0275\u0275listener("click", function ComplianceComponent_mat_card_31_td_29_ng_container_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r14);
      const a_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openResolvePopup(a_r13));
    });
    \u0275\u0275elementStart(2, "mat-icon", 58);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 59);
    \u0275\u0275listener("click", function ComplianceComponent_mat_card_31_td_29_ng_container_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const a_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.rejectAlert(a_r13));
    });
    \u0275\u0275elementStart(5, "mat-icon", 60);
    \u0275\u0275text(6, "cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function ComplianceComponent_mat_card_31_td_29_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 61)(1, "mat-icon");
    \u0275\u0275text(2, "notes");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("matTooltip", a_r13.resolution);
  }
}
function ComplianceComponent_mat_card_31_td_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 52)(1, "button", 53);
    \u0275\u0275listener("click", function ComplianceComponent_mat_card_31_td_29_Template_button_click_1_listener() {
      const a_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewDetail(a_r13));
    });
    \u0275\u0275elementStart(2, "mat-icon", 54);
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, ComplianceComponent_mat_card_31_td_29_ng_container_4_Template, 7, 0, "ng-container", 55)(5, ComplianceComponent_mat_card_31_td_29_span_5_Template, 3, 1, "span", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const a_r13 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !a_r13.isResolved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", a_r13.isResolved && a_r13.resolution);
  }
}
function ComplianceComponent_mat_card_31_tr_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 62);
  }
}
function ComplianceComponent_mat_card_31_tr_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 63);
  }
}
function ComplianceComponent_mat_card_31_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 64)(1, "mat-icon");
    \u0275\u0275text(2, "shield");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No compliance alerts found.");
    \u0275\u0275elementEnd()();
  }
}
function ComplianceComponent_mat_card_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 24)(1, "div", 25)(2, "table", 26);
    \u0275\u0275elementContainerStart(3, 27);
    \u0275\u0275template(4, ComplianceComponent_mat_card_31_th_4_Template, 2, 0, "th", 28)(5, ComplianceComponent_mat_card_31_td_5_Template, 2, 1, "td", 29);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(6, 30);
    \u0275\u0275template(7, ComplianceComponent_mat_card_31_th_7_Template, 2, 0, "th", 28)(8, ComplianceComponent_mat_card_31_td_8_Template, 4, 2, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(9, 32);
    \u0275\u0275template(10, ComplianceComponent_mat_card_31_th_10_Template, 2, 0, "th", 28)(11, ComplianceComponent_mat_card_31_td_11_Template, 4, 2, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(12, 33);
    \u0275\u0275template(13, ComplianceComponent_mat_card_31_th_13_Template, 2, 0, "th", 28)(14, ComplianceComponent_mat_card_31_td_14_Template, 7, 10, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(15, 34);
    \u0275\u0275template(16, ComplianceComponent_mat_card_31_th_16_Template, 2, 0, "th", 28)(17, ComplianceComponent_mat_card_31_td_17_Template, 3, 1, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(18, 35);
    \u0275\u0275template(19, ComplianceComponent_mat_card_31_th_19_Template, 2, 0, "th", 28)(20, ComplianceComponent_mat_card_31_td_20_Template, 3, 2, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(21, 36);
    \u0275\u0275template(22, ComplianceComponent_mat_card_31_th_22_Template, 2, 0, "th", 28)(23, ComplianceComponent_mat_card_31_td_23_Template, 3, 2, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(24, 37);
    \u0275\u0275template(25, ComplianceComponent_mat_card_31_th_25_Template, 2, 0, "th", 28)(26, ComplianceComponent_mat_card_31_td_26_Template, 3, 4, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(27, 38);
    \u0275\u0275template(28, ComplianceComponent_mat_card_31_th_28_Template, 2, 0, "th", 28)(29, ComplianceComponent_mat_card_31_td_29_Template, 6, 2, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(30, ComplianceComponent_mat_card_31_tr_30_Template, 1, 0, "tr", 40)(31, ComplianceComponent_mat_card_31_tr_31_Template, 1, 0, "tr", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(32, ComplianceComponent_mat_card_31_div_32_Template, 5, 0, "div", 42);
    \u0275\u0275elementStart(33, "mat-paginator", 43);
    \u0275\u0275listener("page", function ComplianceComponent_mat_card_31_Template_mat_paginator_page_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onPageChange($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("dataSource", ctx_r0.alerts);
    \u0275\u0275advance(28);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.alerts.length === 0 && !ctx_r0.loading);
    \u0275\u0275advance();
    \u0275\u0275property("length", ctx_r0.totalCount)("pageSize", ctx_r0.pageSize)("pageIndex", ctx_r0.pageIndex)("pageSizeOptions", \u0275\u0275pureFunction0(8, _c02));
  }
}
function ComplianceComponent_div_32_p_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 83)(1, "strong");
    \u0275\u0275text(2, "Resolution:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedAlert.resolution, " ");
  }
}
function ComplianceComponent_div_32_div_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2, "Bank");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.receiverBankName);
  }
}
function ComplianceComponent_div_32_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2, "Account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.receiverAccountNumber);
  }
}
function ComplianceComponent_div_32_div_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2, "Payment Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.paymentMethodName);
  }
}
function ComplianceComponent_div_32_div_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2, "Payout Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.payoutMethodName);
  }
}
function ComplianceComponent_div_32_div_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2, "Sending Agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.sendingAgentName);
  }
}
function ComplianceComponent_div_32_div_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2, "Payout Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.payoutAgentName);
  }
}
function ComplianceComponent_div_32_div_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75)(1, "span", 76);
    \u0275\u0275text(2, "Resolved At");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.selectedAlert.resolvedAt, "yyyy-MM-dd HH:mm"));
  }
}
function ComplianceComponent_div_32_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "button", 13);
    \u0275\u0275listener("click", function ComplianceComponent_div_32_div_90_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.openResolvePopup(ctx_r0.selectedAlert);
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Resolve & Release ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 85);
    \u0275\u0275listener("click", function ComplianceComponent_div_32_div_90_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      ctx_r0.rejectAlert(ctx_r0.selectedAlert);
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Reject & Cancel ");
    \u0275\u0275elementEnd()();
  }
}
function ComplianceComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ComplianceComponent_div_32_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275elementStart(1, "div", 66);
    \u0275\u0275listener("click", function ComplianceComponent_div_32_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r15);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h3");
    \u0275\u0275text(4, "Transaction & Alert Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function ComplianceComponent_div_32_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeDetail());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 69)(9, "div", 70)(10, "mat-icon");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div")(13, "strong");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 71);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "p", 72);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ComplianceComponent_div_32_p_19_Template, 4, 1, "p", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 74)(21, "div", 75)(22, "span", 76);
    \u0275\u0275text(23, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 77);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 75)(27, "span", 76);
    \u0275\u0275text(28, "Transaction Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 51);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 75)(32, "span", 76);
    \u0275\u0275text(33, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span", 78);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 75)(37, "span", 76);
    \u0275\u0275text(38, "Sender Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 78);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 75)(42, "span", 76);
    \u0275\u0275text(43, "Receiver");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "span", 78);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 75)(47, "span", 76);
    \u0275\u0275text(48, "Receiver Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "span", 78);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(51, ComplianceComponent_div_32_div_51_Template, 5, 1, "div", 79)(52, ComplianceComponent_div_32_div_52_Template, 5, 1, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "hr", 80);
    \u0275\u0275elementStart(54, "div", 74)(55, "div", 75)(56, "span", 76);
    \u0275\u0275text(57, "Send Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 81);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 75)(62, "span", 76);
    \u0275\u0275text(63, "Receive Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "span", 81);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "div", 75)(68, "span", 76);
    \u0275\u0275text(69, "Exchange Rate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "span", 78);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 75)(74, "span", 76);
    \u0275\u0275text(75, "Total Service Charge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "span", 78);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(79, ComplianceComponent_div_32_div_79_Template, 5, 1, "div", 79)(80, ComplianceComponent_div_32_div_80_Template, 5, 1, "div", 79)(81, ComplianceComponent_div_32_div_81_Template, 5, 1, "div", 79)(82, ComplianceComponent_div_32_div_82_Template, 5, 1, "div", 79);
    \u0275\u0275elementStart(83, "div", 75)(84, "span", 76);
    \u0275\u0275text(85, "Alert Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span", 78);
    \u0275\u0275text(87);
    \u0275\u0275pipe(88, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(89, ComplianceComponent_div_32_div_89_Template, 6, 4, "div", 79);
    \u0275\u0275elementEnd();
    \u0275\u0275template(90, ComplianceComponent_div_32_div_90_Template, 9, 0, "div", 82);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngClass", ctx_r0.selectedAlert.isResolved ? "alert-banner-resolved" : "alert-banner-open");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.isResolved ? "check_circle" : "warning");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.alertType);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.selectedAlert.isResolved ? "chip-success" : "chip-error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.selectedAlert.isResolved ? "Resolved" : "Open", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.isResolved && ctx_r0.selectedAlert.resolution);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.referenceNumber);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r0.getTxnStatusClass(ctx_r0.selectedAlert.transactionStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.getTxnStatusLabel(ctx_r0.selectedAlert.transactionStatus), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.senderCountry || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.receiverName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.selectedAlert.receiverCountry || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.receiverBankName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.receiverAccountNumber);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(60, 29, ctx_r0.selectedAlert.sendAmount, "1.2-2"), " ", ctx_r0.selectedAlert.sendCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(66, 32, ctx_r0.selectedAlert.receiveAmount, "1.2-2"), " ", ctx_r0.selectedAlert.receiveCurrency, "");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(72, 35, ctx_r0.selectedAlert.exchangeRateApplied, "1.4-4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(78, 38, ctx_r0.selectedAlert.totalCommission, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.paymentMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.payoutMethodName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.sendingAgentName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.payoutAgentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(88, 41, ctx_r0.selectedAlert.createdAt, "yyyy-MM-dd HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.selectedAlert.resolvedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.selectedAlert.isResolved);
  }
}
function ComplianceComponent_div_33_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 75)(2, "span", 76);
    \u0275\u0275text(3, "Reference");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 77);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 75)(7, "span", 76);
    \u0275\u0275text(8, "Alert Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 75)(12, "span", 76);
    \u0275\u0275text(13, "Sender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 78);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 75)(17, "span", 76);
    \u0275\u0275text(18, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 78);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.resolveAlertTarget.referenceNumber);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.resolveAlertTarget.alertType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.resolveAlertTarget.senderName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(21, 5, ctx_r0.resolveAlertTarget.sendAmount, "1.2-2"), " ", ctx_r0.resolveAlertTarget.sendCurrency, "");
  }
}
function ComplianceComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65);
    \u0275\u0275listener("click", function ComplianceComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeResolvePopup());
    });
    \u0275\u0275elementStart(1, "div", 86);
    \u0275\u0275listener("click", function ComplianceComponent_div_33_Template_div_click_1_listener($event) {
      \u0275\u0275restoreView(_r17);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(2, "div", 67)(3, "h3");
    \u0275\u0275text(4, "Resolve Alert");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 68);
    \u0275\u0275listener("click", function ComplianceComponent_div_33_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeResolvePopup());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, ComplianceComponent_div_33_div_8_Template, 22, 8, "div", 87);
    \u0275\u0275elementStart(9, "mat-form-field", 88)(10, "mat-label");
    \u0275\u0275text(11, "Resolution Notes *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 89);
    \u0275\u0275twoWayListener("ngModelChange", function ComplianceComponent_div_33_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.resolutionText, $event) || (ctx_r0.resolutionText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 90)(14, "button", 91);
    \u0275\u0275listener("click", function ComplianceComponent_div_33_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.closeResolvePopup());
    });
    \u0275\u0275text(15, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 92);
    \u0275\u0275listener("click", function ComplianceComponent_div_33_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.resolveAlert());
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Resolve ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r0.resolveAlertTarget);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.resolutionText);
  }
}
var ComplianceComponent = class _ComplianceComponent {
  get openCount() {
    return this.alerts.filter((a) => !a.isResolved).length;
  }
  get resolvedCount() {
    return this.alerts.filter((a) => a.isResolved && a.resolution !== "Rejected").length;
  }
  get rejectedCount() {
    return this.alerts.filter((a) => a.isResolved && a.resolution === "Rejected").length;
  }
  constructor(api, auth, notify, exportService) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.exportService = exportService;
    this.alerts = [];
    this.displayedColumns = [
      "reference",
      "sender",
      "receiver",
      "amount",
      "alertType",
      "txnStatus",
      "alertStatus",
      "created",
      "actions"
    ];
    this.loading = true;
    this.searchText = "";
    this.filterMode = "all";
    this.pageIndex = 0;
    this.pageSize = 20;
    this.totalCount = 0;
    this.searchDebounce = new Subject();
    this.destroy$ = new Subject();
    this.showResolvePopup = false;
    this.resolveAlertTarget = null;
    this.resolutionText = "";
    this.selectedAlert = null;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.searchDebounce.pipe(debounceTime(400), takeUntil(this.destroy$)).subscribe((s) => {
      this.searchText = s;
      this.pageIndex = 0;
      this.loadAlerts();
    });
    this.loadAlerts();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  getResolvedParam() {
    switch (this.filterMode) {
      case "open":
        return false;
      case "resolved":
        return true;
      case "rejected":
        return true;
      default:
        return void 0;
    }
  }
  loadAlerts() {
    this.loading = true;
    const resolved = this.getResolvedParam();
    this.api.getAlertsPaged({ page: this.pageIndex + 1, pageSize: this.pageSize, search: this.searchText }, resolved).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.alerts = res.data.items;
          this.totalCount = res.data.totalCount;
        } else {
          this.alerts = [];
          this.totalCount = 0;
          this.notify.error(res?.message || "Failed to load alerts.");
        }
        this.loading = false;
      },
      error: () => {
        this.alerts = [];
        this.totalCount = 0;
        this.notify.error("Could not connect to server.");
        this.loading = false;
      }
    });
  }
  onFilterChange() {
    this.pageIndex = 0;
    this.loadAlerts();
  }
  onPageChange(event) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadAlerts();
  }
  exportData(format) {
    this.exportService.export("api/admin/compliance/alerts/export", { search: this.searchText, resolved: this.getResolvedParam() }, format);
  }
  viewDetail(alert) {
    this.selectedAlert = alert;
  }
  closeDetail() {
    this.selectedAlert = null;
  }
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
      this.notify.warn("Please enter resolution notes.");
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
  rejectAlert(alert) {
    this.api.rejectAlert(alert.id).subscribe((r) => {
      if (r?.success) {
        this.notify.warn("Alert rejected and transaction cancelled.");
        this.loadAlerts();
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  getTxnStatusClass(status) {
    switch (status) {
      case "Completed":
        return "chip-success";
      case "Pending":
        return "chip-warning";
      case "OnHold":
        return "chip-info";
      case "Compliance":
        return "chip-compliance";
      case "Cancelled":
      case "Failed":
        return "chip-error";
      default:
        return "chip-default";
    }
  }
  getTxnStatusLabel(status) {
    return status === "OnHold" ? "On Hold" : status;
  }
  static {
    this.\u0275fac = function ComplianceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComplianceComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(ExportService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComplianceComponent, selectors: [["app-compliance"]], decls: 34, vars: 8, consts: [[1, "page-header"], ["class", "header-stats", 4, "ngIf"], [1, "toolbar"], [3, "ngModelChange", "ngModel"], ["value", "all"], ["value", "open"], ["value", "resolved"], ["value", "rejected"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", 3, "ngModelChange", "ngModel"], ["mat-icon-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], [1, "spacer"], ["mat-stroked-button", "", 3, "click"], ["class", "loading-container", 4, "ngIf"], ["class", "table-card", 4, "ngIf"], ["class", "detail-overlay", 3, "click", 4, "ngIf"], [1, "header-stats"], [1, "stat-badge", "stat-open"], [1, "stat-badge", "stat-resolved"], [1, "stat-badge", "stat-rejected"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "loading-container"], ["diameter", "40"], [1, "table-card"], [1, "table-container"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "reference"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "ref-cell", 4, "matCellDef"], ["matColumnDef", "sender"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "receiver"], ["matColumnDef", "amount"], ["matColumnDef", "alertType"], ["matColumnDef", "txnStatus"], ["matColumnDef", "alertStatus"], ["matColumnDef", "created"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "actions-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "empty-state", 4, "ngIf"], ["showFirstLastButtons", "", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], ["mat-header-cell", ""], ["mat-cell", "", 1, "ref-cell"], ["mat-cell", ""], [1, "cell-main"], ["class", "cell-sub", 4, "ngIf"], [1, "cell-sub"], [1, "chip", "chip-warning"], [1, "chip", 3, "ngClass"], ["mat-cell", "", 1, "actions-cell"], ["mat-icon-button", "", "matTooltip", "View Transaction Details", 3, "click"], [1, "action-view"], [4, "ngIf"], ["class", "resolution-badge", 3, "matTooltip", 4, "ngIf"], ["mat-icon-button", "", "matTooltip", "Resolve & Release to Pending", 3, "click"], [1, "action-resolve"], ["mat-icon-button", "", "matTooltip", "Reject & Cancel Transaction", 3, "click"], [1, "action-reject"], [1, "resolution-badge", 3, "matTooltip"], ["mat-header-row", ""], ["mat-row", ""], [1, "empty-state"], [1, "detail-overlay", 3, "click"], [1, "detail-popup", 3, "click"], [1, "detail-header"], ["mat-icon-button", "", 3, "click"], [1, "alert-banner", 3, "ngClass"], [1, "alert-banner-row"], [1, "chip", "chip-sm", 3, "ngClass"], [1, "alert-description"], ["class", "alert-resolution", 4, "ngIf"], [1, "detail-grid"], [1, "detail-item"], [1, "detail-label"], [1, "detail-value", "ref-cell"], [1, "detail-value"], ["class", "detail-item", 4, "ngIf"], [1, "detail-divider"], [1, "detail-value", "detail-bold"], ["class", "detail-actions", 4, "ngIf"], [1, "alert-resolution"], [1, "detail-actions"], ["mat-flat-button", "", "color", "warn", 3, "click"], [1, "resolve-popup", 3, "click"], ["class", "resolve-info", 4, "ngIf"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "rows", "3", "placeholder", "Describe the resolution...", 3, "ngModelChange", "ngModel"], [1, "popup-actions"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", "color", "primary", 3, "click"], [1, "resolve-info"]], template: function ComplianceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Compliance Alerts");
        \u0275\u0275elementEnd();
        \u0275\u0275template(3, ComplianceComponent_div_3_Template, 16, 3, "div", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "mat-button-toggle-group", 3);
        \u0275\u0275twoWayListener("ngModelChange", function ComplianceComponent_Template_mat_button_toggle_group_ngModelChange_5_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.filterMode, $event) || (ctx.filterMode = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ComplianceComponent_Template_mat_button_toggle_group_ngModelChange_5_listener() {
          return ctx.onFilterChange();
        });
        \u0275\u0275elementStart(6, "mat-button-toggle", 4);
        \u0275\u0275text(7, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "mat-button-toggle", 5);
        \u0275\u0275text(9, "Open");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-button-toggle", 6);
        \u0275\u0275text(11, "Resolved");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "mat-button-toggle", 7);
        \u0275\u0275text(13, "Rejected");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "mat-form-field", 8)(15, "mat-icon", 9);
        \u0275\u0275text(16, "search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-label");
        \u0275\u0275text(18, "Search alerts...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "input", 10);
        \u0275\u0275twoWayListener("ngModelChange", function ComplianceComponent_Template_input_ngModelChange_19_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function ComplianceComponent_Template_input_ngModelChange_19_listener($event) {
          return ctx.searchDebounce.next($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(20, ComplianceComponent_button_20_Template, 3, 0, "button", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(21, "span", 12);
        \u0275\u0275elementStart(22, "button", 13);
        \u0275\u0275listener("click", function ComplianceComponent_Template_button_click_22_listener() {
          return ctx.exportData("excel");
        });
        \u0275\u0275elementStart(23, "mat-icon");
        \u0275\u0275text(24, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " Excel ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "button", 13);
        \u0275\u0275listener("click", function ComplianceComponent_Template_button_click_26_listener() {
          return ctx.exportData("csv");
        });
        \u0275\u0275elementStart(27, "mat-icon");
        \u0275\u0275text(28, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " CSV ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(30, ComplianceComponent_div_30_Template, 2, 0, "div", 14)(31, ComplianceComponent_mat_card_31_Template, 34, 9, "mat-card", 15)(32, ComplianceComponent_div_32_Template, 91, 44, "div", 16)(33, ComplianceComponent_div_33_Template, 20, 2, "div", 16);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("ngModel", ctx.filterMode);
        \u0275\u0275advance(14);
        \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.searchText);
        \u0275\u0275advance(10);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.selectedAlert);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showResolvePopup);
      }
    }, dependencies: [CommonModule, NgClass, NgIf, DecimalPipe, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, MatIconModule, MatIcon, MatTooltipModule, MatTooltip, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatSuffix, MatInputModule, MatInput, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner, MatPaginatorModule, MatPaginator], styles: ['\n\n.header-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.stat-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.stat-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.stat-open[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.stat-resolved[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.stat-rejected[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.cell-main[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.cell-sub[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n}\n.ref-cell[_ngcontent-%COMP%] {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.action-view[_ngcontent-%COMP%] {\n  color: #1565c0;\n}\n.action-resolve[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.action-reject[_ngcontent-%COMP%] {\n  color: #d32f2f;\n}\n.resolution-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n.resolution-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.chip.chip-sm[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 1px 8px;\n}\n.chip.chip-compliance[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.alert-banner-open[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  border: 1px solid #ffcc80;\n}\n.alert-banner-resolved[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n}\n.alert-banner-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n.alert-banner-row[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.alert-banner-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-right: 8px;\n}\n.alert-description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.7);\n  margin: 4px 0 0;\n}\n.alert-resolution[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.7);\n  margin: 6px 0 0;\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.resolve-popup[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  width: 460px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  z-index: 10001;\n}\n.resolve-info[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 16px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 8px;\n}\n.dark-mode[_nghost-%COMP%]   .stat-open[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-open[_ngcontent-%COMP%] {\n  background: rgba(230, 81, 0, 0.2);\n  color: #fb923c;\n}\n.dark-mode[_nghost-%COMP%]   .stat-resolved[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-resolved[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.2);\n  color: #4ade80;\n}\n.dark-mode[_nghost-%COMP%]   .stat-rejected[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .stat-rejected[_ngcontent-%COMP%] {\n  background: rgba(198, 40, 40, 0.2);\n  color: #fca5a5;\n}\n.dark-mode[_nghost-%COMP%]   .cell-sub[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .cell-sub[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.dark-mode[_nghost-%COMP%]   .action-view[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .action-view[_ngcontent-%COMP%] {\n  color: #60a5fa;\n}\n.dark-mode[_nghost-%COMP%]   .action-resolve[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .action-resolve[_ngcontent-%COMP%] {\n  color: #4ade80;\n}\n.dark-mode[_nghost-%COMP%]   .action-reject[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .action-reject[_ngcontent-%COMP%] {\n  color: #f87171;\n}\n.dark-mode[_nghost-%COMP%]   .resolution-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .resolution-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .chip.chip-compliance[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .chip.chip-compliance[_ngcontent-%COMP%] {\n  background: rgba(245, 127, 23, 0.2);\n  color: #fbbf24;\n}\n.dark-mode[_nghost-%COMP%]   .resolve-popup[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .resolve-popup[_ngcontent-%COMP%] {\n  background: #1e293b;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n}\n.dark-mode[_nghost-%COMP%]   .detail-actions[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .detail-actions[_ngcontent-%COMP%] {\n  border-top-color: rgba(255, 255, 255, 0.08);\n}\n.dark-mode[_nghost-%COMP%]   .alert-banner-open[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-banner-open[_ngcontent-%COMP%] {\n  background: rgba(230, 81, 0, 0.15);\n  border-color: rgba(230, 81, 0, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .alert-banner-resolved[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-banner-resolved[_ngcontent-%COMP%] {\n  background: rgba(46, 125, 50, 0.15);\n  border-color: rgba(46, 125, 50, 0.3);\n}\n.dark-mode[_nghost-%COMP%]   .alert-description[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-description[_ngcontent-%COMP%], \n.dark-mode[_nghost-%COMP%]   .alert-resolution[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .alert-resolution[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.dark-mode[_nghost-%COMP%]   .resolve-info[_ngcontent-%COMP%], .dark-mode   [_nghost-%COMP%]   .resolve-info[_ngcontent-%COMP%] {\n  background: #334155;\n}\n@media (max-width: 768px) {\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .resolve-info[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=compliance.component.css.map */'] });
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
      MatPaginatorModule,
      DecimalPipe,
      DatePipe
    ], template: `<!-- Page Header -->
<div class="page-header">
  <h2>Compliance Alerts</h2>
  <div class="header-stats" *ngIf="!loading">
    <div class="stat-badge stat-open">
      <mat-icon>warning</mat-icon>
      <span>{{ openCount }} Open</span>
    </div>
    <div class="stat-badge stat-resolved">
      <mat-icon>check_circle</mat-icon>
      <span>{{ resolvedCount }} Resolved</span>
    </div>
    <div class="stat-badge stat-rejected">
      <mat-icon>cancel</mat-icon>
      <span>{{ rejectedCount }} Rejected</span>
    </div>
  </div>
</div>

<!-- Toolbar -->
<div class="toolbar">
  <mat-button-toggle-group [(ngModel)]="filterMode" (ngModelChange)="onFilterChange()">
    <mat-button-toggle value="all">All</mat-button-toggle>
    <mat-button-toggle value="open">Open</mat-button-toggle>
    <mat-button-toggle value="resolved">Resolved</mat-button-toggle>
    <mat-button-toggle value="rejected">Rejected</mat-button-toggle>
  </mat-button-toggle-group>

  <mat-form-field appearance="outline" class="search-field">
    <mat-icon matPrefix>search</mat-icon>
    <mat-label>Search alerts...</mat-label>
    <input matInput [(ngModel)]="searchText" (ngModelChange)="searchDebounce.next($event)" />
    <button *ngIf="searchText" mat-icon-button matSuffix (click)="searchText = ''; searchDebounce.next('')">
      <mat-icon>clear</mat-icon>
    </button>
  </mat-form-field>

  <span class="spacer"></span>
  <button mat-stroked-button (click)="exportData('excel')">
    <mat-icon>download</mat-icon> Excel
  </button>
  <button mat-stroked-button (click)="exportData('csv')">
    <mat-icon>download</mat-icon> CSV
  </button>
</div>

<!-- Loading -->
<div *ngIf="loading" class="loading-container">
  <mat-spinner diameter="40"></mat-spinner>
</div>

<!-- Table -->
<mat-card *ngIf="!loading" class="table-card">
  <div class="table-container">
    <table mat-table [dataSource]="alerts" class="data-table">
      <!-- Reference -->
      <ng-container matColumnDef="reference">
        <th mat-header-cell *matHeaderCellDef>Reference</th>
        <td mat-cell *matCellDef="let a" class="ref-cell">{{ a.referenceNumber }}</td>
      </ng-container>

      <!-- Sender -->
      <ng-container matColumnDef="sender">
        <th mat-header-cell *matHeaderCellDef>Sender</th>
        <td mat-cell *matCellDef="let a">
          <div class="cell-main">{{ a.senderName }}</div>
          <div class="cell-sub" *ngIf="a.senderCountry">{{ a.senderCountry }}</div>
        </td>
      </ng-container>

      <!-- Receiver -->
      <ng-container matColumnDef="receiver">
        <th mat-header-cell *matHeaderCellDef>Receiver</th>
        <td mat-cell *matCellDef="let a">
          <div class="cell-main">{{ a.receiverName }}</div>
          <div class="cell-sub" *ngIf="a.receiverCountry">{{ a.receiverCountry }}</div>
        </td>
      </ng-container>

      <!-- Amount -->
      <ng-container matColumnDef="amount">
        <th mat-header-cell *matHeaderCellDef>Amount</th>
        <td mat-cell *matCellDef="let a">
          <div class="cell-main">{{ a.sendAmount | number:'1.2-2' }} {{ a.sendCurrency }}</div>
          <div class="cell-sub">\u2192 {{ a.receiveAmount | number:'1.2-2' }} {{ a.receiveCurrency }}</div>
        </td>
      </ng-container>

      <!-- Alert Type -->
      <ng-container matColumnDef="alertType">
        <th mat-header-cell *matHeaderCellDef>Alert Type</th>
        <td mat-cell *matCellDef="let a">
          <span class="chip chip-warning">{{ a.alertType }}</span>
        </td>
      </ng-container>

      <!-- Transaction Status -->
      <ng-container matColumnDef="txnStatus">
        <th mat-header-cell *matHeaderCellDef>Txn Status</th>
        <td mat-cell *matCellDef="let a">
          <span class="chip" [ngClass]="getTxnStatusClass(a.transactionStatus)">
            {{ getTxnStatusLabel(a.transactionStatus) }}
          </span>
        </td>
      </ng-container>

      <!-- Alert Status -->
      <ng-container matColumnDef="alertStatus">
        <th mat-header-cell *matHeaderCellDef>Alert</th>
        <td mat-cell *matCellDef="let a">
          <span class="chip" [ngClass]="a.isResolved ? 'chip-success' : 'chip-error'">
            {{ a.isResolved ? 'Resolved' : 'Open' }}
          </span>
        </td>
      </ng-container>

      <!-- Created -->
      <ng-container matColumnDef="created">
        <th mat-header-cell *matHeaderCellDef>Created</th>
        <td mat-cell *matCellDef="let a">{{ a.createdAt | date:'MMM dd, HH:mm' }}</td>
      </ng-container>

      <!-- Actions -->
      <ng-container matColumnDef="actions">
        <th mat-header-cell *matHeaderCellDef>Actions</th>
        <td mat-cell *matCellDef="let a" class="actions-cell">
          <!-- View Details (always) -->
          <button mat-icon-button matTooltip="View Transaction Details" (click)="viewDetail(a)">
            <mat-icon class="action-view">visibility</mat-icon>
          </button>

          <ng-container *ngIf="!a.isResolved">
            <!-- Resolve & Release -->
            <button mat-icon-button matTooltip="Resolve & Release to Pending" (click)="openResolvePopup(a)">
              <mat-icon class="action-resolve">check_circle</mat-icon>
            </button>
            <!-- Reject & Cancel Transaction -->
            <button mat-icon-button matTooltip="Reject & Cancel Transaction" (click)="rejectAlert(a)">
              <mat-icon class="action-reject">cancel</mat-icon>
            </button>
          </ng-container>

          <span *ngIf="a.isResolved && a.resolution" class="resolution-badge" [matTooltip]="a.resolution">
            <mat-icon>notes</mat-icon>
          </span>
        </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </div>

  <div *ngIf="alerts.length === 0 && !loading" class="empty-state">
    <mat-icon>shield</mat-icon>
    <p>No compliance alerts found.</p>
  </div>

  <mat-paginator [length]="totalCount"
                 [pageSize]="pageSize"
                 [pageIndex]="pageIndex"
                 [pageSizeOptions]="[10, 20, 50, 100]"
                 (page)="onPageChange($event)"
                 showFirstLastButtons>
  </mat-paginator>
</mat-card>

<!-- Transaction Detail Overlay -->
<div *ngIf="selectedAlert" class="detail-overlay" (click)="closeDetail()">
  <div class="detail-popup" (click)="$event.stopPropagation()">
    <div class="detail-header">
      <h3>Transaction & Alert Details</h3>
      <button mat-icon-button (click)="closeDetail()">
        <mat-icon>close</mat-icon>
      </button>
    </div>

    <!-- Alert Info Banner -->
    <div class="alert-banner" [ngClass]="selectedAlert.isResolved ? 'alert-banner-resolved' : 'alert-banner-open'">
      <div class="alert-banner-row">
        <mat-icon>{{ selectedAlert.isResolved ? 'check_circle' : 'warning' }}</mat-icon>
        <div>
          <strong>{{ selectedAlert.alertType }}</strong>
          <span class="chip chip-sm" [ngClass]="selectedAlert.isResolved ? 'chip-success' : 'chip-error'">
            {{ selectedAlert.isResolved ? 'Resolved' : 'Open' }}
          </span>
        </div>
      </div>
      <p class="alert-description">{{ selectedAlert.description }}</p>
      <p *ngIf="selectedAlert.isResolved && selectedAlert.resolution" class="alert-resolution">
        <strong>Resolution:</strong> {{ selectedAlert.resolution }}
      </p>
    </div>

    <!-- Transaction Details -->
    <div class="detail-grid">
      <div class="detail-item">
        <span class="detail-label">Reference</span>
        <span class="detail-value ref-cell">{{ selectedAlert.referenceNumber }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Transaction Status</span>
        <span class="chip" [ngClass]="getTxnStatusClass(selectedAlert.transactionStatus)">
          {{ getTxnStatusLabel(selectedAlert.transactionStatus) }}
        </span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Sender</span>
        <span class="detail-value">{{ selectedAlert.senderName }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Sender Country</span>
        <span class="detail-value">{{ selectedAlert.senderCountry || '\u2014' }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Receiver</span>
        <span class="detail-value">{{ selectedAlert.receiverName }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Receiver Country</span>
        <span class="detail-value">{{ selectedAlert.receiverCountry || '\u2014' }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedAlert.receiverBankName">
        <span class="detail-label">Bank</span>
        <span class="detail-value">{{ selectedAlert.receiverBankName }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedAlert.receiverAccountNumber">
        <span class="detail-label">Account</span>
        <span class="detail-value">{{ selectedAlert.receiverAccountNumber }}</span>
      </div>
    </div>

    <hr class="detail-divider" />

    <div class="detail-grid">
      <div class="detail-item">
        <span class="detail-label">Send Amount</span>
        <span class="detail-value detail-bold">{{ selectedAlert.sendAmount | number:'1.2-2' }} {{ selectedAlert.sendCurrency }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Receive Amount</span>
        <span class="detail-value detail-bold">{{ selectedAlert.receiveAmount | number:'1.2-2' }} {{ selectedAlert.receiveCurrency }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Exchange Rate</span>
        <span class="detail-value">{{ selectedAlert.exchangeRateApplied | number:'1.4-4' }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Total Service Charge</span>
        <span class="detail-value">{{ selectedAlert.totalCommission | number:'1.2-2' }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedAlert.paymentMethodName">
        <span class="detail-label">Payment Method</span>
        <span class="detail-value">{{ selectedAlert.paymentMethodName }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedAlert.payoutMethodName">
        <span class="detail-label">Payout Method</span>
        <span class="detail-value">{{ selectedAlert.payoutMethodName }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedAlert.sendingAgentName">
        <span class="detail-label">Sending Agent</span>
        <span class="detail-value">{{ selectedAlert.sendingAgentName }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedAlert.payoutAgentName">
        <span class="detail-label">Payout Partner</span>
        <span class="detail-value">{{ selectedAlert.payoutAgentName }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Alert Created</span>
        <span class="detail-value">{{ selectedAlert.createdAt | date:'yyyy-MM-dd HH:mm' }}</span>
      </div>
      <div class="detail-item" *ngIf="selectedAlert.resolvedAt">
        <span class="detail-label">Resolved At</span>
        <span class="detail-value">{{ selectedAlert.resolvedAt | date:'yyyy-MM-dd HH:mm' }}</span>
      </div>
    </div>

    <!-- Action Buttons for Open Alerts -->
    <div *ngIf="!selectedAlert.isResolved" class="detail-actions">
      <button mat-stroked-button (click)="openResolvePopup(selectedAlert); closeDetail()">
        <mat-icon>check_circle</mat-icon> Resolve & Release
      </button>
      <button mat-flat-button color="warn" (click)="rejectAlert(selectedAlert); closeDetail()">
        <mat-icon>cancel</mat-icon> Reject & Cancel
      </button>
    </div>
  </div>
</div>

<!-- Resolve Popup Overlay -->
<div *ngIf="showResolvePopup" class="detail-overlay" (click)="closeResolvePopup()">
  <div class="resolve-popup" (click)="$event.stopPropagation()">
    <div class="detail-header">
      <h3>Resolve Alert</h3>
      <button mat-icon-button (click)="closeResolvePopup()"><mat-icon>close</mat-icon></button>
    </div>
    <div *ngIf="resolveAlertTarget" class="resolve-info">
      <div class="detail-item">
        <span class="detail-label">Reference</span>
        <span class="detail-value ref-cell">{{ resolveAlertTarget.referenceNumber }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Alert Type</span>
        <span class="chip chip-warning">{{ resolveAlertTarget.alertType }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Sender</span>
        <span class="detail-value">{{ resolveAlertTarget.senderName }}</span>
      </div>
      <div class="detail-item">
        <span class="detail-label">Amount</span>
        <span class="detail-value">{{ resolveAlertTarget.sendAmount | number:'1.2-2' }} {{ resolveAlertTarget.sendCurrency }}</span>
      </div>
    </div>
    <mat-form-field appearance="outline" class="full-width">
      <mat-label>Resolution Notes *</mat-label>
      <textarea matInput [(ngModel)]="resolutionText" rows="3" placeholder="Describe the resolution..."></textarea>
    </mat-form-field>
    <div class="popup-actions">
      <button mat-button (click)="closeResolvePopup()">Cancel</button>
      <button mat-flat-button color="primary" (click)="resolveAlert()">
        <mat-icon>check_circle</mat-icon> Resolve
      </button>
    </div>
  </div>
</div>
`, styles: ['/* src/app/pages/admin/compliance/compliance.component.scss */\n.header-stats {\n  display: flex;\n  gap: 10px;\n}\n.stat-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.stat-badge mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.stat-open {\n  background: #fff3e0;\n  color: #e65100;\n}\n.stat-resolved {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.stat-rejected {\n  background: #ffebee;\n  color: #c62828;\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.table-container {\n  overflow-x: auto;\n}\n.cell-main {\n  font-weight: 500;\n}\n.cell-sub {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.54);\n}\n.ref-cell {\n  font-family: "Roboto Mono", monospace;\n  font-size: 13px;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.action-view {\n  color: #1565c0;\n}\n.action-resolve {\n  color: #2e7d32;\n}\n.action-reject {\n  color: #d32f2f;\n}\n.resolution-badge {\n  display: inline-flex;\n  align-items: center;\n}\n.resolution-badge mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: rgba(0, 0, 0, 0.4);\n}\n.chip.chip-sm {\n  font-size: 10px;\n  padding: 1px 8px;\n}\n.chip.chip-compliance {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.alert-banner-open {\n  background: #fff3e0;\n  border: 1px solid #ffcc80;\n}\n.alert-banner-resolved {\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n}\n.alert-banner-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 6px;\n}\n.alert-banner-row mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.alert-banner-row strong {\n  font-size: 15px;\n  margin-right: 8px;\n}\n.alert-description {\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.7);\n  margin: 4px 0 0;\n}\n.alert-resolution {\n  font-size: 13px;\n  color: rgba(0, 0, 0, 0.7);\n  margin: 6px 0 0;\n}\n.detail-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n}\n.resolve-popup {\n  background: #fff;\n  border-radius: 12px;\n  padding: 24px;\n  width: 460px;\n  max-width: 95vw;\n  max-height: 90vh;\n  overflow-y: auto;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);\n  z-index: 10001;\n}\n.resolve-info {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  margin-bottom: 16px;\n  padding: 12px;\n  background: #f8fafc;\n  border-radius: 8px;\n}\n:host-context(.dark-mode) .stat-open {\n  background: rgba(230, 81, 0, 0.2);\n  color: #fb923c;\n}\n:host-context(.dark-mode) .stat-resolved {\n  background: rgba(46, 125, 50, 0.2);\n  color: #4ade80;\n}\n:host-context(.dark-mode) .stat-rejected {\n  background: rgba(198, 40, 40, 0.2);\n  color: #fca5a5;\n}\n:host-context(.dark-mode) .cell-sub {\n  color: #64748b;\n}\n:host-context(.dark-mode) .action-view {\n  color: #60a5fa;\n}\n:host-context(.dark-mode) .action-resolve {\n  color: #4ade80;\n}\n:host-context(.dark-mode) .action-reject {\n  color: #f87171;\n}\n:host-context(.dark-mode) .resolution-badge mat-icon {\n  color: rgba(255, 255, 255, 0.3);\n}\n:host-context(.dark-mode) .chip.chip-compliance {\n  background: rgba(245, 127, 23, 0.2);\n  color: #fbbf24;\n}\n:host-context(.dark-mode) .resolve-popup {\n  background: #1e293b;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);\n}\n:host-context(.dark-mode) .detail-actions {\n  border-top-color: rgba(255, 255, 255, 0.08);\n}\n:host-context(.dark-mode) .alert-banner-open {\n  background: rgba(230, 81, 0, 0.15);\n  border-color: rgba(230, 81, 0, 0.3);\n}\n:host-context(.dark-mode) .alert-banner-resolved {\n  background: rgba(46, 125, 50, 0.15);\n  border-color: rgba(46, 125, 50, 0.3);\n}\n:host-context(.dark-mode) .alert-description,\n:host-context(.dark-mode) .alert-resolution {\n  color: #94a3b8;\n}\n:host-context(.dark-mode) .resolve-info {\n  background: #334155;\n}\n@media (max-width: 768px) {\n  .toolbar {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .resolve-info {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=compliance.component.css.map */\n'] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }, { type: ExportService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComplianceComponent, { className: "ComplianceComponent", filePath: "src/app/pages/admin/compliance/compliance.component.ts", lineNumber: 44 });
})();
export {
  ComplianceComponent
};
//# sourceMappingURL=chunk-C4OIUUB2.js.map
