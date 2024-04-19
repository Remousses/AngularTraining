"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var core_2 = require("@ngx-translate/core");
var translate_loader_factory_1 = require("./core/translate/translate-loader-factory");
var http_2 = require("@angular/common/http");
exports.appConfig = {
    providers: [
        (0, router_1.provideRouter)(app_routes_1.routes),
        (0, platform_browser_1.provideClientHydration)(),
        (0, http_1.provideHttpClient)((0, http_1.withFetch)()),
        (0, core_1.importProvidersFrom)(core_2.TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: core_2.TranslateLoader,
                useFactory: translate_loader_factory_1.translateLoaderFactory,
                deps: [http_2.HttpClient]
            }
        }))
    ]
};
