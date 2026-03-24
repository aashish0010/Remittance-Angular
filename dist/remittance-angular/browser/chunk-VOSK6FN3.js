import {
  MatSelect
} from "./chunk-6JH6Y4IN.js";
import {
  Directive,
  Subscription,
  setClassMetadata,
  ɵɵdefineDirective,
  ɵɵdirectiveInject
} from "./chunk-BKSYICRS.js";

// src/app/shared/searchable-select.directive.ts
var SearchableSelectDirective = class _SearchableSelectDirective {
  constructor(matSelect) {
    this.matSelect = matSelect;
    this.sub = new Subscription();
  }
  ngOnInit() {
    this.sub = this.matSelect.openedChange.subscribe((opened) => {
      if (opened) {
        setTimeout(() => this.injectSearch(), 0);
      }
    });
  }
  injectSearch() {
    const panel = this.matSelect.panel?.nativeElement;
    if (!panel)
      return;
    panel.querySelector(".select-search-box")?.remove();
    const box = document.createElement("div");
    box.className = "select-search-box";
    const input = document.createElement("input");
    input.className = "select-search-input";
    input.placeholder = "Type to search...";
    input.setAttribute("autocomplete", "off");
    input.addEventListener("keydown", (e) => {
      e.stopPropagation();
    });
    input.addEventListener("input", () => {
      const term = input.value.toLowerCase().trim();
      this.matSelect.options.forEach((option) => {
        const el = option._getHostElement();
        if (!term) {
          el.style.display = "";
          return;
        }
        const match = option.viewValue.toLowerCase().includes(term);
        el.style.display = match ? "" : "none";
      });
    });
    box.appendChild(input);
    panel.insertBefore(box, panel.firstChild);
    input.focus();
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  static {
    this.\u0275fac = function SearchableSelectDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchableSelectDirective)(\u0275\u0275directiveInject(MatSelect));
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _SearchableSelectDirective, selectors: [["mat-select", "searchable", ""]] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SearchableSelectDirective, [{
    type: Directive,
    args: [{
      selector: "mat-select[searchable]",
      standalone: true
    }]
  }], () => [{ type: MatSelect }], null);
})();

export {
  SearchableSelectDirective
};
//# sourceMappingURL=chunk-VOSK6FN3.js.map
