import * as t from "@babel/types";

export default function compileExpression(node) {
  if(t.isFunction(node)) return node;
  return t.arrowFunctionExpression([], node)
    // switch (node.type) {

    //     case "Identifier":
    //         return compileIdentifier(node);

    //     case "MemberExpression":
    //         return compileMember(node);

    //     case "CallExpression":
    //         return compileCall(node);

    //     case "BinaryExpression":
    //         return compileBinary(node);

    //     case "ConditionalExpression":
    //         return compileConditional(node);

    //     default:
    //         return lazy(node);

    // }

}