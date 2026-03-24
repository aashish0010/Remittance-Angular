import {
  MatCard,
  MatCardModule
} from "./chunk-JCOTY37K.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-MK4SB477.js";
import {
  CommonModule
} from "./chunk-MZ37WZKD.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-BKSYICRS.js";

// src/app/pages/customer/send-money/customer-send.component.ts
var CustomerSendComponent = class _CustomerSendComponent {
  static {
    this.\u0275fac = function CustomerSendComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerSendComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerSendComponent, selectors: [["app-customer-send"]], decls: 10, vars: 0, consts: [[1, "page-header"], [1, "pa-6", "text-center"], [2, "font-size", "64px", "width", "64px", "height", "64px", "color", "#9e9e9e"]], template: function CustomerSendComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2");
        \u0275\u0275text(2, "Send Money");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "mat-card", 1)(4, "mat-icon", 2);
        \u0275\u0275text(5, "construction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "h3");
        \u0275\u0275text(7, "Coming Soon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "p");
        \u0275\u0275text(9, "Customer send money feature is under development.");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [CommonModule, MatCardModule, MatCard, MatIconModule, MatIcon], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0;\n}\n/*# sourceMappingURL=customer-send.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerSendComponent, [{
    type: Component,
    args: [{ selector: "app-customer-send", standalone: true, imports: [CommonModule, MatCardModule, MatIconModule], template: `
    <div class="page-header">
      <h2>Send Money</h2>
    </div>
    <mat-card class="pa-6 text-center">
      <mat-icon style="font-size: 64px; width: 64px; height: 64px; color: #9e9e9e;">construction</mat-icon>
      <h3>Coming Soon</h3>
      <p>Customer send money feature is under development.</p>
    </mat-card>
  `, styles: ["/* angular:styles/component:css;abd644ed2b4c87d9d82e4a890ab55da25fc721dadd5c963b61095214863a3130;C:/Users/pudas/OneDrive/Desktop/Remittance/Remittance.Angular/src/app/pages/customer/send-money/customer-send.component.ts */\n.page-header {\n  margin-bottom: 24px;\n}\n.page-header h2 {\n  font-weight: 700;\n  margin: 0;\n}\n/*# sourceMappingURL=customer-send.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerSendComponent, { className: "CustomerSendComponent", filePath: "src/app/pages/customer/send-money/customer-send.component.ts", lineNumber: 22 });
})();
export {
  CustomerSendComponent
};
//# sourceMappingURL=chunk-VHXUKJHG.js.map
