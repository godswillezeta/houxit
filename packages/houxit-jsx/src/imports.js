import * as t from "@babel/types";

export function createImport() {

    return t.importDeclaration(

        [

            t.importSpecifier(
                t.identifier("h"),
                t.identifier("h")
            ),

            t.importSpecifier(
                t.identifier("Fragment"),
                t.identifier("Fragment")
            )

        ],

        t.stringLiteral("houxit")

    );

}

export function hasImport(program) {

    let hasH = false;
    let hasFragment = false;

    for (const node of program.node.body) {

        if (!t.isImportDeclaration(node)) continue;

        if (node.source.value !== "houxit") continue;

        for (const specifier of node.specifiers) {

            if (!t.isImportSpecifier(specifier)) continue;

            const imported = specifier.imported.name;

            if (imported === "h") {
                hasH = true;
            }

            if (imported === "Fragment") {
                hasFragment = true;
            }

        }

    }

    return hasH && hasFragment;

}