"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerCompletion = void 0;
var vscode = require("vscode");
function registerCompletion() {
    return vscode.languages.registerCompletionItemProvider("houxit", {
        provideCompletionItems: function () {
            return [
                new vscode.CompletionItem("$$for"),
                new vscode.CompletionItem("$$if"),
                new vscode.CompletionItem("$$slot"),
                new vscode.CompletionItem("token"),
                new vscode.CompletionItem("stream"),
                new vscode.CompletionItem("computed"),
                new vscode.CompletionItem("watch"),
                new vscode.CompletionItem("asyncWidget"),
                new vscode.CompletionItem("agent")
            ];
        }
    }, "$", "@", "*", "#");
}
exports.registerCompletion = registerCompletion;
