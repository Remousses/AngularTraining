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
exports.NewEntryFormReactiveComponent = void 0;
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var exercise_sets_service_1 = require("../services/exercise-sets.service");
var custom_validation_1 = require("../core/custom-validation");
var NewEntryFormReactiveComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-new-entry-form-reactive',
            standalone: true,
            imports: [common_1.CommonModule, forms_1.FormsModule, forms_1.ReactiveFormsModule],
            template: "\n    <div class=\"flex h-screen items-center justify-center bg-gray-200\">\n      <form\n        [formGroup]=\"entryForm\"\n        (ngSubmit)=\"newEntry()\"\n        class=\"mx-auto max-w-sm rounded bg-gray-200 p-4\">\n        <div class=\"mb-4\">\n          <label for=\"date\" class=\"mb-2 block font-bold text-gray-700\"\n            >Date:</label\n          >\n          <input\n            type=\"date\"\n            id=\"date\"\n            name=\"date\"\n            class=\"w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow\"\n            formControlName=\"date\" />\n          <div\n            *ngIf=\"\n              entryForm.get('date')?.invalid && entryForm.get('date')?.touched\n            \"\n            class=\"mt-1 text-red-500\">\n            Date is required.\n          </div>\n        </div>\n        <div class=\"mb-4\">\n          <label for=\"exercise\" class=\"mb-2 block font-bold text-gray-700\"\n            >Exercise:</label\n          >\n          <input\n            type=\"text\"\n            id=\"exercise\"\n            name=\"exercise\"\n            class=\"w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow\"\n            formControlName=\"exercise\" />\n          <div\n            *ngIf=\"\n              entryForm.get('exercise')?.invalid &&\n              entryForm.get('exercise')?.touched\n            \"\n            class=\"mt-1 text-red-500\">\n            Exercise is required.\n          </div>\n        </div>\n        <div class=\"mb-4\">\n          <label for=\"sets\" class=\"mb-2 block font-bold text-gray-700\"\n            >Sets:</label\n          >\n          <input\n            type=\"number\"\n            id=\"sets\"\n            name=\"sets\"\n            class=\"w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow\"\n            formControlName=\"sets\" />\n          <div\n            *ngIf=\"\n              entryForm.get('sets')?.invalid && entryForm.get('sets')?.touched\n            \"\n            class=\"mt-1 text-red-500\">\n            Sets is required and must be a positive number.\n          </div>\n          <div\n            *ngIf=\"\n              entryForm.get('sets')?.errors?.['isNotMultiple'] &&\n              entryForm.get('sets')?.touched\n            \"\n            class=\"mt-1 text-red-500\">\n            sets is required and must be multiple of 2.\n          </div>\n        </div>\n        <div class=\"mb-4\">\n          <label for=\"reps\" class=\"mb-2 block font-bold text-gray-700\"\n            >Reps:</label\n          >\n          <input\n            type=\"number\"\n            id=\"reps\"\n            name=\"reps\"\n            class=\"w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow\"\n            formControlName=\"reps\" />\n          <div\n            *ngIf=\"\n              entryForm.get('reps')?.invalid && entryForm.get('reps')?.touched\n            \"\n            class=\"mt-1 text-red-500\">\n            Reps is required and must be a positive number.\n          </div>\n          <div\n            *ngIf=\"\n              entryForm.get('reps')?.errors?.['isNotMultiple'] &&\n              entryForm.get('reps')?.touched\n            \"\n            class=\"mt-1 text-red-500\">\n            Reps is required and must be multiple of 3.\n          </div>\n        </div>\n        <div class=\"flex items-center justify-center\">\n          <button\n            type=\"submit\"\n            [disabled]=\"entryForm.invalid\"\n            [class.opacity-50]=\"entryForm.invalid\"\n            class=\"rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700\">\n            Add Entry\n          </button>\n        </div>\n      </form>\n    </div>\n    {{ entryForm.value | json }}\n  ",
            styleUrl: './new-entry-form-reactive.component.scss',
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var NewEntryFormReactiveComponent = _classThis = /** @class */ (function () {
        function NewEntryFormReactiveComponent_1() {
            this.exerciseSetsService = (0, core_1.inject)(exercise_sets_service_1.ExerciseSetsService);
            this.router = (0, core_1.inject)(router_1.Router);
            this.formBuilder = (0, core_1.inject)(forms_1.FormBuilder);
        }
        NewEntryFormReactiveComponent_1.prototype.ngOnInit = function () {
            this.entryForm = this.formBuilder.group({
                date: ['', forms_1.Validators.required],
                exercise: ['', forms_1.Validators.required],
                sets: ['', [forms_1.Validators.required, forms_1.Validators.min(0), (0, custom_validation_1.multipleValidator)(2)]],
                reps: ['', [forms_1.Validators.required, forms_1.Validators.min(0), (0, custom_validation_1.multipleValidator)(3)]],
            });
        };
        NewEntryFormReactiveComponent_1.prototype.newEntry = function () {
            var _this = this;
            if (this.entryForm.valid) {
                var newEntry = __assign({}, this.entryForm.value);
                this.exerciseSetsService
                    .addNewItem(newEntry)
                    .subscribe(function (entry) { return _this.router.navigate(['/home']); });
            }
        };
        return NewEntryFormReactiveComponent_1;
    }());
    __setFunctionName(_classThis, "NewEntryFormReactiveComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        NewEntryFormReactiveComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return NewEntryFormReactiveComponent = _classThis;
}();
exports.NewEntryFormReactiveComponent = NewEntryFormReactiveComponent;
