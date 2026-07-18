import { log, HTMLParser, useModel } from 'houxit';
import detector, { importExtractor } from './namespace-extractor.js';

const hasOwn=Object.hasOwn;
export default function resolve(source, id){
  const blocks=HTMLParser(source, null, {
    deep:false
  });
  const surface={
    script:undefined,
    build:undefined,
    render:undefined,
    markdown:undefined,
    template:undefined,
    styles:undefined
  }
  for(let vNode of blocks.values()){
    const { type, props } = vNode;
    if(type==='script'){
      let res=true;
      if(props && hasOwn(props, 'build')){
        surface.build=vNode;
      }else if(props && hasOwn(props, 'render')){
        surface.render=vNode;
      }else{
        surface.script=vNode;
      }
    }else if(hasOwn(surface, type === 'style' ? 'styles' : type)){
      surface[type === 'style' ? 'styles' : type]=vNode;
    }
  }
  const { script, build, render, styles, template, markdown } = surface;
  let res=true;
  if(script && (render || build )){
    throw new Error(`[WUF resolve Error] Conflicting <script ${ render ? 'render' : 'build'}> with a <script>. Can not co-exist\n check [${id}]`);
    res=false;
  }else if(build && hasOwn(build.props, 'render')){
    throw new Error(`[WUF resolve Error] Conflicting <script build> with a render prop. can not co-exist on the same block\n check [${id}] instance`);
    res=false;
  }else if(render && render.rawChildren.trim() && !render.rawChildren.trim().includes('return')){
    throw new Error(`[WUF render block] omits a return statement`)
  }
  if(!res){
    return {};
  }
  return compileSurface(surface, id);
}
function compileSurface(surface, id){
  let imported=`
  import __controller__ from 'houxit/runtime/controller';\n
  import { __WUFClass__ } from 'houxit';\n
  `;
  let instance={};
  let render=""
  if(surface.render){
    let rawChildren=surface.render.rawChildren.trim();
    render=`function render(){
      ${rawChildren}
    }`
    if(!surface.build) surface.render=render
    else delete surface.render;
  }
  for(let [ name, vNode ] of Object.entries(surface)){
    if(!vNode) continue;
    let { type, props, children, rawChildren } = vNode;
    if(new Set(`script,build`.split(',')).has(name)){
      let [ src, importMap]=importExtractor(rawChildren);
      imported+=importMap;
      if(name === 'build'){
        const { source, keys }= detector(src, {}, true);
        instance.build=` ${hasOwn(props, 'async') ? "async " : ""}function build(){
          ${source}
        __variables__.__env__=true;
        return __controller__(__variables__, ${render});
        }`
      }else{
        instance.script=src;
      }
    }else{
      instance[name]=rawChildren
    }
  }
  return generateCompilerSource(instance, imported);
}
const defaultRegex=/export default/;
function generateCompilerSource(instance, importMap){
  let source=`${importMap}\n`;
  if(instance.script && defaultRegex.test(instance.script)){
    source+=instance.script.replace(defaultRegex, (match)=>{
      return "const __module_exports__="
    });
    delete instance.script;
  }else{
    source+="const __module_exports__={};"
  }
  for(let [key, option] of Object.entries(instance)){
    if(new Set(['styles','template','markdown']).has(key)){
      option=`\`${option}\``;
    }
    source+=`\n${instance.script ? "if(!Object.hasOwn(__module_exports__, '${key}')){" : ""}
    __module_exports__['${key}']=${option}
    ${instance.script ? "}" : ""}
    `
  }
  source+="\nexport default __module_exports__;"
  return source;
}
