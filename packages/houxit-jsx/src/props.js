import * as t from "@babel/types";
import compileExpression from './expression.js';

export function buildProps(attributes, setup) {

    if (!attributes.length) {
        return t.nullLiteral();
    }
    const props = [];
    for (const attr of attributes) {
        // <div {...props}/>
      if (attr.type === "JSXSpreadAttribute") {
        props.push(t.spreadElement(attr.argument));
          continue;
        }
        const key = t.identifier(attr.name.name);
        // <div disabled/>
        if (attr.value === null) {
            props.push(
                t.objectProperty(
                    key,
                    t.nullLiteral()
                )
            );
            continue;
        }
        // class="box"
        if (attr.value.type === "StringLiteral") {
            props.push(
                t.objectProperty(
                    key,
                    attr.value
                )
            );
            continue;
        }
        // class={expr}
        if (attr.value.type === "JSXExpressionContainer") {
            props.push(
                t.objectProperty(
                    key,
                    compileExpression(attr.value.expression)
                )
            );
        }
    }
    if(props.length > 0) setup.hasProps=true;
    return t.objectExpression(props);
}