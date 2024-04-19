"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.journalResolver = void 0;
var core_1 = require("@angular/core");
var exercise_sets_service_1 = require("../services/exercise-sets.service");
var journalResolver = function (route, state) {
    var exerciseSetsService = (0, core_1.inject)(exercise_sets_service_1.ExerciseSetsService);
    return exerciseSetsService.getInitialList();
};
exports.journalResolver = journalResolver;
