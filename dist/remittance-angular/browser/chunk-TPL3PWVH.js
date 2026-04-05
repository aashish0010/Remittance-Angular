import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-D3SW2Q36.js";
import {
  NotificationService
} from "./chunk-3AICMGEY.js";
import "./chunk-TLG473HR.js";
import {
  ApiService
} from "./chunk-JPFLOAIK.js";
import {
  AuthStateService
} from "./chunk-LDWTK5YJ.js";
import "./chunk-R63TWOS6.js";
import {
  CommonModule,
  DatePipe,
  NgClass,
  NgForOf,
  NgIf
} from "./chunk-WBW3ZP3W.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-EU7HC72Q.js";
import "./chunk-S5KMCARS.js";

// src/app/pages/admin/customer-report/customer-report.component.ts
function CustomerReportComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 24);
    \u0275\u0275element(2, "circle", 25)(3, "path", 26);
    \u0275\u0275elementEnd()();
  }
}
function CustomerReportComponent_div_32_tr_24_button_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function CustomerReportComponent_div_32_tr_24_button_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approveKyc(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 53);
    \u0275\u0275elementEnd()();
  }
}
function CustomerReportComponent_div_32_tr_24_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function CustomerReportComponent_div_32_tr_24_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const c_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.rejectKyc(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 45);
    \u0275\u0275element(2, "path", 55);
    \u0275\u0275elementEnd()();
  }
}
function CustomerReportComponent_div_32_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 38)(1, "td", 39);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 40);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 41)(10, "span", 42);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 40);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td", 41)(16, "div", 43)(17, "button", 44);
    \u0275\u0275listener("click", function CustomerReportComponent_div_32_tr_24_Template_button_click_17_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDetail(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 45);
    \u0275\u0275element(19, "path", 46)(20, "path", 47);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "button", 48);
    \u0275\u0275listener("click", function CustomerReportComponent_div_32_tr_24_Template_button_click_21_listener() {
      const c_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewDocuments(c_r4));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(22, "svg", 45);
    \u0275\u0275element(23, "path", 49);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, CustomerReportComponent_div_32_tr_24_button_24_Template, 3, 0, "button", 50)(25, CustomerReportComponent_div_32_tr_24_button_25_Template, 3, 0, "button", 51);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.email || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.phone || "-");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r4.country);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", c_r4.isKycVerified ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r4.isKycVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 9, c_r4.createdAt, "dd/MM/yyyy"));
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", !c_r4.isKycVerified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", c_r4.isKycVerified);
  }
}
function CustomerReportComponent_div_32_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275text(1, " No customers found. ");
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 29);
    \u0275\u0275element(3, "path", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(4, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function CustomerReportComponent_div_32_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchString, $event) || (ctx_r1.searchString = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function CustomerReportComponent_div_32_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilter());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 32)(6, "table", 33)(7, "thead")(8, "tr", 34)(9, "th", 35);
    \u0275\u0275text(10, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 35);
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th", 35);
    \u0275\u0275text(14, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th", 35);
    \u0275\u0275text(16, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 35);
    \u0275\u0275text(18, "KYC");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th", 35);
    \u0275\u0275text(20, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th", 35);
    \u0275\u0275text(22, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "tbody");
    \u0275\u0275template(24, CustomerReportComponent_div_32_tr_24_Template, 26, 12, "tr", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, CustomerReportComponent_div_32_div_25_Template, 2, 0, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchString);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r1.filteredCustomers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.filteredCustomers.length && !ctx_r1.loading);
  }
}
function CustomerReportComponent_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function CustomerReportComponent_div_33_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 58)(1, "div", 59)(2, "h3", 60);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(3, "svg", 61);
    \u0275\u0275element(4, "path", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Customer Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "button", 63);
    \u0275\u0275listener("click", function CustomerReportComponent_div_34_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDetail());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(7, "svg", 45);
    \u0275\u0275element(8, "path", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 65)(10, "div", 66)(11, "span", 9);
    \u0275\u0275text(12, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 67);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 66)(16, "span", 9);
    \u0275\u0275text(17, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 67);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 66)(21, "span", 9);
    \u0275\u0275text(22, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 67);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 66)(26, "span", 9);
    \u0275\u0275text(27, "Date of Birth");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 67);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 66)(31, "span", 9);
    \u0275\u0275text(32, "Gender");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 67);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 66)(36, "span", 9);
    \u0275\u0275text(37, "Nationality");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 67);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 66)(41, "span", 9);
    \u0275\u0275text(42, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "span", 67);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "div", 66)(46, "span", 9);
    \u0275\u0275text(47, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span", 67);
    \u0275\u0275text(49);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 66)(51, "span", 9);
    \u0275\u0275text(52, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "span", 67);
    \u0275\u0275text(54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 66)(56, "span", 9);
    \u0275\u0275text(57, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 67);
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 68)(61, "span", 9);
    \u0275\u0275text(62, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "span", 67);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 66)(66, "span", 9);
    \u0275\u0275text(67, "Document Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 67);
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 66)(71, "span", 9);
    \u0275\u0275text(72, "Document Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 67);
    \u0275\u0275text(74);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 66)(76, "span", 9);
    \u0275\u0275text(77, "KYC Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span", 69);
    \u0275\u0275text(79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 66)(81, "span", 9);
    \u0275\u0275text(82, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span", 67);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "date");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.fullName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.email || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.phone || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.dateOfBirth || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.gender || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.nationality || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.country);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.city || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.state || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.postalCode || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.address || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.idDocumentType || "-");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.detailCustomer.idDocumentNumber || "-");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngClass", ctx_r1.detailCustomer.isKycVerified ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.detailCustomer.isKycVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(85, 16, ctx_r1.detailCustomer.createdAt, "dd/MM/yyyy"));
  }
}
function CustomerReportComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275listener("click", function CustomerReportComponent_div_35_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDocViewer());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_div_36_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 76);
    \u0275\u0275element(2, "circle", 25)(3, "path", 26);
    \u0275\u0275elementEnd()();
  }
}
function CustomerReportComponent_div_36_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 77);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 78);
    \u0275\u0275element(2, "path", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No documents uploaded for this customer.");
    \u0275\u0275elementEnd()();
  }
}
function CustomerReportComponent_div_36_div_9_div_1_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No: ", doc_r11.documentNumber, "");
  }
}
function CustomerReportComponent_div_36_div_9_div_1_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const doc_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", doc_r11.issuingCountry, "");
  }
}
function CustomerReportComponent_div_36_div_9_div_1_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275listener("click", function CustomerReportComponent_div_36_div_9_div_1_div_10_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const doc_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r11.frontImagePath));
    });
    \u0275\u0275element(1, "img", 88);
    \u0275\u0275elementStart(2, "span", 89);
    \u0275\u0275text(3, "Front");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r11.frontImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerReportComponent_div_36_div_9_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275listener("click", function CustomerReportComponent_div_36_div_9_div_1_div_11_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const doc_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openImagePopup(doc_r11.backImagePath));
    });
    \u0275\u0275element(1, "img", 90);
    \u0275\u0275elementStart(2, "span", 89);
    \u0275\u0275text(3, "Back");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r1.getDocImageFullUrl(doc_r11.backImagePath), \u0275\u0275sanitizeUrl);
  }
}
function CustomerReportComponent_div_36_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "strong", 67);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 83);
    \u0275\u0275template(7, CustomerReportComponent_div_36_div_9_div_1_span_7_Template, 2, 1, "span", 84)(8, CustomerReportComponent_div_36_div_9_div_1_span_8_Template, 2, 1, "span", 84);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 85);
    \u0275\u0275template(10, CustomerReportComponent_div_36_div_9_div_1_div_10_Template, 4, 1, "div", 86)(11, CustomerReportComponent_div_36_div_9_div_1_div_11_Template, 4, 1, "div", 86);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const doc_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(doc_r11.documentType);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", doc_r11.isVerified ? "bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400" : "bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", doc_r11.isVerified ? "Verified" : "Pending", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r11.documentNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r11.issuingCountry);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", doc_r11.frontImagePath);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", doc_r11.backImagePath);
  }
}
function CustomerReportComponent_div_36_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275template(1, CustomerReportComponent_div_36_div_9_div_1_Template, 12, 7, "div", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.customerDocs);
  }
}
function CustomerReportComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "div", 59)(2, "h3", 71);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 63);
    \u0275\u0275listener("click", function CustomerReportComponent_div_36_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeDocViewer());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 45);
    \u0275\u0275element(6, "path", 64);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, CustomerReportComponent_div_36_div_7_Template, 4, 0, "div", 72)(8, CustomerReportComponent_div_36_div_8_Template, 5, 0, "div", 73)(9, CustomerReportComponent_div_36_div_9_Template, 2, 1, "div", 74);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Documents \u2014 ", ctx_r1.docViewerCustomer == null ? null : ctx_r1.docViewerCustomer.fullName, "");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.loadingDocs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingDocs && ctx_r1.customerDocs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingDocs && ctx_r1.customerDocs.length > 0);
  }
}
function CustomerReportComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275listener("click", function CustomerReportComponent_div_37_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImagePopup());
    });
    \u0275\u0275elementEnd();
  }
}
function CustomerReportComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 92)(1, "button", 93);
    \u0275\u0275listener("click", function CustomerReportComponent_div_38_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeImagePopup());
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(2, "svg", 45);
    \u0275\u0275element(3, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275element(4, "img", 94);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("src", ctx_r1.docImageUrl, \u0275\u0275sanitizeUrl);
  }
}
var CustomerReportComponent = class _CustomerReportComponent {
  constructor(api, auth, notify) {
    this.api = api;
    this.auth = auth;
    this.notify = notify;
    this.customers = [];
    this.filteredCustomers = [];
    this.displayedColumns = ["fullName", "email", "phone", "country", "kyc", "createdAt", "actions"];
    this.searchString = "";
    this.loading = true;
    this.totalCustomers = 0;
    this.kycVerified = 0;
    this.kycPending = 0;
    this.showDetail = false;
    this.detailCustomer = null;
    this.showDocViewer = false;
    this.docViewerCustomer = null;
    this.customerDocs = [];
    this.loadingDocs = false;
    this.docImageUrl = "";
    this.showImagePopup = false;
  }
  ngOnInit() {
    this.auth.loadFromSession();
    this.loadCustomers();
  }
  loadCustomers() {
    this.loading = true;
    this.api.getCustomers().subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.customers = res.data;
          this.computeStats();
          this.applyFilter();
        } else {
          this.customers = [];
          this.filteredCustomers = [];
        }
        this.loading = false;
      },
      error: () => {
        this.customers = [];
        this.filteredCustomers = [];
        this.loading = false;
      }
    });
  }
  computeStats() {
    this.totalCustomers = this.customers.length;
    this.kycVerified = this.customers.filter((c) => c.isKycVerified).length;
    this.kycPending = this.customers.filter((c) => !c.isKycVerified).length;
  }
  applyFilter() {
    const s = this.searchString.toLowerCase();
    this.filteredCustomers = !s ? [...this.customers] : this.customers.filter((c) => c.fullName.toLowerCase().includes(s) || (c.email || "").toLowerCase().includes(s) || (c.phone || "").toLowerCase().includes(s) || c.country.toLowerCase().includes(s));
  }
  // Detail
  viewDetail(customer) {
    this.detailCustomer = customer;
    this.showDetail = true;
  }
  closeDetail() {
    this.showDetail = false;
  }
  // Document Viewer
  viewDocuments(customer) {
    this.docViewerCustomer = customer;
    this.showDocViewer = true;
    this.loadingDocs = true;
    this.customerDocs = [];
    this.api.getCustomerDocuments(customer.id).subscribe({
      next: (res) => {
        if (res?.success && res.data) {
          this.customerDocs = res.data;
        }
        this.loadingDocs = false;
      },
      error: () => {
        this.loadingDocs = false;
      }
    });
  }
  closeDocViewer() {
    this.showDocViewer = false;
    this.docViewerCustomer = null;
  }
  getDocImageFullUrl(path) {
    if (!path)
      return "";
    const base = this.api.getBaseUrl().replace(/\/$/, "");
    return `${base}${path}`;
  }
  openImagePopup(path) {
    this.docImageUrl = this.getDocImageFullUrl(path);
    this.showImagePopup = true;
  }
  closeImagePopup() {
    this.showImagePopup = false;
    this.docImageUrl = "";
  }
  // KYC Actions
  approveKyc(customer) {
    this.api.approveKyc(customer.id).subscribe((r) => {
      if (r?.success) {
        customer.isKycVerified = true;
        this.computeStats();
        this.notify.success(`KYC approved for '${customer.fullName}'.`);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  rejectKyc(customer) {
    this.api.rejectKyc(customer.id).subscribe((r) => {
      if (r?.success) {
        customer.isKycVerified = false;
        this.computeStats();
        this.notify.warn(`KYC rejected for '${customer.fullName}'.`);
      } else {
        this.notify.error(r?.message || "Failed.");
      }
    });
  }
  static {
    this.\u0275fac = function CustomerReportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CustomerReportComponent)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AuthStateService), \u0275\u0275directiveInject(NotificationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerReportComponent, selectors: [["app-customer-report"]], decls: 39, vars: 11, consts: [[1, "mb-6"], [1, "text-2xl", "font-bold", "text-surface-900", "dark:text-surface-100"], [1, "grid", "grid-cols-1", "md:grid-cols-3", "gap-4", "mb-5"], [1, "flex", "items-center", "gap-3.5", "px-5", "py-4", "rounded-xl", "bg-white", "dark:bg-surface-800", "border", "border-surface-200", "dark:border-surface-700", "shadow-sm"], [1, "w-10", "h-10", "rounded-xl", "bg-brand-600", "flex", "items-center", "justify-center", "flex-shrink-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-white"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128H9m6 0a5.972 5.972 0 0 0-.786-3.07M9 19.128A9.38 9.38 0 0 1 6.375 19.5a9.337 9.337 0 0 1-4.121-.952 4.125 4.125 0 0 1 7.533-2.493M9 19.128v-.003c0-1.113.285-2.16.786-3.07m0 0a5.97 5.97 0 0 1 4.428-2.223 5.97 5.97 0 0 1 4.428 2.223M12 9.75a3.375 3.375 0 1 1 0-6.75 3.375 3.375 0 0 1 0 6.75Z"], [1, "flex", "flex-col", "gap-px"], [1, "text-[22px]", "font-bold", "leading-tight", "text-surface-900", "dark:text-surface-100"], [1, "text-xs", "font-medium", "text-surface-500", "dark:text-surface-400"], [1, "w-10", "h-10", "rounded-xl", "bg-success-600", "flex", "items-center", "justify-center", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"], [1, "text-[22px]", "font-bold", "leading-tight", "text-success-600"], [1, "w-10", "h-10", "rounded-xl", "bg-warning-600", "flex", "items-center", "justify-center", "flex-shrink-0"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "text-[22px]", "font-bold", "leading-tight", "text-warning-600"], ["class", "flex items-center justify-center py-16", 4, "ngIf"], ["class", "rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft", 4, "ngIf"], ["class", "fixed inset-0 bg-black/50 z-50", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "class", "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "class", "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6", 4, "ngIf"], ["class", "fixed inset-0 bg-black/60 z-[52]", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "class", "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[53] bg-white dark:bg-surface-800 rounded-xl p-3 shadow-2xl max-w-[90vw] max-h-[90vh]", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-16"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-10", "w-10", "text-brand-500"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "4", 1, "opacity-25"], ["fill", "currentColor", "d", "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z", 1, "opacity-75"], [1, "rounded-2xl", "border", "border-surface-200", "dark:border-surface-700", "bg-white", "dark:bg-surface-800", "p-6", "shadow-soft"], [1, "relative", "mb-5"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "absolute", "left-3", "top-1/2", "-translate-y-1/2", "w-5", "h-5", "text-surface-400"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"], ["type", "text", "placeholder", "Search customers...", 1, "w-full", "pl-10", "pr-3", "py-2", "rounded-lg", "border", "border-surface-300", "dark:border-surface-600", "bg-white", "dark:bg-surface-700", "text-surface-900", "dark:text-surface-100", "focus:ring-2", "focus:ring-brand-500", "outline-none", "transition", "placeholder:text-surface-400", 3, "ngModelChange", "ngModel"], [1, "overflow-x-auto"], [1, "w-full", "text-sm", "text-left"], [1, "border-b", "border-surface-200", "dark:border-surface-700"], ["scope", "col", 1, "px-4", "py-3", "font-semibold", "text-surface-600", "dark:text-surface-300"], ["class", "border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors", 4, "ngFor", "ngForOf"], ["class", "py-12 text-center text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], [1, "border-b", "border-surface-100", "dark:border-surface-700", "hover:bg-surface-50", "dark:hover:bg-surface-750", "transition-colors"], [1, "px-4", "py-3", "text-surface-900", "dark:text-surface-100", "font-medium"], [1, "px-4", "py-3", "text-surface-700", "dark:text-surface-300"], [1, "px-4", "py-3"], [1, "inline-flex", "items-center", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], [1, "flex", "items-center", "gap-1"], ["aria-label", "View Details", 1, "p-1.5", "rounded-lg", "text-brand-600", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", 3, "click"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"], ["aria-label", "Documents", 1, "p-1.5", "rounded-lg", "text-brand-500", "dark:text-brand-400", "hover:bg-brand-50", "dark:hover:bg-brand-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"], ["aria-label", "Approve KYC", "class", "p-1.5 rounded-lg text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20 transition-colors", 3, "click", 4, "ngIf"], ["aria-label", "Reject KYC", "class", "p-1.5 rounded-lg text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition-colors", 3, "click", 4, "ngIf"], ["aria-label", "Approve KYC", 1, "p-1.5", "rounded-lg", "text-success-600", "dark:text-success-400", "hover:bg-success-50", "dark:hover:bg-success-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], ["aria-label", "Reject KYC", 1, "p-1.5", "rounded-lg", "text-danger-600", "dark:text-danger-400", "hover:bg-danger-50", "dark:hover:bg-danger-900/20", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"], [1, "py-12", "text-center", "text-surface-400", "dark:text-surface-500", "text-sm"], [1, "fixed", "inset-0", "bg-black/50", "z-50", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "fixed", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-[51]", "w-full", "max-w-2xl", "max-h-[90vh]", "overflow-y-auto", "rounded-2xl", "bg-white", "dark:bg-surface-800", "shadow-xl", "p-6"], [1, "flex", "items-center", "justify-between", "mb-5"], [1, "flex", "items-center", "gap-2", "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-5", "h-5", "text-brand-500"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"], [1, "p-1.5", "rounded-lg", "text-surface-500", "hover:bg-surface-100", "dark:hover:bg-surface-700", "transition-colors", 3, "click"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18 18 6M6 6l12 12"], [1, "grid", "grid-cols-1", "sm:grid-cols-2", "gap-4"], [1, "flex", "flex-col", "gap-1"], [1, "text-sm", "text-surface-900", "dark:text-surface-100"], [1, "flex", "flex-col", "gap-1", "sm:col-span-2"], [1, "inline-flex", "items-center", "self-start", "px-2.5", "py-0.5", "rounded-full", "text-xs", "font-semibold", 3, "ngClass"], ["role", "dialog", "aria-modal", "true", 1, "fixed", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-[51]", "w-full", "max-w-3xl", "max-h-[90vh]", "overflow-y-auto", "rounded-2xl", "bg-white", "dark:bg-surface-800", "shadow-xl", "p-6"], [1, "text-lg", "font-semibold", "text-surface-900", "dark:text-surface-100"], ["class", "flex items-center justify-center py-12", 4, "ngIf"], ["class", "flex items-center justify-center gap-2 py-12 text-surface-400 dark:text-surface-500 text-sm", 4, "ngIf"], ["class", "grid grid-cols-1 gap-3.5", 4, "ngIf"], [1, "flex", "items-center", "justify-center", "py-12"], ["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", 1, "animate-spin", "h-8", "w-8", "text-brand-500"], [1, "flex", "items-center", "justify-center", "gap-2", "py-12", "text-surface-400", "dark:text-surface-500", "text-sm"], ["fill", "none", "stroke", "currentColor", "stroke-width", "2", "viewBox", "0 0 24 24", 1, "w-6", "h-6"], [1, "grid", "grid-cols-1", "gap-3.5"], ["class", "border border-surface-200 dark:border-surface-700 rounded-lg p-3.5 bg-surface-50 dark:bg-surface-750", 4, "ngFor", "ngForOf"], [1, "border", "border-surface-200", "dark:border-surface-700", "rounded-lg", "p-3.5", "bg-surface-50", "dark:bg-surface-750"], [1, "flex", "justify-between", "items-center", "mb-1"], [1, "text-xs", "text-surface-500", "dark:text-surface-400", "mb-2.5"], [4, "ngIf"], [1, "flex", "gap-3"], ["class", "text-center cursor-pointer", 3, "click", 4, "ngIf"], [1, "text-center", "cursor-pointer", 3, "click"], ["alt", "Front", 1, "w-[120px]", "h-[80px]", "object-cover", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "transition-transform", "hover:scale-105", "hover:shadow-lg", 3, "src"], [1, "block", "text-[11px]", "text-surface-500", "dark:text-surface-400", "mt-1"], ["alt", "Back", 1, "w-[120px]", "h-[80px]", "object-cover", "rounded-md", "border", "border-surface-300", "dark:border-surface-600", "transition-transform", "hover:scale-105", "hover:shadow-lg", 3, "src"], [1, "fixed", "inset-0", "bg-black/60", "z-[52]", 3, "click"], ["role", "dialog", "aria-modal", "true", 1, "fixed", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "z-[53]", "bg-white", "dark:bg-surface-800", "rounded-xl", "p-3", "shadow-2xl", "max-w-[90vw]", "max-h-[90vh]"], [1, "absolute", "top-1", "right-1", "z-10", "p-1.5", "rounded-full", "bg-black/50", "text-white", "hover:bg-black/70", "transition-colors", 3, "click"], ["alt", "Document Image", 1, "block", "max-w-[80vw]", "max-h-[80vh]", "rounded-md", 3, "src"]], template: function CustomerReportComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Customer Report");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "div", 4);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(6, "svg", 5);
        \u0275\u0275element(7, "path", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(8, "div", 7)(9, "span", 8);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "span", 9);
        \u0275\u0275text(12, "Total Customers");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 3)(14, "div", 10);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(15, "svg", 5);
        \u0275\u0275element(16, "path", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(17, "div", 7)(18, "span", 12);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span", 9);
        \u0275\u0275text(21, "KYC Verified");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "div", 3)(23, "div", 13);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 5);
        \u0275\u0275element(25, "path", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(26, "div", 7)(27, "span", 15);
        \u0275\u0275text(28);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "span", 9);
        \u0275\u0275text(30, "KYC Pending");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(31, CustomerReportComponent_div_31_Template, 4, 0, "div", 16)(32, CustomerReportComponent_div_32_Template, 26, 3, "div", 17)(33, CustomerReportComponent_div_33_Template, 1, 0, "div", 18)(34, CustomerReportComponent_div_34_Template, 86, 19, "div", 19)(35, CustomerReportComponent_div_35_Template, 1, 0, "div", 18)(36, CustomerReportComponent_div_36_Template, 10, 4, "div", 20)(37, CustomerReportComponent_div_37_Template, 1, 0, "div", 21)(38, CustomerReportComponent_div_38_Template, 5, 1, "div", 22);
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(ctx.totalCustomers);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.kycVerified);
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate(ctx.kycPending);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngIf", ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.loading);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailCustomer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDetail && ctx.detailCustomer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDocViewer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showDocViewer);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showImagePopup);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.showImagePopup);
      }
    }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, DatePipe, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=customer-report.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerReportComponent, [{
    type: Component,
    args: [{ selector: "app-customer-report", standalone: true, imports: [
      CommonModule,
      FormsModule,
      DatePipe
    ], template: `<!-- Page Header -->
<div class="mb-6">
  <h2 class="text-2xl font-bold text-surface-900 dark:text-surface-100">Customer Report</h2>
</div>

<!-- Summary Cards -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
  <!-- Total Customers -->
  <div class="flex items-center gap-3.5 px-5 py-4 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-sm">
    <div class="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center flex-shrink-0">
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128H9m6 0a5.972 5.972 0 0 0-.786-3.07M9 19.128A9.38 9.38 0 0 1 6.375 19.5a9.337 9.337 0 0 1-4.121-.952 4.125 4.125 0 0 1 7.533-2.493M9 19.128v-.003c0-1.113.285-2.16.786-3.07m0 0a5.97 5.97 0 0 1 4.428-2.223 5.97 5.97 0 0 1 4.428 2.223M12 9.75a3.375 3.375 0 1 1 0-6.75 3.375 3.375 0 0 1 0 6.75Z"/></svg>
    </div>
    <div class="flex flex-col gap-px">
      <span class="text-[22px] font-bold leading-tight text-surface-900 dark:text-surface-100">{{ totalCustomers }}</span>
      <span class="text-xs font-medium text-surface-500 dark:text-surface-400">Total Customers</span>
    </div>
  </div>

  <!-- KYC Verified -->
  <div class="flex items-center gap-3.5 px-5 py-4 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-sm">
    <div class="w-10 h-10 rounded-xl bg-success-600 flex items-center justify-center flex-shrink-0">
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"/></svg>
    </div>
    <div class="flex flex-col gap-px">
      <span class="text-[22px] font-bold leading-tight text-success-600">{{ kycVerified }}</span>
      <span class="text-xs font-medium text-surface-500 dark:text-surface-400">KYC Verified</span>
    </div>
  </div>

  <!-- KYC Pending -->
  <div class="flex items-center gap-3.5 px-5 py-4 rounded-xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-sm">
    <div class="w-10 h-10 rounded-xl bg-warning-600 flex items-center justify-center flex-shrink-0">
      <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
    </div>
    <div class="flex flex-col gap-px">
      <span class="text-[22px] font-bold leading-tight text-warning-600">{{ kycPending }}</span>
      <span class="text-xs font-medium text-surface-500 dark:text-surface-400">KYC Pending</span>
    </div>
  </div>
</div>

<!-- Loading -->
<div *ngIf="loading" class="flex items-center justify-center py-16">
  <svg class="animate-spin h-10 w-10 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
</div>

<!-- Search + Table -->
<div *ngIf="!loading" class="rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-6 shadow-soft">
  <!-- Search -->
  <div class="relative mb-5">
    <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-surface-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
    <input
      type="text"
      placeholder="Search customers..."
      [(ngModel)]="searchString"
      (ngModelChange)="applyFilter()"
      class="w-full pl-10 pr-3 py-2 rounded-lg border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:ring-2 focus:ring-brand-500 outline-none transition placeholder:text-surface-400"
    />
  </div>

  <!-- Table -->
  <div class="overflow-x-auto">
    <table class="w-full text-sm text-left">
      <thead>
        <tr class="border-b border-surface-200 dark:border-surface-700">
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Full Name</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Email</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Phone</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Country</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">KYC</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Created</th>
          <th scope="col" class="px-4 py-3 font-semibold text-surface-600 dark:text-surface-300">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let c of filteredCustomers" class="border-b border-surface-100 dark:border-surface-700 hover:bg-surface-50 dark:hover:bg-surface-750 transition-colors">
          <td class="px-4 py-3 text-surface-900 dark:text-surface-100 font-medium">{{ c.fullName }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ c.email || '-' }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ c.phone || '-' }}</td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ c.country }}</td>
          <td class="px-4 py-3">
            <span
              class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
              [ngClass]="c.isKycVerified
                ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
                : 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'"
            >
              {{ c.isKycVerified ? 'Verified' : 'Pending' }}
            </span>
          </td>
          <td class="px-4 py-3 text-surface-700 dark:text-surface-300">{{ c.createdAt | date:'dd/MM/yyyy' }}</td>
          <td class="px-4 py-3">
            <div class="flex items-center gap-1">
              <!-- View Details -->
              <button
                aria-label="View Details"
                (click)="viewDetail(c)"
                class="p-1.5 rounded-lg text-brand-600 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
              </button>
              <!-- Documents -->
              <button
                aria-label="Documents"
                (click)="viewDocuments(c)"
                class="p-1.5 rounded-lg text-brand-500 dark:text-brand-400 hover:bg-brand-50 dark:hover:bg-brand-900/20 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"/></svg>
              </button>
              <!-- Approve KYC -->
              <button
                *ngIf="!c.isKycVerified"
                aria-label="Approve KYC"
                (click)="approveKyc(c)"
                class="p-1.5 rounded-lg text-success-600 dark:text-success-400 hover:bg-success-50 dark:hover:bg-success-900/20 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              </button>
              <!-- Reject KYC -->
              <button
                *ngIf="c.isKycVerified"
                aria-label="Reject KYC"
                (click)="rejectKyc(c)"
                class="p-1.5 rounded-lg text-danger-600 dark:text-danger-400 hover:bg-danger-50 dark:hover:bg-danger-900/20 transition-colors"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Empty state -->
  <div *ngIf="!filteredCustomers.length && !loading" class="py-12 text-center text-surface-400 dark:text-surface-500 text-sm">
    No customers found.
  </div>
</div>

<!-- ============================================================ -->
<!-- Detail Popup                                                  -->
<!-- ============================================================ -->
<div *ngIf="showDetail && detailCustomer" class="fixed inset-0 bg-black/50 z-50" (click)="closeDetail()"></div>
<div *ngIf="showDetail && detailCustomer"
     role="dialog" aria-modal="true" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6">
  <!-- Header -->
  <div class="flex items-center justify-between mb-5">
    <h3 class="flex items-center gap-2 text-lg font-semibold text-surface-900 dark:text-surface-100">
      <svg class="w-5 h-5 text-brand-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>
      Customer Details
    </h3>
    <button (click)="closeDetail()" class="p-1.5 rounded-lg text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
    </button>
  </div>

  <!-- Detail Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Full Name</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.fullName }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Email</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.email || '-' }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Phone</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.phone || '-' }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Date of Birth</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.dateOfBirth || '-' }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Gender</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.gender || '-' }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Nationality</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.nationality || '-' }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Country</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.country }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">City</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.city || '-' }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">State</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.state || '-' }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Postal Code</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.postalCode || '-' }}</span></div>
    <div class="flex flex-col gap-1 sm:col-span-2"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Address</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.address || '-' }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Document Type</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.idDocumentType || '-' }}</span></div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Document Number</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.idDocumentNumber || '-' }}</span></div>
    <div class="flex flex-col gap-1">
      <span class="text-xs font-medium text-surface-500 dark:text-surface-400">KYC Status</span>
      <span
        class="inline-flex items-center self-start px-2.5 py-0.5 rounded-full text-xs font-semibold"
        [ngClass]="detailCustomer.isKycVerified
          ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
          : 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'"
      >
        {{ detailCustomer.isKycVerified ? 'Verified' : 'Pending' }}
      </span>
    </div>
    <div class="flex flex-col gap-1"><span class="text-xs font-medium text-surface-500 dark:text-surface-400">Created</span><span class="text-sm text-surface-900 dark:text-surface-100">{{ detailCustomer.createdAt | date:'dd/MM/yyyy' }}</span></div>
  </div>
</div>

<!-- ============================================================ -->
<!-- Document Viewer Popup                                         -->
<!-- ============================================================ -->
<div *ngIf="showDocViewer" class="fixed inset-0 bg-black/50 z-50" (click)="closeDocViewer()"></div>
<div *ngIf="showDocViewer"
     role="dialog" aria-modal="true" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-surface-800 shadow-xl p-6">
  <!-- Header -->
  <div class="flex items-center justify-between mb-5">
    <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-100">Documents &mdash; {{ docViewerCustomer?.fullName }}</h3>
    <button (click)="closeDocViewer()" class="p-1.5 rounded-lg text-surface-500 hover:bg-surface-100 dark:hover:bg-surface-700 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
    </button>
  </div>

  <!-- Loading docs -->
  <div *ngIf="loadingDocs" class="flex items-center justify-center py-12">
    <svg class="animate-spin h-8 w-8 text-brand-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
    </svg>
  </div>

  <!-- No docs -->
  <div *ngIf="!loadingDocs && customerDocs.length === 0" class="flex items-center justify-center gap-2 py-12 text-surface-400 dark:text-surface-500 text-sm">
    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"/></svg>
    <span>No documents uploaded for this customer.</span>
  </div>

  <!-- Doc cards -->
  <div *ngIf="!loadingDocs && customerDocs.length > 0" class="grid grid-cols-1 gap-3.5">
    <div *ngFor="let doc of customerDocs" class="border border-surface-200 dark:border-surface-700 rounded-lg p-3.5 bg-surface-50 dark:bg-surface-750">
      <div class="flex justify-between items-center mb-1">
        <strong class="text-sm text-surface-900 dark:text-surface-100">{{ doc.documentType }}</strong>
        <span
          class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
          [ngClass]="doc.isVerified
            ? 'bg-success-100 text-success-700 dark:bg-success-900/30 dark:text-success-400'
            : 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-400'"
        >
          {{ doc.isVerified ? 'Verified' : 'Pending' }}
        </span>
      </div>
      <div class="text-xs text-surface-500 dark:text-surface-400 mb-2.5">
        <span *ngIf="doc.documentNumber">No: {{ doc.documentNumber }}</span>
        <span *ngIf="doc.issuingCountry"> &middot; {{ doc.issuingCountry }}</span>
      </div>
      <div class="flex gap-3">
        <div *ngIf="doc.frontImagePath" class="text-center cursor-pointer" (click)="openImagePopup(doc.frontImagePath)">
          <img [src]="getDocImageFullUrl(doc.frontImagePath)" alt="Front"
               class="w-[120px] h-[80px] object-cover rounded-md border border-surface-300 dark:border-surface-600 transition-transform hover:scale-105 hover:shadow-lg" />
          <span class="block text-[11px] text-surface-500 dark:text-surface-400 mt-1">Front</span>
        </div>
        <div *ngIf="doc.backImagePath" class="text-center cursor-pointer" (click)="openImagePopup(doc.backImagePath)">
          <img [src]="getDocImageFullUrl(doc.backImagePath)" alt="Back"
               class="w-[120px] h-[80px] object-cover rounded-md border border-surface-300 dark:border-surface-600 transition-transform hover:scale-105 hover:shadow-lg" />
          <span class="block text-[11px] text-surface-500 dark:text-surface-400 mt-1">Back</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Image Full View Popup -->
<div *ngIf="showImagePopup" class="fixed inset-0 bg-black/60 z-[52]" (click)="closeImagePopup()"></div>
<div *ngIf="showImagePopup" role="dialog" aria-modal="true" class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[53] bg-white dark:bg-surface-800 rounded-xl p-3 shadow-2xl max-w-[90vw] max-h-[90vh]">
  <button (click)="closeImagePopup()" class="absolute top-1 right-1 z-10 p-1.5 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/></svg>
  </button>
  <img [src]="docImageUrl" alt="Document Image" class="block max-w-[80vw] max-h-[80vh] rounded-md" />
</div>
`, styles: ["/* src/app/pages/admin/customer-report/customer-report.component.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=customer-report.component.css.map */\n"] }]
  }], () => [{ type: ApiService }, { type: AuthStateService }, { type: NotificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerReportComponent, { className: "CustomerReportComponent", filePath: "src/app/pages/admin/customer-report/customer-report.component.ts", lineNumber: 18 });
})();
export {
  CustomerReportComponent
};
//# sourceMappingURL=chunk-TPL3PWVH.js.map
