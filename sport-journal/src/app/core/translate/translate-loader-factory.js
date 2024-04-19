"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateLoaderFactory = void 0;
var http_loader_1 = require("@ngx-translate/http-loader");
var environment_1 = require("../../../environments/environment");
function translateLoaderFactory(http) {
    return new http_loader_1.TranslateHttpLoader(http, "".concat(environment_1.environment.appUrl, "assets/i18n/"), '.json');
}
exports.translateLoaderFactory = translateLoaderFactory;
