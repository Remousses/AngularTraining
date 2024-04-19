"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authGuard = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var auth_service_1 = require("../services/auth.service");
var core_2 = require("@ngx-translate/core");
var authGuard = function (route, state) {
    var authService = (0, core_1.inject)(auth_service_1.AuthService);
    var router = (0, core_1.inject)(router_1.Router);
    var translateService = (0, core_1.inject)(core_2.TranslateService);
    console.log('ok');
    if (authService.isLogged) {
        return true;
    }
    else {
        return router.parseUrl('');
    }
};
exports.authGuard = authGuard;
