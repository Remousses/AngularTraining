"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var auth_service_1 = require("../services/auth.service");
var router_1 = require("@angular/router");
var LoginComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-login',
            standalone: true,
            styleUrl: './login.component.scss',
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            template: "\n    <div class=\"flex justify-center items-center h-screen bg-blue-500\">\n      <div class=\"bg-blue-200 rounded shadow p-6\">\n        <h2 class=\"text-2xl font-bold text-gray-800 mb-6\">Login</h2>\n        <form class=\"space-y-4\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n          <div>\n            <label for=\"username\" class=\"text-gray-700\">Username</label>\n            <input\n              type=\"text\"\n              id=\"username\"\n              class=\"block w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:outline-none\"\n              formControlName=\"username\" />\n          </div>\n          <div>\n            <label for=\"password\" class=\"text-gray-700\">Password</label>\n            <input\n              type=\"password\"\n              id=\"password\"\n              class=\"block w-full rounded border-gray-300 p-2 focus:border-blue-500 focus:outline-none\"\n              formControlName=\"password\" />\n          </div>\n          <div>\n            <button\n              type=\"submit\"\n              class=\"bg-blue-500 text-white rounded px-4 py-2 w-full\"\n              [disabled]=\"loginForm.invalid\"\n              [class.opacity-50]=\"loginForm.invalid\">\n              Login\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  "
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var LoginComponent = _classThis = /** @class */ (function () {
        function LoginComponent_1() {
            this.formBuilder = (0, core_1.inject)(forms_1.NonNullableFormBuilder);
            this.loginService = (0, core_1.inject)(auth_service_1.AuthService);
            this.router = (0, core_1.inject)(router_1.Router);
            this.loginForm = this.formBuilder.group({
                username: ['', [forms_1.Validators.required]],
                password: ['', [forms_1.Validators.required]],
            });
        }
        LoginComponent_1.prototype.login = function () {
            var _this = this;
            var loginValue = __assign({}, this.loginForm.value);
            this.loginService.login(loginValue).subscribe({
                next: function (_) {
                    _this.router.navigate(['/home']);
                },
                error: function (e) { return alert('User not Found'); },
            });
        };
        return LoginComponent_1;
    }());
    __setFunctionName(_classThis, "LoginComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LoginComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LoginComponent = _classThis;
}();
exports.LoginComponent = LoginComponent;
