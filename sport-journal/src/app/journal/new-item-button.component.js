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
exports.NewItemButtonComponent = void 0;
var core_1 = require("@angular/core");
var NewItemButtonComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-new-item-button',
            standalone: true,
            imports: [],
            styleUrl: './new-item-button.component.scss',
            template: "\n    <button\n      class=\"rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700\"\n      (click)=\"addNewExercise()\">\n      Add new entry\n    </button>\n  "
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _newExerciseEvent_decorators;
    var _newExerciseEvent_initializers = [];
    var _newExerciseEvent_extraInitializers = [];
    var NewItemButtonComponent = _classThis = /** @class */ (function () {
        function NewItemButtonComponent_1() {
            this.newExerciseEvent = __runInitializers(this, _newExerciseEvent_initializers, new core_1.EventEmitter());
            __runInitializers(this, _newExerciseEvent_extraInitializers);
        }
        NewItemButtonComponent_1.prototype.addNewExercise = function () {
            var id = Date.now().toString();
            var date = new Date();
            var reps = 10;
            var sets = 4;
            var exercise = 'Leg Press';
            var newExerciseSet = { id: id, date: date, reps: reps, sets: sets, exercise: exercise };
            this.newExerciseEvent.emit(newExerciseSet);
        };
        return NewItemButtonComponent_1;
    }());
    __setFunctionName(_classThis, "NewItemButtonComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _newExerciseEvent_decorators = [(0, core_1.Output)()];
        __esDecorate(null, null, _newExerciseEvent_decorators, { kind: "field", name: "newExerciseEvent", static: false, private: false, access: { has: function (obj) { return "newExerciseEvent" in obj; }, get: function (obj) { return obj.newExerciseEvent; }, set: function (obj, value) { obj.newExerciseEvent = value; } }, metadata: _metadata }, _newExerciseEvent_initializers, _newExerciseEvent_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NewItemButtonComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NewItemButtonComponent = _classThis;
}();
exports.NewItemButtonComponent = NewItemButtonComponent;
