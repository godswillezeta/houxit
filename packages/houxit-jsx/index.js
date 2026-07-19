import { transformSync } from "@babel/core";
import plugin from "./src/plugin.js";
import { parse } from "@babel/parser";
import syntaxJSX from "@babel/plugin-syntax-jsx";

export default function transform(code, id){
    const result = transformSync(code, {
      filename:id,
      plugins:[ syntaxJSX, plugin]
    });

    return result.code;

}
function preprocess(code) {
    return code.replace(
        /\{\s*([A-Za-z_$][\w$]*)\s*\}/g,
        "$1={$1}"
    );
}