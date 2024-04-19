"use strict";
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
exports.ErrorPageComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ErrorPageComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-error-page',
            standalone: true,
            imports: [router_1.RouterLink],
            template: "\n    <div class=\"flex h-screen flex-col items-center justify-center\">\n   <h1 class=\"mb-4 text-6xl font-bold text-red-500\">Oops!</h1>\n   <h2 class=\"mb-2 text-3xl font-bold text-gray-800\">Looks like you're lost!</h2>\n   <p class=\"mb-6 text-gray-600\">\n    We couldn't find the page you're looking for.\n   </p>\n   <p class=\"text-gray-600\">\n    But don't worry! Go back to the Sport Journa and continue your progress!\n   </p>\n   <a\n    routerLink=\"/home\"\n    class=\"mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600\"\n   >\n    Go back to the Sport Journal\n   </a>\n  </div>\n  ",
            styleUrl: './error-page.component.scss'
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ErrorPageComponent = _classThis = /** @class */ (function () {
        function ErrorPageComponent_1() {
        }
        return ErrorPageComponent_1;
    }());
    __setFunctionName(_classThis, "ErrorPageComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ErrorPageComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ErrorPageComponent = _classThis;
}();
exports.ErrorPageComponent = ErrorPageComponent;
