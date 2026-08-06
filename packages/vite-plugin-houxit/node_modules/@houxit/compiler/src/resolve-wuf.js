import { log, HTMLParser, useModel } from 'houxit';
import detector, { importExtractor, removeComments } from './namespace-extractor.js';

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
  let imported=surface.build ? `
  import __controller__ from 'houxit/runtime/controller';\n
  ` : "";
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
      rawChildren=removeComments(rawChildren);
      let [ src, importMap]=importExtractor(rawChildren);
      imported+=importMap;
      if(name === 'build'){
        const { source, keys }= detector(rawChildren, {}, true);
        [ src, importMap]=importExtractor(source);
        instance.build=` ${hasOwn(props, 'async') ? "async " : ""}function build(){
${src}
  __env__=true;
  return __controller__(__variables__, ${render || 'undefined'});
}`
      }else{
        instance.script=src;
      }
    }else{
      instance[name]=rawChildren
    }
  }
  return generateCompilerSource(instance, imported, id);
}
const defaultRegex=/export default/;
function generateCompilerSource(instance, importMap, id){
  const name=inferName(id);
  let source=`${importMap}\n`;
  if(instance.script && defaultRegex.test(instance.script)){
    source+=instance.script.replace(defaultRegex, (match)=>{
      return "const __module_exports__="
    });
    delete instance.script;
  }else{
    if(instance.build) source+="let __env__=false;"
    source+="const __module_exports__={};"
  }
  
  for(let [key, option] of Object.entries(instance)){
    if(new Set(['styles','template','markdown']).has(key)){
      option=`\`${option}\``;
    }
    // if(key === 'script') continue
    // log(key)
    source+=`\n${instance.script ? "if(!Object.hasOwn(__module_exports__, '${key}')){" : ""}
  __module_exports__['${key}']=${option}
    ${instance.script ? "}" : ""}
    `
  }
  if(name){
    source+=`\nif(!Object.hasOwn(__module_exports__, 'name')) __module_exports__.name="${name}";
    `
  }
  source+="\nexport default __module_exports__;";
  if(instance.build){
source+=`\nif(!__env__){
//console.error('[illegal return in "<script build>"] <script build> blocks does not allow custom return statements. Use a separate <script render> instead and return your vnodes directly');
}`
  }
  return source;
}
function inferName(id){
  return id.match(/([\w\-$_]+)\.houxit$/)[1];
}