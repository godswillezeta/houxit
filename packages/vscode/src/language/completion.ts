import * as vscode from "vscode";

export function registerCompletion() {
    return vscode.languages.registerCompletionItemProvider(
        "houxit",
        {
            provideCompletionItems() {

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
        },
        "$",
        "@",
        "*",
        "#"
    );
}