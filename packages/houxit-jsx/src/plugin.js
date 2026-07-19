import * as t from "@babel/types";
import { buildVNode } from './builder.js';
import { createImport, hasImport } from "./imports.js";

export default function(){
  let hasJSX=false;
  return{
    visitor:{
      Program:{
        exit(path){
          if(hasJSX && !hasImport(path)) path.unshiftContainer("body", createImport());
        }
      },
      JSXElement(path){
        hasJSX=true;
        path.replaceWith( buildVNode(path.node));
      },
      JSXFragment(path){
        hasJSX=true;
        path.replaceWith( buildVNode(path.node));
      }
    }
  }
}