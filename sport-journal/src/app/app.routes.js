"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var auth_guard_1 = require("./core/auth.guard");
var journal_resolver_1 = require("./journal/journal.resolver");
exports.routes = [
    {
        path: 'home',
        resolve: { exerciceList: journal_resolver_1.journalResolver },
        canActivate: [auth_guard_1.authGuard],
        loadComponent: function () {
            return Promise.resolve().then(function () { return require('./journal/journal.component'); }).then(function (c) { return c.JournalComponent; });
        },
    },
    {
        path: 'new-template',
        canActivate: [auth_guard_1.authGuard],
        loadComponent: function () {
            return Promise.resolve().then(function () { return require('./journal/new-entry-form-template.component'); }).then(function (c) { return c.NewEntryFormTemplateComponent; });
        },
    },
    {
        path: 'new-reactive',
        canActivate: [auth_guard_1.authGuard],
        loadComponent: function () {
            return Promise.resolve().then(function () { return require('./journal/new-entry-form-reactive.component'); }).then(function (c) { return c.NewEntryFormReactiveComponent; });
        },
    },
    {
        path: '',
        loadComponent: function () {
            return Promise.resolve().then(function () { return require('./core/login.component'); }).then(function (c) { return c.LoginComponent; });
        },
    },
    {
        path: 'error',
        loadComponent: function () {
            return Promise.resolve().then(function () { return require('./core/error-page.component'); }).then(function (c) { return c.ErrorPageComponent; });
        },
    },
    { path: '**', redirectTo: '/error' }
];
