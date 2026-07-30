import * as vscode from "vscode";
import { registerCompletion } from "./language/completion";

export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(
        registerCompletion()
    );

}