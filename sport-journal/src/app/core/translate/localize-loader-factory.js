"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localizeLoaderFactory = void 0;
var ngx_translate_router_http_loader_1 = require("@gilsdav/ngx-translate-router-http-loader");
var environment_1 = require("../../../environments/environment");
function localizeLoaderFactory(translate, location, settings, http) {
    // settings.alwaysSetPrefix = false;
    return new ngx_translate_router_http_loader_1.LocalizeRouterHttpLoader(translate, location, settings, http, "".concat(environment_1.environment.appUrl, "assets/i18n/locales.json"));
}
exports.localizeLoaderFactory = localizeLoaderFactory;
