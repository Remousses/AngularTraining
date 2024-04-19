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
exports.EntryItemComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var EntryItemComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-entry-item',
            standalone: true,
            imports: [common_1.CommonModule],
            styleUrl: './entry-item.component.scss',
            template: "\n    <div class=\"mb-4 flex items-center justify-between border-b bg-white p-4\">\n      <div>\n        <span class=\"font-bold\">Date:</span> {{ exerciseSet.date | date }}<br />\n        <span class=\"font-bold\">Exercise:</span> {{ exerciseSet.exercise }}<br />\n        <span class=\"font-bold\">Sets:</span> {{ exerciseSet.sets }}<br />\n        <span class=\"font-bold\">Reps:</span> {{ exerciseSet.reps }}\n      </div>\n      <div class=\"flex items-center\">\n        <button\n        class=\"mr-2 rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700\"\n        (click)=\"delete()\"\n        >\n        Delete\n        </button>\n        <button\n        class=\"rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700\"\n        (click)=\"newRep()\"\n        >\n        New Rep\n        </button>\n      </div>\n    </div>\n  "
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _exerciseSet_decorators;
    var _exerciseSet_initializers = [];
    var _exerciseSet_extraInitializers = [];
    var _newRepEvent_decorators;
    var _newRepEvent_initializers = [];
    var _newRepEvent_extraInitializers = [];
    var _deleteEvent_decorators;
    var _deleteEvent_initializers = [];
    var _deleteEvent_extraInitializers = [];
    var EntryItemComponent = _classThis = /** @class */ (function () {
        function EntryItemComponent_1() {
            this.exerciseSet = __runInitializers(this, _exerciseSet_initializers, void 0);
            this.newRepEvent = (__runInitializers(this, _exerciseSet_extraInitializers), __runInitializers(this, _newRepEvent_initializers, new core_1.EventEmitter()));
            this.deleteEvent = (__runInitializers(this, _newRepEvent_extraInitializers), __runInitializers(this, _deleteEvent_initializers, new core_1.EventEmitter()));
            __runInitializers(this, _deleteEvent_extraInitializers);
        }
        EntryItemComponent_1.prototype.delete = function () {
            this.deleteEvent.emit(this.exerciseSet.id);
        };
        EntryItemComponent_1.prototype.newRep = function () {
            var reps = ++this.exerciseSet.reps;
            var newItem = __assign(__assign({}, this.exerciseSet), { reps: reps });
            this.newRepEvent.emit(newItem);
        };
        return EntryItemComponent_1;
    }());
    __setFunctionName(_classThis, "EntryItemComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _exerciseSet_decorators = [(0, core_1.Input)('exercise-set')];
        _newRepEvent_decorators = [(0, core_1.Output)()];
        _deleteEvent_decorators = [(0, core_1.Output)()];
        __esDecorate(null, null, _exerciseSet_decorators, { kind: "field", name: "exerciseSet", static: false, private: false, access: { has: function (obj) { return "exerciseSet" in obj; }, get: function (obj) { return obj.exerciseSet; }, set: function (obj, value) { obj.exerciseSet = value; } }, metadata: _metadata }, _exerciseSet_initializers, _exerciseSet_extraInitializers);
        __esDecorate(null, null, _newRepEvent_decorators, { kind: "field", name: "newRepEvent", static: false, private: false, access: { has: function (obj) { return "newRepEvent" in obj; }, get: function (obj) { return obj.newRepEvent; }, set: function (obj, value) { obj.newRepEvent = value; } }, metadata: _metadata }, _newRepEvent_initializers, _newRepEvent_extraInitializers);
        __esDecorate(null, null, _deleteEvent_decorators, { kind: "field", name: "deleteEvent", static: false, private: false, access: { has: function (obj) { return "deleteEvent" in obj; }, get: function (obj) { return obj.deleteEvent; }, set: function (obj, value) { obj.deleteEvent = value; } }, metadata: _metadata }, _deleteEvent_initializers, _deleteEvent_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EntryItemComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EntryItemComponent = _classThis;
}();
exports.EntryItemComponent = EntryItemComponent;
