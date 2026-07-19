import * as t from '@babel/types';
import { buildProps } from "./props.js";
import { h, Fragment } from './ast.js';
import { normalizeText } from './children.js';
import compileExpression from './expression.js';

export function buildVNode(node){
  const setup={};
  const isJSXFragment=node.type === "JSXFragment";
  const props =isJSXFragment ? t.nullLiteral() : buildProps( node.openingElement.attributes, setup);
  const children=[];
  for(const child of node.children){
    const compiled=compileChild(child);
    if(compiled != null){
      children.push(compiled);
    }
  }
  const args=[buildTag(node)];
  if(setup.hasProps){
    args.push(props);
  }
  if(children.length > 0) args.push(t.arrayExpression(children));
  return t.callExpression(h() ,args);
}
function compileChild(child){
  const type=child.type;
  switch(type){
    case "JSXText" :{
      const value=normalizeText(child.value);//child.value.trim();
      return value ? t.stringLiteral(value) : t.nullLiteral();
    } case "JSXExpressionContainer" : {
      return compileExpression(child.expression);
    } case "JSXElement" :
      
    case "JSXFragment" :
      return buildVNode(child);
  }
}
function buildTag(node){
  if(node.type === "JSXFragment"){
    return Fragment();
  }
  const name=node.openingElement.name;
  if (t.isJSXMemberExpression(name)) {
      return t.memberExpression(
        t.identifier(name.object.name),
        t.identifier(name.property.name)
    );
  }
  if(t.isJSXIdentifier(name)){
    if(/^[A-Z]/.test(name.name)){
      return t.identifier(name.name);
    }
    return t.stringLiteral(name.name);
  }
  throw new Error(`[@houxit/houxit-jsx preset error] unsupported tag`);
}