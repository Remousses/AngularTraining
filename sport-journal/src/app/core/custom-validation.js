"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multipleValidator = void 0;
function multipleValidator(multiple) {
    return function (control) {
        var isNotMultiple = control.value % multiple !== 0;
        return isNotMultiple ? { isNotMultiple: { value: control.value } } : null;
    };
}
exports.multipleValidator = multipleValidator;
