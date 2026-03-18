import {
  BehaviorSubject,
  Injectable,
  __spreadProps,
  __spreadValues,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-7WRAX6BO.js";

// src/app/core/services/auth-state.service.ts
var EMPTY_STATE = { token: "", refreshToken: "", userId: "", fullName: "", email: "", roles: [] };
var AuthStateService = class _AuthStateService {
  constructor() {
    this.state$ = new BehaviorSubject(EMPTY_STATE);
    this.authState$ = this.state$.asObservable();
    this.isAuthenticated$ = this.state$.pipe(map((s) => !!s.token));
  }
  get snapshot() {
    return this.state$.value;
  }
  get token() {
    return this.snapshot.token;
  }
  get refreshToken() {
    return this.snapshot.refreshToken;
  }
  get isAuthenticated() {
    return !!this.snapshot.token;
  }
  get roles() {
    return this.snapshot.roles;
  }
  setAuth(token, refreshToken, userId, fullName, email, roles) {
    const state = { token, refreshToken, userId, fullName, email, roles };
    localStorage.setItem("auth_token", token);
    localStorage.setItem("auth_refreshToken", refreshToken);
    localStorage.setItem("auth_userId", userId);
    localStorage.setItem("auth_fullName", fullName);
    localStorage.setItem("auth_email", email);
    localStorage.setItem("auth_roles", roles.join(","));
    this.state$.next(state);
  }
  updateTokens(token, refreshToken) {
    localStorage.setItem("auth_token", token);
    localStorage.setItem("auth_refreshToken", refreshToken);
    this.state$.next(__spreadProps(__spreadValues({}, this.snapshot), { token, refreshToken }));
  }
  loadFromSession() {
    const token = localStorage.getItem("auth_token") || "";
    if (token) {
      const state = {
        token,
        refreshToken: localStorage.getItem("auth_refreshToken") || "",
        userId: localStorage.getItem("auth_userId") || "",
        fullName: localStorage.getItem("auth_fullName") || "",
        email: localStorage.getItem("auth_email") || "",
        roles: (localStorage.getItem("auth_roles") || "").split(",").filter((r) => r)
      };
      this.state$.next(state);
    }
  }
  logout() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_refreshToken");
    localStorage.removeItem("auth_userId");
    localStorage.removeItem("auth_fullName");
    localStorage.removeItem("auth_email");
    localStorage.removeItem("auth_roles");
    this.state$.next(EMPTY_STATE);
  }
  static {
    this.\u0275fac = function AuthStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AuthStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthStateService, factory: _AuthStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthStateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/environments/environment.ts
var environment = {
  production: false,
  apiUrl: "https://localhost:7284/"
};

export {
  AuthStateService,
  environment
};
//# sourceMappingURL=chunk-T6M7P6K3.js.map
