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
exports.JournalComponent = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var entry_item_component_1 = require("./entry-item.component");
var list_entries_component_1 = require("./list-entries.component");
var new_item_button_component_1 = require("./new-item-button.component");
var exercise_sets_service_1 = require("../services/exercise-sets.service");
var auth_service_1 = require("../services/auth.service");
var core_2 = require("@ngx-translate/core");
var core_3 = require("@ngx-translate/core");
var JournalComponent = function () {
    var _classDecorators = [(0, core_1.Component)({
            selector: 'app-journal',
            standalone: true,
            imports: [
                common_1.CommonModule,
                router_1.RouterOutlet,
                core_3.TranslateModule,
                entry_item_component_1.EntryItemComponent,
                list_entries_component_1.ListEntriesComponent,
                new_item_button_component_1.NewItemButtonComponent,
            ],
            styleUrls: ['./journal.component.scss'],
            template: "\n    <div class=\"min-h-screen bg-gray-200\">\n      <header class=\"bg-blue-500 py-4 text-white\">\n        <div class=\"mx-auto max-w-6xl px-4\">\n          <h1 class=\"text-2xl font-bold\">{{ 'SPORT_TITLE' | translate }}</h1>\n        </div>\n      </header>\n      <main class=\"mx-auto mt-8 max-w-6xl px-4\">\n        <app-list-entries\n          [exerciseList]=\"exerciseList\"\n          (deleteEvent)=\"deleteItem($event)\"\n          (newRepEvent)=\"newRep($event)\" />\n        <app-new-item-button (newExerciseEvent)=\"addExercise($event)\" />\n        <br />\n        <br />\n        <button\n          class=\"rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700\"\n          (click)=\"newList()\">\n          Server Sync\n        </button>\n        <br />\n        <br />\n        <button\n          class=\"rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700\"\n          (click)=\"logout()\">\n          Logout\n        </button>\n        <button\n          class=\"rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700\"\n          (click)=\"changeLanguage('en')\">\n          English\n        </button>\n        <button\n          class=\"rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700\"\n          (click)=\"changeLanguage('fr')\">\n          Fran\u00E7ais\n        </button>\n      </main>\n    </div>\n  ",
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var JournalComponent = _classThis = /** @class */ (function () {
        function JournalComponent_1() {
            this.exerciseSetsService = (0, core_1.inject)(exercise_sets_service_1.ExerciseSetsService);
            this.router = (0, core_1.inject)(router_1.Router);
            this.authService = (0, core_1.inject)(auth_service_1.AuthService);
            this.route = (0, core_1.inject)(router_1.ActivatedRoute);
            this.translateService = (0, core_1.inject)(core_2.TranslateService);
            this.title = 'sport-journal';
        }
        JournalComponent_1.prototype.ngOnInit = function () {
            var _this = this;
            this.route.data.subscribe(function (_a) {
                var exerciceList = _a.exerciceList;
                _this.exerciseList = exerciceList;
            });
        };
        JournalComponent_1.prototype.newList = function () {
            var _this = this;
            this.exerciseSetsService
                .refreshList()
                .subscribe(function (dataApi) { return (_this.exerciseList = dataApi); });
        };
        JournalComponent_1.prototype.addExercise = function (newSet) {
            this.router.navigate(['new-reactive']);
        };
        JournalComponent_1.prototype.deleteItem = function (id) {
            var _this = this;
            this.exerciseSetsService.deleteItem(id).subscribe(function () {
                _this.exerciseList = _this.exerciseList.filter(function (exerciseSet) { return exerciseSet.id !== id; });
            });
        };
        JournalComponent_1.prototype.newRep = function (updateSet) {
            var _a;
            var id = (_a = updateSet.id) !== null && _a !== void 0 ? _a : '';
            this.exerciseSetsService.updateItem(id, updateSet).subscribe();
        };
        JournalComponent_1.prototype.logout = function () {
            this.authService.logout();
            this.router.navigate(['']);
        };
        JournalComponent_1.prototype.changeLanguage = function (language) {
            this.translateService.use(language);
        };
        return JournalComponent_1;
    }());
    __setFunctionName(_classThis, "JournalComponent");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        JournalComponent = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return JournalComponent = _classThis;
}();
exports.JournalComponent = JournalComponent;
