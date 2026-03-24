import {
  MessageService
} from "./chunk-P4ZST5AN.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-BKSYICRS.js";

// src/app/core/services/notification.service.ts
var NotificationService = class _NotificationService {
  constructor(messageService) {
    this.messageService = messageService;
  }
  success(message, title = "Success") {
    this.messageService.add({ severity: "success", summary: title, detail: message, life: 3e3 });
  }
  error(message, title = "Error") {
    this.messageService.add({ severity: "error", summary: title, detail: message, life: 5e3 });
  }
  info(message, title = "Info") {
    this.messageService.add({ severity: "info", summary: title, detail: message, life: 3e3 });
  }
  warn(message, title = "Warning") {
    this.messageService.add({ severity: "warn", summary: title, detail: message, life: 4e3 });
  }
  static {
    this.\u0275fac = function NotificationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationService)(\u0275\u0275inject(MessageService));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotificationService, factory: _NotificationService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: MessageService }], null);
})();

export {
  NotificationService
};
//# sourceMappingURL=chunk-474OV5BS.js.map
