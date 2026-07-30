"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
var completion_1 = require("./language/completion");
function activate(context) {
    context.subscriptions.push((0, completion_1.registerCompletion)());
}
exports.activate = activate;
