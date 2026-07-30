
  //Prince Chukwuemeka Ezeta 
  // ** This project, 'HOUXIT', is been sponsored by the HOUXIT SYSTEMS
  // ** Visit 'www.houxit.com/guide' for for more information on the houxit project , documentation and houxit's development process roadmap.
  // ** This is a web JIT development version of Houxit
  // ** We at the core team of Houxit project are determined on developing and improving Houxit.js features and perfomance issues, we only need your support to help and encourage us on maintaing this template engine.
  // ** Thanks for choosing Houxit
  // THE TRANSPARENT FOOTPRINT FOR MODERN WEB APPS
"use strict";
const log=console.log;
const version = "0.1.10";
const get_version=()=>'houxit-'+version;//houxit at it's earliest version
const isArray=Array.isArray;
const toString=Object.prototype.toString;
const _toStringCall=txt=>toString.call(txt);
const isDate=date=>_toStringCall(date) === '[object Date]';
const isSet=val=>_toStringCall(val) === '[object Set]';
const isMap=map=>_toStringCall(map) === '[object Map]';
const isWeakMap=map=>_toStringCall(map) === '[object WeakMap]';
const isWeakSet=setup=>_toStringCall(setup) === '[object WeakSet]';
const toStringType=value=>_toStringCall(value).slice(8, -1).toLowerCase();
const isString=str=>getType(str) === 'string';
const isNull=arg=>arg==null;
const isUndefined=arg=>_toStringCall(arg) === '[object Undefined]';
const isObject=obj=>getType(obj) === 'object';
const isPObject=obj=>_toStringCall(obj) === '[object Object]';
const isPrimitive=val=>validateType(val, [ String, Number, Boolean, Date ]) || isNull(val);
const hasOwn=Object.hasOwn;
const assign=Object.assign;
const entries=Object.entries;
const keys=Object.keys;
const values=Object.values;
const preventX=Object.preventExtensions;
const define=Object.defineProperty;
const isS=Object.is;
const hasProp=(obj, prop)=> prop in obj;
function _makeMap_(obj, arg){
  return isString(obj) ? new Set(obj.split(',')).has(arg) : isArray(obj) ? new Set(obj).has(arg) : validateType(arg, [Set, Tuple, Map ]) ? obj.has(arg) : isPObject(obj) ? hasProp(obj, arg) :  false;
}
const freeze=(obj={})=>Object.freeze(obj);
const inBrowserCompiler = typeof self !== "undefined" && typeof self === "object";
const variableDeclarationRegex=/([\s\S]+[^=]*)[ ]*=[ ]*([\s\S]+)?|([\w_$\-]+)/m;
const templateClassValidatorRegex=/^([\w\-$.[\]\(\)]+)::/;
const invalidIdentifierCharRegex=/[='"!@#%^&*()+\-\[\]{};:\\|,.<\/? ]/;
const invalidAccessorCharRegex=/[='"!@#%^&*(){};:\\|,<? ]/;
const isValidAccessor=variable => isString(variable) && /[a-zA-Z_$]/.test(variable.at(0)) && !invalidAccessorCharRegex.test(variable);
const isValidIdentifier=variable => isString(variable) && /[\w$]/.test(variable.at(0)) && !invalidIdentifierCharRegex.test(variable);
const constBlockContext="if_Block,for_Block,slots_Block,children_Block";
const isValidCtxType=type=>_makeMap_(constBlockContext, type);
const isFunction=func=>getType(func) === 'function';
const isPFunction=func=>isFunction(func) && !isClass(func);
const isNumber=num=>getType(num) === 'number';
const isBoolean=bool=>getType(bool) === 'boolean';
const bool=Boolean;
const defProps=Object.defineProperties;
const isSymbol=sym=>_toStringCall(sym) === '[object Symbol]';
const isChar=char=>isString(char) || isSymbol(char);
const isPromise=prom=> _toStringCall(prom) === '[object Promise]' && isFunction(prom.then) && isFunction(prom.catch);
const nullObj=()=> Object.create(null);
const isTrue=compute=>compute === true;
const isFalse=compute=>compute === false;
const $warner=`<<< Houxit Exception >>> ..... >>>>>>>`;
const characters=/[!"#%&'()*+,./;<=>@[\\\]\^`{|}~\s]+/;
const stringsMonitorRegex=/"(.*?)"|'(.*?)'|`+(.*?\s)`+/gm;
function debugHandler(msg, self, dictateW=false, txt=''){
  let DEBUG_ENV=true;
  if(isHouxitBuild(self)) {
    DEBUG_ENV=self[$$$core].settings.debug /*&& !self[$$$operands].initializedRender*/;
  }
  if(DEBUG_ENV ) {
    if(dictateW) {
      console.warn(`${$warner}\n\nEncountered a problem ${txt} \n\n at  at  \n <${self && isHouxitBuild(self) ? self[$$$ownProperties].name : 'UnknownWidget' }> widget`);//houxit warming debugger
    }
    console.error(`${$warner}\n\n${msg}\n\n"${msg?.stack || ''}"`);//houxit warming debugger
    // $warn(msg.stack ? msg.stack : msg, self)
  }
}
function $warn(msg, self){
  let DEBUG_ENV=true;
  if(isHouxitBuild(self)) {
    DEBUG_ENV=self[$$$core].settings.debug;
  }
  if(DEBUG_ENV) {
    console.warn(`${$warner}\n\n${msg}`);//houxit warming debugger
  }
}
const isIterator=iterator=>iterator && !isArray(iterator) && isPFunction(iterator[Symbol.iterator]);
const isInfinity=num=>num === Infinity;
const isIterable=iterable=>(validateType(iterable, [Object,Array,Set,Map,Tuple]) || isIterator(iterable)) && !isString(iterable);
const enumerable =true, configurable =true, writable = true ;
const isEmptyStr=str=>str === "";
const $Error=(msg,self)=>{
  let DEBUG_ENV=true;
  if(self) {
    DEBUG_ENV=self[$$$compiler].config.debug;
  }
  if(isTrue(DEBUG_ENV)) {
    console.error(`${$warner}\n\n ${msg}`);//houxit warming debugger
  }
}
const hasHyphen_bind=key=>/^\-\-[\w\-|[\]_$]+/.test(key);
const hasAt_bind=key=>/^@[\w\-|[\]$_]+/.test(key);
const has$$_bind=key=>/^\$\$[\w\-|[\]_]+/.test(key);
const hasAsh_bind=key=>/^\#[\w\-|[\]_$]+/.test(key);
const hasSpread_bind=( key , useAccessor=false )=> ( useAccessor ? /^\.\.\.[\w$.]+/ : /^\.\.\.[\w$_]+/ ).test(key);//useAccessor requests if dot notation is acceptd on match
const isSpecialProps=prop=>_makeMap_("ref,key,dispatch,attach,context,motion", prop);
const exists=value=> (value || isNumber(value)) ? true : false ;
const hasAsterisks_bind=key=>/^\*[\w\-|[\]$\_]+/.test(key)
const widgetOptionType={ 
  build:Function, 
  model:Function, 
  widgets:Object, 
  preBuild:Function, 
  postBuild:Function, 
  preMount:Function,
  postMount:Function, 
  preUpdate:Function, 
  postUpdate:Function, 
  postDestroy:Function, 
  preDestroy:Function, 
  handlers:Object, 
  params:[Array, Object], 
  buildConfig:Object, 
  styles:String, 
  directives:Object, 
  template:String, 
  name:String,
  observers:Object, 
  filters:Object, 
  blocks:Object,
  signals:Array, 
  transmit:Function, 
  receive:[Array, Object], 
  slots:Array, 
  markdown:String,
  context:Function,
  computed:Object,
  mixins:Array,
  onTracked:Function,
  onEffect:Function,
  onCatch:Function,
  onSlotRender:Function,
  onSlotEffect:Function,
  render:Function,
  refs:Array,
  install:Function,
  templateClasses:Object,
  animations:Object,
  transitions:Object,
  bindDrivers:[Array, Object]
}
const isMergableMethods=n=>_makeMap_("model,preBuild,postBuild,preMount,postMount,preUpdate,postUpdate,preDestroy,postDestroy,transmit,onTracked,onEffect,onCatch,onSlotEffect,onSlotEffect,install", n);
const isMergableObjects=n=>_makeMap_("widgets,handlers,buildConfig,directives,observers,filters,blocks,computed,templateClasses,animations,transitions", n);
const isInvalidMixinOption=n=>_makeMap_("build,styles,template,name,markdown,context,render", n);
const isMergeableArrays=n=>_makeMap_("signals,slots,mixins,refs", n);
const isMergeableArrays_Objects=n=>_makeMap_("params,receive", n);
const validWidgetOptions=keys(widgetOptionType).join(',');//valid widget options---
class __WUFInstanceLoader{
  constructor(widget, options, _ ){
    
  }
  type='browser';//[ cli, browser]
  _isSingleFileWidget=false;//[true, false]
  __WUFTransformType='options';//['build']
  NamespaceObject={};
  lookupLoader=pass;
  dev_loggers=[];
}
const plainFunctionOptions="model,preBuild,postBuild,preMount,postMount,preUpdate,postUpdate,postDestroy,preDestroy,transmit,context,onEffect,onTracked,onCatch,build,onSlotEffect,onSlotRender,refs";
const nonAFuncMethod=fnName=> _makeMap_(plainFunctionOptions, fnName);
const calledOnceFNOptions="model,preBuild,postBuild,preMount,postMount,onTracked,build,onSlotRender"
const isCalledOnceOpt=opt=>_makeMap_(calledOnceFNOptions, opt)
const nodeJSOnlyOption="markdownSrc,styleSrc,templateSrc";
const isNodeJSOnlyOption=opt=>_makeMap_(nodeJSOnlyOption, opt);
const primaryKeyOptions="build,styleSrc,styles,templateSrc,template,name,markdownSrc,markdown,context";
const isPrimaryKeyOption=opt=>_makeMap_(opt, primaryKeyOptions);
const isArgument=arg=>_toStringCall(arg) === "[object Arguments]";
function len(obj){
  if(!obj) {
    return 0;
  }
  obj=unwrap(obj);
  return validateType(obj, [ String , Array, Arguments ] ) ? obj.length : validateType(obj, [ Set, Map, Tuple ]) ? obj.size : isObject(obj) ? keys(obj).length : isNumber(obj) ? obj : -1 ;
}
const isValidWidgetOption=opts=>_makeMap_(validWidgetOptions, opts);//checks if an option is a vslid Houxit widget option
const HTML_TAGS="html,head,style,title,body,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,main,nav,section,blockquote,dd,div,dl,dt,figcaption,figure,li,menu,ol,p,pre,ul,a,abbr,b,bdi,bdo,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,audio,map,video,iframe,object,picture,portal,svg,math,canvas,noscript,script,del,ins,caption,col,colgroup,table,tbody,td,tfoot,th,thead,tr,datalist,fieldset,form,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,summary,button,base,link,meta,hr,br,wbr,area,img,track,embed,source,input,template,slot" ;//All html valid tags supported by the Houxit framework
const IS_HTML_TAG=txt=>_makeMap_(HTML_TAGS, txt);
const WEB_COMPONENTS="template,slot";//Web components tags , also supported by the Houxit framework
const HTML_FORM_ELEMENTS="select,textarea,input,form,progress,meter,option";
const Is_Form_Element=element=>IS_ELEMENT_NODE(element) && _makeMap_(HTML_FORM_ELEMENTS, (element.localName));
const IS_WEB_COMPONENT=txt=>_makeMap_(WEB_COMPONENTS, txt);
const HTML_VOID_TAGS="base,link,meta,hr,br,wbr,area,img,track,embed,source,input";//HTML void tags, also supported by the Houxit framework
const IS_HTML_VOID_TAG=txt=>_makeMap_(HTML_VOID_TAGS, txt);
const HTML_DEPRECATED_TAGS="acronym,noembed,applet,noframes,bgsound,param,big,blink,plaintext,center,rb,content,rtc,dir,shadow,font,spacer,frame,strike,frameset,image,tt,keygen,xmp,marquee,nobr,menuitem";//HTML obselete and deprecated element. 
//The above tags are no more been supported by the houxit framework
const IS_HTML_DEPRECATED_TAG= txt => _makeMap_(HTML_DEPRECATED_TAGS, txt);
const HTMLIDLAttributes="accesskey,contenteditable,dir,draggable,enterkeyhint,hidden,inert,innerText,inputmode,popover,lang,noModule,nonce,outerText,spellcheck,style,tabindex,title,translate,className,value,innerHTML,outerHTML";
const isHTMLIDLAttributes=txt=>_makeMap_(HTMLIDLAttributes, txt)
const HTMLBooleanAttributes="disabled,hidden,draggable,checked,selected,defer,ismap,reversed,readonly,autoplay,disableremoteplayback,muted,loop,autofocus,async,controls,default,inert,open,scoped,seamless,muted,multiple,itemscope,allowfullscreen,formnovalidate,nomodule,novalidate";
const isHTMLBooleanAttributes=txt=>_makeMap_(HTMLBooleanAttributes, txt);
const SVG_TAGS="animate,animateMotion,animateTransform,circle,clipPath,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,stopsvg,switch,symbol,text,textPath,tspan,use,view";
const SVG_DEPRECATED_TAGS="altGlyph,altGlyphDef,altGlyphItem,cursor,font,font-face,font-face-format,font-face-name,font-face-src,font-face-uri,glyph,glyphToken,hkern,missing-glyph,tref,vkern";
const IS_SVG_TAG=tag=>_makeMap_(SVG_TAGS, tag);
const IS_SVG_DEPRRCATED_TAG=tag=>_makeMap_(SVG_DEPRECATED_TAGS, tag);
const MATHML_TAGS = "malignmark,menclose,annotation,annotation-xml,maction,merror,maligngroup,mfenced,mn,mo,mmultiscripts,mfrac,semantics,none,mlongdiv,mlabeledtr,mfraction,mtr,mglyph,mi,mover,munder,munderover,mpadded,mphantom,mspace,mroot,mprescripts,msline,mrow,ms,mscarries,mscarry,msgroup,msqrt,mstack,mtd,mtext,mtable,mstyle,msub,msubsup,msrow,msup";
const IS_MATHML_TAG=tag=>_makeMap_(MATHML_TAGS, tag);
const IS_VALID_TAGNAME=(txt)=>{
  if(IS_HTML_TAG(txt)||IS_WEB_COMPONENT(txt)||IS_HTML_VOID_TAG(txt) || IS_SVG_TAG(txt) || IS_MATHML_TAG(txt)) {
    return true;
  }
  if(IS_HTML_DEPRECATED_TAG(txt) || IS_SVG_DEPRRCATED_TAG(txt)){
    debugHandler(`"${txt}" is an html/svg deprecated tag, and should not be used in new projects\n\nhouxit does not allow the compilation of obselete elements`);
  }
  return false;
}
const dataStringTypes="string,function,object,array,boolean,number,symbol,set,map,bigint,set,map,weakmap,weakset,date,weakref,promise,proxy,tuple";//Valid javascript datatypes
const isValidDataTypeString=obj=>_makeMap_(dataTypes, obj);//checks if a string value is a dataTypes return text
class Tuple extends BaseTuple{
  constructor(){
    super(...arguments);
  }
}
const $motionKey=Symbol('<Motion:key>');
class BaseMotion{
  constructor(motion, params={}, key, mode){
    this[$motionKey]={
      params:{},
        mode:'both'
      }
      const type=key === 'transition' ? 'trasite' : 'animate';
      if(!isPFunction(motion)){
        debugHandler(`"${type}()" "${key}" function expects a plain function...\nvalidation failed`);
        return;
      }else if(params && !isPObject(params)){
        debugHandler(`"params" @ argument 2 of "${type}" "${key}" function expects a plain object object of parameter properties`);
        return
      }else if(mode && (!isString(mode) && !_makeMap_('both,in,out', mode))){
        debugHandler(`Failed to validate the "mode" argument/..`);
        return;
      }
      assign(this[$motionKey], {
        key,
        [key]:motion,
        params:assign(this[$motionKey].params, params),
        mode: mode || 'both'
      });
      this.type=key;
    }
  }
  class Animation extends BaseMotion{
    constructor(animation, params){
      super(animation, params, 'animation');
    }
  }
  class Transition extends BaseMotion{
    constructor(transition, params, mode='both'){
      super(transition, params, 'transition', mode);
    }
  }
  class SSRText{
    constructor(text){
      this.content=text;
    }
    content=""
    hydrationFlushs=new Tuple()
  }
  class SSRFragment{
    constructor(array){
      this.fragment=arrSet(array);
    }
    fragment=[]
    hydrationFlushs=new Tuple()
    hx_Element=undefined
  }
  class Dict extends BaseDict{
    constructor(){
      super(...arguments);
    }
  }
  const TemplateClassKey=Symbol("template-class");
  class BaseTemplateClass{
    constructor(callback, ...args){
    }
  }
  const isBaseMotion=klass=>klass instanceof BaseMotion;
  const isAnimation=klass=> klass instanceof Animation;
  const isTransition=klass=> klass instanceof Transition;
  const isSSRText=klass=> klass instanceof SSRText;
  const isSSRFragment=klass=> klass instanceof SSRFragment;
  const isTemplateClass=klass=> klass instanceof BaseTemplateClass;
  const DataFunctionMap=[String, Function, Object, Array, Symbol, Number, Boolean];
  const XtructDataCallableTypes=[Set,Map,WeakMap,WeakSet, Date,WeakRef,Promise,RegExp,Proxy,BigInt,ArrayBuffer,Tuple];
  const isGlobalBuiltinType=type=>_makeMap_(DataFunctionMap, type) || _makeMap_(XtructDataCallableTypes, type);
  function isDomSpecialConstructor(value){
    if(!inBrowserCompiler) {
      return false;
    }
    const domSpecialConstructors=[ Element];
    if(new Set(domSpecialConstructors).has(value)) {
      return true;
    }
    return isNativeElement(value) || value instanceof Element;
  }
  const Data_Flags="NodeList,PATCH_FLAGS,PATCH-TYPE-TUPLE";
  const hasUpperCase=str=>str.match(/[A-Z]/);
  const hasLowerCase=str=>str.match(/[a-z]/);
  const hasDigit=dig=>dig.match(/[0-9]/);
  const NodeTypeMap={ 
    ELEMENT_NODE:1, 
    ATTRIBUTE_NODE:2, 
    TEXT_NODE:3, 
    CDATA_SECTION_NODE:4, 
    ENTITY_REFERENCE_NODE:5,
    ENTITY_NODE:6, 
    PROCESSING_INSTRUCTION_NODE:7,
    COMMENT_NODE:8, 
    DOCUMENT_NODE:9, 
    DOCUMENT_TYPE_NODE:10,
    DOCUMENT_FRAGMENT_NODE:11,
    NOTATION_NODE:12 
  }
  if( inBrowserCompiler ) {
    
  }
  const isNativeElement=(vnode)=> inBrowserCompiler && (vnode instanceof HTMLElement || vnode instanceof SVGElement);
  const IS_TEXT_NODE=node=>node && node.nodeType === NodeTypeMap.TEXT_NODE;
  const IS_ATTRIBUTE_NODE=node=>node && node.nodeType === NodeTypeMap.ATTRIBUTE_NODE;
  const IS_ELEMENT_NODE=node=>node && isNativeElement(node) && node.nodeType === NodeTypeMap.ELEMENT_NODE;
  const IS_ENTITY_NODE=node=>node && node.nodeType === NodeTypeMap.ENTITY_NODE;
  const IS_DOCUMENT_TYPE_NODE=node=>node && node.nodeType === NodeTypeMap.DOCUMENT_TYPE_NODE;
  const IS_DOCUMENT_NODE=node=>node && node.nodeType === NodeTypeMap.DOCUMENT_NODE;
  const IS_NOTATION_NODE=node=>node && node.nodeType === NodeTypeMap.NOTATION_NODE;
  const IS_DOCUMENT_FRAGMENT_NODE=node=>node && node.nodeType === NodeTypeMap.DOCUMENT_FRAGMENT_NODE;
  const IS_CDATA_SECTION_NODE=node=>node && isNativeElement(node) && node.nodeType === NodeTypeMap.CDATA_SECTION_NODE;
  const IS_PROCESSING_INSTRUCTION_NODE=node=>node && node.nodeType === NodeTypeMap.PROCESSING_INSTRUCTION_NODE;
  const IS_ENTITY_REFERENCE_NODE=node=>node && node.nodeType === NodeTypeMap.ENTITY_REFERENCE_NODE;
  const IS_COMMENT_NODE=node=>node && node.nodeType === NodeTypeMap.COMMENT_NODE;
  function isHouxitRenderNode(node){
    return isPrimitive(node) || isArray(node) || isSlotInstance(node) ||
    isVNodeClass(node) || isTemplateClass(node);
  }
  function isChildrenNode(val){
    return isPrimitive(val) || isPFunction(val) || isNativeElement(val) || validateType(val, [ Array, HouxitElement, slotInstanceMap, vNodeClass, BaseTemplateClass, ]);
  }
  function isChildrenObjInstances(val){
    if(!isChildrenObj(val)) {
      return false;
    }
    return isHouxitElement(val) || isHouxitBuild(val) || isNativeElement(val)  || isSlotInstance(val) || isVNodeClass(val) || isTemplateClass(val);
  }
  function isChildrenObj(val){
    return isChildrenNode(val) && !( isPrimitive(val) || isArray(val))
  }
  function isRerender(self){
    return isHouxitBuild(self) && isTrue(self[$$$operands].initializedRender);
  }
  const isBaseWidget=widget=> isPObject(widget) && widget instanceof Widget;
  const isProxy=value=>validateType(value, Proxy);
  const validHouxitWidget=(w)=> w && (((is_wuf_class(w) || isObject(w)) && !isProxy(w) && !isStream(w)) || isAsyncWidget(w) || isFunction(w) || isHouxitBuiltinSymbolWidget(w));
  function isAsyncFunction(fn) {
    return isPFunction(fn) && fn?.constructor?.name === 'AsyncFunction';
  }
  function parseScript(script, args){
    return new Function(`"use strict"; return (${script})`)(args);
  }//helps compile string values to javascript statement
  function passableBlock(block, warn=false){
    try{
      parseScript(block);
      return true;
    }catch(err){
      if(isTrue(warn)){
        debugHandler(`Statement not passage in mustache/binding context\n\nContext expects a single expression\n\n"${block}"`);
        debugHandler(err);
      }
      return false
    }
  }
  const isInDomNode=element=> inBrowserCompiler && element?.getRootNode() === document;
  const GLOBAL_EVENTS="abort,animationcancel,animationend,animationiteration,animationstart,auxclick,blur,error,focus,canplay,canplaythrough,cancel,change,click,close,contextmenu,dblclick,drag,dragend,dragenter,dragleave,dragover,dragstart,drop,durationchange,emptied,ended,formdata,gotpointercapture,input,invalid,keydown,keypress,load,keyup,loadeddata,loadedmetadata,loadend,loadstart,lostpointercapture,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,mousewheel,wheel,pause,play,playing,pointerdown,pointermove,pointerup,pointercancel,pointerover,pointerout,pointerleave,pointerenter,pointerlockchange,pointerlockerror,progress,ratechange,reset,resize,scroll,securitypolicyviolation,seeked,seeking,select,selectstart,selectionchange,slotchange,stalled,submit,suspend,timeupdate,touchcancel,touchend,touchstart,touchmove,transitioncancel,transitionrun,transitioned,transitionstart,waiting,volumechange,autocompleteerror,autocomplete,hover";//Html event names managed by houxit on elements
  const IS_VALID_EVENT_HANDLER=eventName=>_makeMap_(GLOBAL_EVENTS, eventName);
  const isClass = val=> isFunction(val) && val.toString().startsWith('class');
  const directivesHooksMap="created,mounted,updated,init,destroyed";
  function instance_Has_Widget(self, name ){
    return _makeMap_(BUILT_IN_WIDGETS, name) || _makeMap_(self[$$$register]?.widgets || {}, name ) || _wufHas_instance(self, name);
  }
  const normalize_Widget=(self, name)=>{
    if(_makeMap_(BUILT_IN_WIDGETS, name)){
      return BUILT_IN_WIDGETS[name];
    }else if(_makeMap_(self[$$$register].widgets, name)){
      return self[$$$register].widgets[name];
    }else if(_isWUFBuild(self) && _wufHas_instance(self, name)){
      return normalizeWUFBuildScope(self, name);
    }
    return null;
  }
  function instance_Has_Directive(self, name ){
    return !isHouxitDirective(name) && _makeMap_(self[$$$register]?.directives || {}, name ) || _wufHas_instance(self, name) ;
  }
  const normalize_Directives=(self, name)=> _makeMap_(self[$$$register].directives, name) ? self[$$$register].directives[name]: normalizeWUFBuildScope(self, name);
  class slotInstanceMap{
    slots=new Object();
    constructor(opts={}){
      entries(opts).forEach(([ name, value ])=>this.slots[name]=value);
    }
  }
  const isSlotInstance=val=> val instanceof slotInstanceMap;
  const requestMethods="POST,GET,PATCH,HEAD,DELETE,PUT,CONNECT,OPTIONS,TRACE";
  const isRequestMethod=method=>_makeMap_(requestMethods, method);
  const isHouxitElement=vnode=>vnode instanceof HouxitElement;
  const isHouxitBuild=widget=>widget instanceof HouxitBuild;
  const isHouxitTextElement=vnode=>vnode instanceof HouxitTextElement;
  const isHouxitNativeElement=vnode=> vnode instanceof HouxitNativeElement;
  const isHouxitCustomNativeElement=vnode=> vnode instanceof HouxitCustomNativeElement;
  const isHouxitFragmentElement=vnode => vnode instanceof HouxitFragmentElement;
  const readonlyModelProps="$element,$params,$attrs,$events,$signals,$slots,$parent,$root";
  const proxySkipped="$element,$signals,$parent,$root,$observe,$useAgent,$tick,$write,$effectHook,[[[reactive__Token]]],$params,$attrs,$events";
  const validTokenConfigOptions="onTrack,onEffect,isComputed,readonly,shallow"
  const isProxySkipped=prop=>_makeMap_(proxySkipped, prop);
  function createObj(name, props){
    if(len(arguments) === 1 && isPObject(name)) {
      props=name;
    }
    if(props && !isPObject(props)) {
      props=null;
    }
    let objXtruct=Function('name',`
     return name ? class ${name}{} : Object ;
    `)
    objXtruct=objXtruct(name);
    objXtruct= new objXtruct();
    if(props) {
      assign(objXtruct, props);
    }
    return objXtruct;
  }
  const canRender=value=>isPrimitive(value) && !isNull(value);
  function compileToRenderable(value){
    value=unwrap(value);
    if(canRender(value)) {
      return String(value);
    }else if(isPFunction(value)) {
      return value();
    }else if(validateType(value, [Array, Date, Function])) {
      return value.toString();
    }else if(!isNull(value) && !isPObject(value)) {
      return JSON.stringify(value);
    }
    return "";
  }
  const arrowFNRegex=/^(async[ ]+)?(\(([\w$,.\[\]\{\} ]*)\)|[\w$]+)[ ]*=>[ ]*[{]?\s*/;
  const functionFNRegex=/^(async[ ]+)?(function)?([*]?([ ]*)[\w$]*)?\(([\w$]*)?\)[ ]*\{\s*/m;
  const isArrowFunction=(fn)=> isPFunction(fn) && arrowFNRegex.test(fn.toString());
  const isFNString=str => isString(str) && isTrue(arrowFNRegex.test(str) || functionFNRegex.test(str));
  const boundFNRegex=/^bound [\w$]*$/;
  const isBFunction=func=>isPFunction(func) && !isArrowFunction(func) && boundFNRegex.test(func.name);
  const objectDestructureRegex=/^{(.*?)}$/;
  const arrayDestructureRegex=/^\[(.*?)\]$/;
  const isForLoopDestructureRegex=/^((\(|\<)(.*?)(\)|\>))$/;
  const isDestructureSyntax=syntax=>objectDestructureRegex.test(syntax) || arrayDestructureRegex.test(syntax) ;
  class Model{};
  class Params{};
  class Attrs{};
  class Slots{};
  class Refs{};
  class Signals{};
  class Events{};
  class ReactiveEffectObject{};
  const isModelInstance=model=>model instanceof Model;
  const isRefInstance=model=>model instanceof Model;
  const isParamsInstance=param=>param instanceof Params;
  const isAttrsInstance=param=>param instanceof Attrs;
  const isSlotsInstance=param=>param instanceof Slots;
  const isSignalsInstance=param=>param instanceof Signals;
  const isEventssInstance=param=>param instanceof Events;
  const isREffObj=param=>param instanceof ReactiveEffectObject;
  const isClassBasedBuild=build=>isHouxitBuild(build) && build[$$$ownProperties].widgetType === 'class-based';
  const isFunctionBasedBuild=build=>isHouxitBuild(build) && build[$$$ownProperties].widgetType === 'function-based';
  const isObjectBasedBuild=build=>isHouxitBuild(build) && build[$$$ownProperties].widgetType === 'object-based';
  const $$tupleStore=Symbol();
  const $$dexTransformKey=Symbol();
  const genericKeyProp=Symbol();
  const dir$$__render=Symbol("[[[$$@@dir$$__render]]]");
  const $$$context=Symbol("[[[$$@context]]]");
  const $$$operands=Symbol();//for the operands property of a widget instance
  const $$$ownProperties=Symbol();
  const $$$compiler=Symbol();
  const $$$core=Symbol();
  const $$$register=Symbol();
  const $$$StreamProxyKey=Symbol();//used in marking an stream object
  const scopedDirKey=Symbol();//for the scoped directive
  const lifeCiycleBinding=Symbol();
  const $$$customDirs=Symbol();
  const $$renderClass=Symbol();
  const SSRHydrationSymbol=Symbol();
  const factoryHXSelfInstance=Symbol();
  const $factoryTokenKey=Symbol();
  const $asyncVnodeKey=Symbol();
  const $suspenseElement=Symbol('<suspense:element.$elemen>');
  const AsyncHxElementTrackerKey=Symbol();
  const PRIVATE_PROPERTY_KEY=Symbol();
  const isAsyncTrackerElement=el=>isHouxitElement(el) && hasOwn(el, AsyncHxElementTrackerKey);
  const isSuspenseElement=el=>isHouxitElement(el) && hasOwn(el.VNodeManager, $suspenseElement);
  class AsyncWidget{
    constructor(load, config={}){
      config=assign({
        delay:200,
        timeout:Infinity,
        suspensible:true
      }, config);
      validateAsyncWidgetConfig(config);
      this[$asyncVnodeKey]={
        load,
        config,
        cache:undefined,
        postLoad:0
      }
    }
  }
  function validateAsyncWidgetConfig(config){
    for(let [key, value] of entries(config)){
      if(!_makeMap_('delay,error,fallback,timeout,suspensible', key)){
        debugHandler(`Unrecognized key "${key}" passed to 'AsyncWidget' config object`);
      }else if(key === "suspensible" && !isBoolean(value)){ 
        debugHandler(`["AsyncWidget()">>config{}.suspensible type Error] expects a Boolean value`);
      }else if(_makeMap_('delay,timeout', key) && (!isNumber(value) || isNaN(Number(value)))){
        debugHandler(`"${key}" config prop of "AsyncWidget" expects a type of "number"`);
      }else if(_makeMap_('error,fallback', key) && !isPFunction(value)){
        // debugHandler(`"${key}" config prop of "AsyncWidget" expects a render function value`);
      }else {
        continue;
      }
      // delete config[key];
    }
  }
  const isAsyncWidget=vnode=>vnode instanceof AsyncWidget && hasOwn(vnode, $asyncVnodeKey);
  const isAsyncVNodeClass=vnode=>vnode instanceof vNodeClass && hasOwn(vnode.filesFilter, $asyncVnodeKey);
  const isFRKey=(key)=> $factoryTokenKey === key && isS($factoryTokenKey, key);
  const Fragment=Symbol('hx:fragment');
  const Portal=Symbol('hx:portal');
  const Build=Symbol('hx:build');
  const Self=Symbol('hx:self');
  const Provider=Symbol('hx:provider');
  const Motion=Symbol('hx:motion');
  const Suspense=Symbol('hx:suspense');
  const Memo=Symbol('hx:memo');
  const If=Symbol('hx:if');
  const ElseIf=Symbol("hx:else-if");
  const Else=Symbol('hx:else');
  const For=Symbol('hx:for');
  const BUILT_IN_WIDGETS={
    'hx:fragment':Fragment,
    'hx:provider':Provider,
    'hx:portal':Portal,
    'hx:build':Build,
    'hx:self':Self,
    'hx:motion':Motion,
    'hx:memo':Memo,
    'hx:suspense':Suspense,
    'hx:else-if':ElseIf,
    'hx:for':For,
    'hx:else':Else,
    'hx:if':If
  }
  function isHouxitBuiltinSymbolWidget(widget){
    for(const sym of values(BUILT_IN_WIDGETS)){
      if(widget === sym ) {
        return true;
      }
    }
    return false;
  }
  const CUSTOM_BUILT_IN_WIDGETS={};
  const CUSTOM_BUILT_IN_WIDGETS_STORE=new Map();
  function isCustomBuiltinSymWidget(widget){
    for(const [ sym, factory ] of values(BUILT_IN_WIDGETS)){
      if(widget === sym ) {
        return true;
      }
    }
  }
  function isBuiltinWidget(w){
    return isHouxitBuiltinSymbolWidget(w) || isCustomBuiltinSymWidget(w);
  }
  function getBuiltinWidget(name){
    
  }
  const $buildHx_ElementKey=Symbol()//saving the $buildHx_ElementKey key while passing widget to houxit build.
  const widgetSpecialAttrProps = new Set([ dir$$__render, $$$context ]);
  const isSelfRecursiveWidget=build=> isHouxitBuild(build) && build[$$$ownProperties].isSelfRecursive === (true);
  const isSpecProp = prop => widgetSpecialAttrProps.has(prop);
  const isBuiltinBlocks=block=>_makeMap_("if,else,else-if,for,const,class,new,debugger,html,await", block);
  const isBuiltinVoidBlocks=block=>_makeMap_("else,else-if,const,new,debugger,html,await", block);
  function is_rerender(self){
    return isHouxitBuild(self) && isTrue(self[$$$operands].initializedRender);
  }
  function createRenderFN(self, fn){
    if(!isPFunction(fn)){
      debugHandler(`parameter 2 of "createRenderFN" macro expects a plain Function`);
      return pass
    }
    let callback=Function('self', 'fn',`
      return function renderClass(instance, updated, forceFragment){
        return fn(self);
      }
    `)
    callback = callback(self, fn);
    callback[$$renderClass]=true;
    return callback;
  }
  const isRenderClass=render=>isPFunction(render) && render.name === "renderClass" && render[$$renderClass];
  const $passKey=Symbol()
  function pass(){}
  pass[$passKey]=true;
  function isContextMethodString ( self , hx_Element , str ){ 
    return ((isValidIdentifier(str) || object_Has_Path(self.__public_model__, str)) || isTrue(hx_Element && object_Has_Path(hx_Element.LabContext||{}, str) || isFNString(str)));
  }
  const isIfKey=key=>/^\$\$if[\w|$ ]*$/.test(key);
  const isElseIfKey=key=>/^\$\$else-if[\w$| ]*$/.test(key);
  const isElseKey=key=>/^\$\$else[\w$| ]*$/.test(key);
  const isForKey=key=>/^\$\$for[\w_$| ]*$/.test(key);
  function read(fn){
    return unToken(isFunction(fn) ? fn() : fn );
  }
  function isElementType(element, type){
    if(type === 'text') {
      return IS_TEXT_NODE(element);
    }
    return isNativeElement(element) && IS_ELEMENT_NODE(element) && element.localName === type;
  }
  const rawObjectStoreMap=new WeakSet();
  function _markRaw(obj){
    if(isPrimitive(obj)){
      debugHandler(`Non mutatable values been marked as raw:: "${typeof obj}" cannot be set to raw data to hide from reactive effect assembling`);
      return obj;
    }
    if(isPrimitive(obj) || isRaw(obj)) {
      return obj;
    }
    rawObjectStoreMap.add(obj)
    return obj;
  }
  function markRaw(obj){
    return _markRaw(obj);
  }
  function _isRaw(obj){
    if(isPrimitive(obj)) {
      return false;
    }
    return rawObjectStoreMap.has(obj);
  }
  function isRaw(obj){
    return _isRaw(obj);
  }
  function getCharcodes(value){
    const record=[];
    let index=0
    for( let char of value){
      record.push(char.codePointAt(0))
      index++
    }
    return record;
  }
  function campareStrings(value, data){
    const valCP=getCharcodes(value)
    const datCP=getCharcodes(data)
    return deepEqualityCheck(valCP, datCP)
  }
  function memMove(value, deep){
    return _makeCloneVersion(...arguments);
  }
  const isCollection=item=>validateType(item, [Array, Set, Tuple, Arguments ]);
  const isInvalidInjectorOpt=opt=>_makeMap_("build,preBuild", opt);
  const isAllowedComposersOpt=opt=>_makeMap_("postBuild,preMount,postMount,preUpdate,postUpdate,preDestroy,postDestroy,defineConfig,defineSignals,defineSlots,useTransmit,useReceiver,useContext,defineParams,onEffect,onTracked,onCatch,onSlotRender,onSlotEffect", opt);
  const adaptableComposers={
    params:defineParams,
    postBuild,
    preMount,
    postMount,
    preUpdate,
    postUpdate,
    preDestroy,
    postDestroy,
    onEffect,
    onCatch,
    onTracked,
    onSlotEffect,
    onSlotRender,
    buildConfig:defineConfig,
    signals:defineSignals,
    slots:defineSlots,
    transmit:useTransmit,
    receive:useReceiver,
    context:useContext,
    install:useInstall
  }
  const optionalAdapterrs="name,widgets,directives,mixins";
  const c_str="hx-comment";
  const isAllowedAdapterOpts=opt=>_makeMap_( keys(adaptableComposers).join(','), opt);
  function useInstall(callback){
    return _useInstallAdaptor(...arguments);
  }
  function _registerBuiltIn(options){
    const { name, instance, factory }=options;
    const modified=`${!name.startsWith('hx:') ? 'hx:' : '' }${name}`
    CUSTOM_BUILT_IN_WIDGETS[modified]=instance;
    CUSTOM_BUILT_IN_WIDGETS_STORE.set(instance, factory);
  }
  // global[PRIVATE_PROPERTY_KEY]._registerBuiltIn=_registerBuiltIn;
  function _useInstallAdaptor(callback){
    if(!validateCollectionArgs(arguments, {
      count:1,
      validators:[Function],
      name:"useInstall()"
    })) {
      return;
    }
    const self=getCurrentRunningEffect({
      name:'useInstall()'
    });
    if(!isHouxitBuild(self)) {
      return;
    }
    (self, callback);
    if(irresponsibleInstallWarn(self, callback, "useInstall()" )){
      self[$$$operands].installers_plugin.add(callback);
    }
    return true;
  }
  function irresponsibleInstallWarn(self, callback, ns){
    if(isInitialBuild(self)){
      debugHandler(`Irresponsible use of "${ns}" in an initBuild widget instance`, self, true);
      return false
    }
    return true
  }
  const isAdapterOpt=opt=>_makeMap_("params,preBuild", opt)
  function _useOptionsAdapter(instance={}){
    const response=validateCollectionArgs(arguments, {
      name:'useOptions',
      required:[true],
      count:1,
      validators:[ Object ]
    })
    if(!response) {
      return [ pass, pass ];
    }
    const self=getCurrentRunningEffect({
      name:'useOptions'
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"useOptions",
      validators:[Object],
      count:1
    } ))) {
      return {};
    }
    for(const [ key, value ] of entries(instance)){
      if(!isValidWidgetOption(key)) {
        self[$$$operands]._OPTIONS[key]=value
      }else if(isAllowedAdapterOpts(key)){
        adaptableComposers[key](value);
      }else if(isInvalidInjectorOpt(key)){
        debugHandler(`[useOptions options Error] invalid option "${key}" passed to options Adapter: not a valid  adapter.\n\nuse the options API macros instead`, self);
      }else{
        self[$$$core].opts[key]=value;
      }
    }
    return self
  }
  function useOptions(obj){
    return _useOptionsAdapter(...arguments);
  }
  function _mergeProps_(...props_list){
    const validators=[];
    props_list.forEach((object)=> validators.push(object));
    if(!validateCollectionArgs(props_list, {
      validators,
      name:'mergeProps',
      min:1
    })) {
      return  freeze();
    }
    const originProps ={};
    for(let [ index, attrs ] of props_list.entries()){
      transformGeneticPropsMerge(originProps, attrs);
    }
    return originProps;
  }
  function transformGeneticPropsMerge(origin, attrs){
    for(const [ key, item ] of entries(attrs)){
      if(hasOwn(origin, key)){ //check if key exists inorih  object
        if(isOnListener(key)) {
          const value =  (!isArray(origin[key]) ? [origin[key]] : origin[key] );
          const itemData = (arrayInverter( item )) ;
          origin[ key ] = [ ...value, ...itemData ];
        }else if(key === 'class'){
          const patchRecord= new Tuple();
          mapClassTypeTransform(origin[key], patchRecord);
          origin.class=mapClassTypeTransform(item, patchRecord);
        }else if(key === 'style'){
          origin.style={
            ...compileStyleProps(null, origin[key], {}),
            ...compileStyleProps(null, item, {})
          }
        }
      }else{ 
        if(key === 'class') {
          origin[key]=mapClassTypeTransform(item, new Tuple());
        }else if(key === 'style'){ 
          origin[key] = compileStyleProps(null, item, {});
        }else {
          origin[key]=item;
        }
      }
    }
    return origin;
  }
  function mergeProps(...props){
    return _mergeProps_(...props);
  }
  function _combineCallbacksCalls_(...handlers){
    function __merged_Methods_Calls(...args){
      for(const [ key, method ] of handlers.entries()){
        method.call(this, ...args);
      }
    }
    return function (...args){
      return __merged_Methods_Calls.call(this, ...args);
    }
  }
  function mergeMethods(...args){
    return  _combineCallbacksCalls_(...args);
  }
  const GLOBALS_ALLOWED ='Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol'
  const isGloballyAllowed = (key) =>/*@__PURE__*/ _makeMap_(GLOBALS_ALLOWED, key);
  const argumentsValidator={
    name:"",
    max:Infinity,//maximum arguments in number
    validators:[],//arguments type validators by array indexes
    self:undefined,//widget instance.
    min:0,//minimum arguments validatoe
    required:[],//required truthy values by array indexes,
    count:undefined,
    validator:()=>true
  }
  function validateCollectionArgs(args, config=argumentsValidator){
    args = [ ...args ];
    if(!isS(argumentsValidator, config)) {
      config={ 
        ...config, 
        ...argumentsValidator
      };
    }else {
      return true;
    }
    const { name, max, validators, self, required, min, count, validator }=config;
    /* a string 'name', number max, array validator, houxit self instance and indexes of required arguments */
    if(isNumber(max) && len(args) > max) {
      debugHandler(max === 0 ? `${name} Adapter does not accept any Argument` : `Parameter arguments received at ${name} macro exceds validator arguments maximum count\n\n"${name}()" expects only maximum of "${max}" arguments`, self);
      return false;
    }
    if( min && len(args) < min ) {
      debugHandler(`"${name}" function expects atleast "${min}" minimum of arguments\n\n${len(args)} received`, self);
      return false;
    }
    if(!isUndefined(count) && !len(args) === count){
      debugHandler(`"${name}" method expects only ${count} number of arguments\n${len(args)} passed`, self);
      return false;
    }
    if(!validator(...args)) {
      return false;
    }
    if(len(required)){
      for(let [ index, check ] of required.entries()){
        if((!len(args) >= Number(index) && isUndefined(args[index]))){
          debugHandler(`Argument at index ${index} of ${name} expects a required positional parameter\n\nparameter not provided or is undefined :: use "null" instead if you tend to skip or not context an argument value `, self);
          return false;
        }
      }
    }
    if(isArray(validators) && len(validators) && len(args)){
      for(let [ key, item ] of args.entries()){
        if(!key > len(validators)) {
          break;
        }
        const validator = validators[key] || Any ;
        let response=validateType(item, validator )
        if(isFalse(response)) {
          debugHandler(`unexpected argument value type received at ${key} index of the "${name}" adapter\n\nInvalid input type`, self);
          return false;
        }
      }
    }
    return true
  }
  const objectPropsValidator={
    name:"",
    self:undefined,//widget instance scope
    props:{},
  }
  const validatorProps={//internal validators default
    type:undefined,
    required:false,
    default:undefined,
  }
  function validatePropsInput( value, config){
    if(!isS(config, objectPropsValidator)) {
      config = {
        ...config,
        ...objectPropsValidator
      }
    }
    let { name, props, self,  } = config ;
    if(!isObject(config)){
      debugHandler(`configuration parameter at argument 2 of validatorProps expects a plain javascript object`);
      return;
    }else if(!isPObject(value) || hasOwn(value, 'props') && !isPObject(value.props)){
      debugHandler(`unexpected value received at "${name}, validation for ${isPObject(value) ? '{}.prop' : '{}'}" adapter\n\nInvalid input type :: expects a plain Object`, self);
      return false;
    }
    const propsSet = {};
    for(let [ param, ind ] of entries(config.props) ){
      if(!isPObject(param)){
        debugHandler(`Properties validator expects a plain object\n
        For the "${ind}" prop validation`);
        return false;
      }
      if(!isS(param, validatorProps) ) {
        param = {
          ...param,
          ...validatorProps
        }
      }
      if(!runObjectifiedParamsValidation(null, propsSet, [ value, param, ind ], 'prop')) {
        return false;
      }else if(!paramsValidationCircle(null, propsSet, [value, param, ind ],'prop')) {
        return false;
      }
    }
    return true;
  }
  function _validateCollection(collection, config){
    const response=validateCollectionArgs(arguments, {
      validators:[ [ Array, Set, Tuple, Arguments ], Object ],
      count:2,
      required:[true, true ],
      name:'validateCollection'
    })
    if(!response) {
      return false;
    }
    return validateCollectionArgs(collection, config );
  }
  function validateCollection( collection, config ){
    return _validateCollection(...arguments)
  }
  function validateProps(value, config){
    return validatePropsInput(...arguments )
  }
  function vb(self){
    if(!isHouxitBuild(self)) {
      return ;
    }
    return {
      operands:self[$$$operands],
      ownProperties:self[$$$ownProperties],
      compiler:self[$$$compiler],
      core:self[$$$core],
      register:self[$$$register],
      build:self.$build,
      model:self.__public_model__,
      proto:self.__proto__
    }
  }
  function deepTranformMacro(watchers){
    function _transform(value, config){
      const res=validateCollectionArgs(arguments, {
        min:1,
        max:2,
        validators:[Any, Object],
        name:'deepTranform'
      })
      if(!res) {
        return value;
      }
      return _createReactiveProxyCollectons(value,  watchers, config?.shallow || false, config || {});
    }
    return function deepTranform(value, config){
      return _transform(...arguments);
    }
  }
  function fineTuneFactoryTokenCompile(effective, watchers, config){
    const  callback =  config[$factoryTokenKey];
    delete config[$factoryTokenKey];
    function track(){
      return watchers.effectTrack();
    }
    function effect(){
      return  watchers.effectTrigger();
    }
    config = callback(track, effect, deepTranformMacro(watchers));
    const factoryObject=watchers.factoryObject;
    watchers.config=config;
    if(config.accessor){
      delete effective[watchers.accessor]
      watchers.accessor=config.accessor;
      effective[watchers.accessor]=undefined;
      delete config.accessor;
    }
    for (let desc of ['get', 'set'].values()){
      if(hasOwn(config, desc)) {
        if(!isFunction(config[desc])){
          debugHandler(`"${desc}" property descriptor at "factoryToken" is of an invalid data type\ntype of 'Function' expected`);
          return freeze();
        }
        factoryObject[desc]=config[desc];
        delete config[desc];
      }
    }
    return config;
  }
  function refLifeCircleHooksConfig(watchers, config){
    if(config.onTracked) {
      watchers.onTrackedHook=()=>{
        if(watchers.trackZoom) {
          return;
        }
        watchers.trackZoom=true;
        tick(config.onTracked.bind(this)).then(()=> watchers.trackZoom=false);
      }
    };
    if(config.onEffect) {
      watchers.onEffectHook=()=>{
        if(watchers.effectZoom) {
          return;
        }
        watchers.effectZoom=true;
        tick(config.onEffect.bind(this)).then(()=> watchers.effectZoom=false);
      }
    }
  }
  function Token_X_ReactiveEffectObject(){
    return assign( new ReactiveEffectObject(), { 
      observers : new Tuple(),
      subscribers:new Tuple(),
      self:undefined,
      superObs:undefined,
      onTrackedHook:pass,
      onEffectHook:pass,
      accessor:'data',
      effectTrack:pass,
      effectTrigger:pass,
      factoryObject:{},
      trackZoom:false,
      effectZoom:false,
      shallow:false,
      readonly:false,
      isComputed:false,
      refGenreId:undefined
    } );
  }
  function defineTokenRuntime_Carriers(effective, watchers, metrics){
    const { isFactoryToken, isComputed, readonly, shallow, accessor, config } = metrics ;
    function getter(){
      return unwrap(effective.data);
    }
    const descriptor = {};
    const dep=new Map();
    watchers.effectTrack=(value)=>{
      const depS=_subscribeToEffect(dep, accessor(), this, value);
      if(depS) {
        depS.get_data=getter;
      }
      watchers.onTrackedHook();
    };
    watchers.effectTrigger=()=>{
      _notifyEffectSubs(dep, accessor(), this);
      watchers.onEffectHook();
    }
    if(isFactoryToken){
      iterate(['get', 'set']).each(desc=>{
        if(hasOwn(watchers.factoryObject, desc)) {
          descriptor[desc]=watchers.factoryObject[desc];
        }
      });
    }else{
      descriptor.get= function(){
        const value=getter();
        watchers.effectTrack(value);
        return value;
      }
      descriptor.set=function(value, prop){
        if(readonly && !isReadonlyBypasser(value)){
          debugHandler(`Cannot reassign/mutate a "readonly" token value\n\n___MUTATION FAILED___\n........".${prop}" property assignment \n\nFailed writing to a readonly \n.........>>>bypassKey verification failure occured...`);
          return false;
        }
        value=unwrap(readonly ? value[bypassSymbol] : value) ;
        value = _createReactiveProxyCollectons(value, watchers, shallow, config );
        effective[accessor()]=value;
        watchers.effectTrigger();
        return true;
      }
    }
    return descriptor;
  }
  function _Houxit_Token__Constructor(effective, config ){
    const watchers= Token_X_ReactiveEffectObject()
    const accessor=()=>watchers.accessor;
    config =( isPObject(config) ? config :  {}) ;
    const isFactoryToken=hasOwn(config, $factoryTokenKey);
    if(isFactoryToken) {
      config = fineTuneFactoryTokenCompile.call(this, effective, watchers, config);
    }
    if(isS(config, freeze())) {
      return;
    }
    const reConfig={};
    for(let conf of ['shallow', 'readonly', 'computed'].values()){
      if(hasOwn(config, conf)) {
        reConfig[toCamelCase('is-'+conf)]=config[conf];
        delete config[conf];
      }
    }
    config = assign(assign({}, config), reConfig);
    const { readonly=false, isComputed=false, shallow=false } = config;
    refLifeCircleHooksConfig.call(this, watchers,  config );
    effective[accessor()]=_createReactiveProxyCollectons( effective[accessor()], watchers, shallow, config);
    this[refInternalEffectKey]=watchers;
    const descriptors = defineTokenRuntime_Carriers.call(this, effective, watchers, { 
      isFactoryToken, 
      isComputed, 
      readonly, 
      shallow, 
      accessor, 
      config
    });
    delete watchers.factoryObject;
    define(this, accessor() , descriptors );
    assign(watchers, {
      readonly,
      shallow,
      isComputed,
      updateFlags:0,
      cache:undefined
    });
    define(this, refGenreId, { 
      value: `[[[${ readonly ? "readonly" : "reactive" }__Token]]]`,
      enumerable
    });
  }
  class BaseToken {
    constructor(effective, config={} ){
      _Houxit_Token__Constructor.call(this, ...arguments );
    }
    isSameToken(ref){
      return isToken(ref) && isS(this, ref);
    }
    create(valueX, config){
      return token(...arguments);
    }
  }
  class reactive__Token extends BaseToken{
    constructor(token, config){
      super(...arguments)
    }
  }
  class readonly__Token extends BaseToken{
    constructor(token, config){
      super(...arguments)
    }
  }
  class Token extends BaseToken{
    constructor(token, config){
      super(...CustomTokenizerArgs(token, config));
    }
  }
  const CustomTokenizerArgs=(token, config)=>[ {
    data:token
  }, config];
  function _createReactiveProxyCollectons(iterable, watcher, shallow, config ){
    if(isDomSpecialConstructor(iterable) || isStream(iterable)  || isPrimitive(iterable) || shallow || isRaw(iterable)) {
      return iterable;
    }
    return _createStream(iterable, config, watcher );
  }
  function __Houxit__Tokenizer__Machine___( target , config={} ) {
    if(!isToken(target)) {
      target = preventX( new reactive__Token( {
        data:target
      }, config ));
    }
    return target;
  }
  function token(target, config){
    return __Houxit__Tokenizer__Machine___(...arguments);
  }
  function _factoryToken(callback){
    const response=validateCollectionArgs(arguments, {
      count:1,
      validators:[Function],
      name:"factoryToken"
    })
    if(!response) {
      return;
    }
    const target = new Token({ 
      data:undefined
    }, {
      [$factoryTokenKey]:callback//key used to recognise a custom ref by houxit
    });
    return target;
  }
  function factoryToken(callback){
    return _factoryToken(...arguments);
  }
  function traceBack(){
    const date = new Date();
    return createObj('TraceBack', {
      h:date.getHours(),
      m:date.getMinutes(),
      s:date.getSeconds(),
      ms:date.getMilliseconds()
    });
  }
  class Exception extends Error{
    constructor(msg, ...args){
      super(...args)
    }
  }
  const isException = ctruct => ctruct instanceof Exception;
  function raise(){
    
  }
  function isTuple(tp){
    return tp instanceof Tuple;
  }
  const arrSet=setData=>isSet( setData ) || isArgument(setData) || isArray(setData) ? [...setData] : isTuple(setData) ? setData.list() : setData ;
  function setValueIndex(setData , value){
    if(!isSet(setData) && !len(setData) && !setData.has(value)) {
      return NaN;
    }
    let index=0
    for(let data of setData.values()){
      if(data === value) {
        return index;
      }
      index++;
    }
  }
  const arrayMM="push,pop,shift,unshift,splice,sort,reverse,copyWithin,fill";
  const setMM="add,delete,clear";
  const mapMM="set,delete,clear";
  const tupleMM=setMM+",shift,unshift,splice,pop,extend,replace,prepend,arrange,exchange";
  const objectMM="define,delete";
  function getMutationArgs(data){
    return isArray(data) ? arrayMM : isSet(data) ? setMM : isMap(data) ? mapMM : isTuple(data) ? tupleMM : isPObject(data) ? objectMM : "";
  }
  function getAgentMutators(data, prop, model){
    const value=data;
    data=unwrap(data);
    let mutateArgs= getMutationArgs(data)+"write";
    const mutation_object=createObj('Mutatations');
    for(let name of mutateArgs.split(',').values()){
      function mutate(arg){
        let rv=undefined;
        if( validateType(data, [Set, Tuple,Array, Map])) {
          rv=data[name](arg);
        }else if(isPObject(data)){
          if('define' === name) {
            rv=define(data, ...arguments );
          }else if('delete' === name ) {
            delete data[arg];
            rv = true;
          }
        }
        let assV=rv;
        if((model || !isPrimitive(value) ) && prop  && name === 'write'){ 
          assV=set_Object_Value(isModelInstance(model) ? model : !isPrimitive(value) ? value : freeze() , prop, len(arguments) ? arg : data  );
        }
        return assV ;
      }
      mutate = Function('fn', `
        return function ${name === 'delete' ? 'del' : name }(value){
          return fn(...arguments);
        }
      `)(mutate);
      define( mutation_object, name, {
        value : mutate,
        enumerable
      });
    }
    return mutation_object;
  }
  function _useAgent_(data, ModelInstance){
    const dataRead = ()=> data;
    const response = validateCollectionArgs(arguments, {
      min:1,
      max:2,
      validators:[ Any, [Model]],
      name : 'useAgent'
    });
    if(!response) {
      return [ dataRead , pass];
    }
    if(isHouxitBuild(this) && !isChar(data)){
      debugHandler(`data path at positional argument 1 expects a string/symbol value of an existing model path\n\n.>...$useAgent`);
      return [ dataRead, pass ];
    }else if(isModelInstance(ModelInstance) && !isChar(data)){
      debugHandler(`data property at positional argument 1 of "useAgent" expects a string/symbol value\n\nMust be a model valid path`);
      return [dataRead, pass];
    }
    const self= isHouxitBuild(this) ? this : isModelInstance(ModelInstance) ? {
      __public_model__ : ModelInstance
    } : null;
    ModelInstance= self ? self.__public_model__ : null;
    if(self && !isHouxitBuild(self)) {
      delete self.__public_model__;
    }
    let prop=isModelInstance(ModelInstance) ? data : isToken(data) ? data[refInternalEffectKey].accessor : "";
    if( isModelInstance(ModelInstance) && !object_Has_Path(ModelInstance, prop)){
      debugHandler(`"${prop}" property is not a valid model property`, );
      return[dataRead, pass];
    }
    data = isModelInstance(ModelInstance) && exists(prop) ? _$runModelBind( ModelInstance , prop ||  "" ) : data;
    const mutateArgs= getAgentMutators(data, prop , ModelInstance);
    let defineCount = 0;
    const unwrappedGetter= ()=> read(data);
    function mutate(mutation){
      if(isPFunction(mutation) && defineCount < 1){
        defineCount++;
        define(mutateArgs, 'data', {
          get(){
            return unwrappedGetter();
          }
        });
      }
      if(isPFunction(mutation) ){
        try{
          mutation(mutateArgs);
        }catch(err){
          debugHandler(`Encountered an error during the call of the writer callback\n\n${err}`);
          return false;
        }
      }else if(!isPFunction(mutation)){
        set_Object_Value( isModelInstance(ModelInstance) ? ModelInstance : !isPrimitive(data) ? data : freeze() , prop, mutation  );
        return true;
      }
    }
    function reader(){
      return unwrappedGetter();
    }
    function writer(...args){
      return mutate(...args);
    }
    return [ reader, writer ] ;
  }
  function useAgent(data, ModelInstance){
    return _useAgent_(...arguments);
  }
  function WRITE(props){
    const response=validateCollectionArgs(arguments, {
      name:'$write',
      count:1,
      validators:[Object]
    });
    if(!response) {
      return false;
    }
    for (const [prop, value] of entries(props)){
      if(!object_Has_Path(this.__public_model__, prop)){
        debugHandler(`"${prop}" not found in model instance\n\n..............at......"$write"`, this, true);
        return false
      }
      this.__public_model__.$useAgent(prop)[1]( ({ write })=> write(value));
    }
    return true;
  }
  function getIterator(obj){
    return validateType(obj, [Set, Map, Array, Tuple ]) ? obj.entries() : isPObject(obj) ? entries(obj) : isIterator(obj) ? obj : [].entries() ;
  }
  class IterateController{
    constructor(config){
      const { value, type } = config;
      this.value=value;
      this._type=type;
    }
    value=undefined
    _type=""
  }
  const isIterateController=value=> value instanceof IterateController;
  function Continue(value=undefined){
    return new IterateController({
      value,
      type:'continue'
    });
  }
  function Break(value){
    return new IterateController({
      value,
      type:'break'
    });
  }
  function Return(value){
    return new IterateController({
      value,
      type:'return'
    });
  }
  function trigger_callback(value, callback, useOF){
    let index=0;
    let returnValue;
    if(isNumber(value)){
      for(let i=0;i<value;i++) {
        const response = callback(i, index);
        index++;
        if(isIterateController(response)){
          if(response._type === "continue") {
            continue;
          }else if(response._type === "break") {
            break;
          }else if(response._type === 'return') {
            return response.value;
          }
        }
      }
    }else{
      if(useOF){
        for(let [key, item] of getIterator(value)) {
          const response = callback(item, key, index);
          index++;
          if(isIterateController(response)){
            if(response._type === "continue") {
              continue;
            }else if(response._type === "break") {
              break
            }else if(response._type === 'return') {
              return response.value;
            }
          }
        }
      }else{
        for(let [ key, item ] in entries(value)) {
          const response = callback(key, item, index);
          index++;
          if(isIterateController(response)){
            if(response._type === "continue") {
              continue;
            }else if(response._type === "break") {
              break;
            }else if(response._type === 'return') {
              return response.value;
            }
          }
        }
      }
    }
    return returnValue;
  };
  function iterate_proto(value, type){
    if(!validateCollectionArgs(arguments, {
      name:'iterate',
      min:1,
      max:2,
      validators:[Object, String]
    })) return false;
    if(!type || !_makeMap_("of,in", type)) {
      type='of';
    }else if(!isIterable(value) && !isNumber(value)){
      debugHandler(`No iterable .value prop received at parameter 1 object of the "iterate" helper macro`);
      return false;
    }
    const useOF=type && type.trim() === 'of';
    function each(callback){
      return trigger_callback(value, callback, useOF);
    }
    each.each=each;
    return each;
  }
  function iterate(value, type){
    return iterate_proto(...arguments);
  }
  assign(iterate, {
    Continue,
    Break,
    Return
  });
  const refGenreId=Symbol("[[[GenreIDType]]]");
  const refInternalEffectKey=Symbol();
  function __createReadonlyToken__(value, config={}){
    const response=validateCollectionArgs(arguments, {
      name:'readonly',
      required:[true],
      min:1,
      max:2,
      validators:[ Any, Object ]
    });
    if(!response) return;
    const metrics = config.metrics || []
    if(hasOwn(config, 'metrics')) {
      delete config.metrics;
    }
    if(isReactiveToken(value)) {
      return toReadonly(value);
    }else if(isReadonly(value)) {
      return value;
    }
    let [ mutate=false, key ]=metrics;
    config.readonly=true;
    return preventX(new readonly__Token({
      data:value
    }, config ))
  }
  function readonly(value, config){
    return __createReadonlyToken__(...arguments);
  }
  function __createShallowToken__(value, config={}){
    const response=validateCollectionArgs(arguments, {
      name:'shallow',
      required:[true],
      min:1,
      max:2,
      validators:[ Any, Object ]
    });
    if(!response) {
      return;
    }
    const metrics = config.metrics || []
    if(hasOwn(config, 'metrics')) {
      delete config.metrics;
    }
    if(isToken(value) && !isShallow(value)) {
      return toShallow(value);
    }else if(isShallow(value)) {
      return value;
    }
    let [ mutate=false, key ]=metrics;
    config.shallow=true;
    return preventX(new reactive__Token({
      data:value
    }, config ));
  }
  function shallow(value, config){
    return __createShallowToken__(...arguments);
  }
  function isToken(value){
    return value instanceof BaseToken;
  }
  function unwrap(value){
    if(!isToken(value)) {
      return value;
    }
    return value[ value[refInternalEffectKey].accessor ];
  }
  function unToken(ref){
    return unwrap(ref);
  }
  function _toToken(object, path, config){
    const res=validateCollectionArgs(arguments, {
      min:2,
      max:3,
      validators:[[Object, Array], [String, Symbol], Object],
      name:'toToken',
      required:[true, true ]
    })
    if(!res || !object) {
      return;
    }
    return token(object[path], config);
  }
  function toToken(object, path){
    return _toToken(...arguments);
  }
  function isReactiveToken(value){
    return isToken(value) && value[refGenreId] === "[[[reactive__Token]]]";
  }
  function isReadonly(value){
    return isToken(value) && "[[[readonly__Token]]]" === value[refGenreId];
  }
  function isShallow(value){
    return isToken(value) && isTrue(value[refInternalEffectKey].shallow);
  }
  function isShallowReadonly(value){
    return isReadonly(value) && isShallow(value)
  }
  function isComputed(value){
    return isReadonly(value) && value[refInternalEffectKey].isComputed;
  }
  function toShallow(ref, config={}){
    if(!isShallow(ref)) {
      return shallow(unwrap(ref), config );
    }
    return ref;
  }
  function toReadonly(ref, config={}){
    if(!isReadonly(ref)) {
      return readonly(unwrap(ref), config );
    }
    return ref;
  }
  function cleanupSubscribers(subs){
    if(!len(subs)) {
      return;
    }
    if(validateType(subs, [ Set, Tuple ])) {
      subs.clear();
    }else if(isArray(subs)) {
      subs.splice(0);
    }
  }
  class readonlyBypasser {
    constructor(value=undefined){
      this[bypassSymbol]=value;
    }
  }
  function _isProxyStream(stream){
    const res=validateCollectionArgs(arguments, {
      count:1,
      name:'isStream'
    });
    if(!stream || !res && !validateType(stream, [Object, Set, Tuple, Map, Array])) {
      return false;
    }
    const ReactiveMap=stream[$$$StreamProxyKey];
    return hasOwn(stream, $$$StreamProxyKey) &&  isWeakMap(ReactiveMap) && isREffObj(ReactiveMap.get(stream));
  }
  function isStream(value){
    return _isProxyStream(...arguments);
  }
  function _isShallowStream_(stream){
    return isStream(stream) && stream[$$$StreamProxyKey].get(stream).shallow;
  }
  function isShallowStream(stream){
    return _isShallowStream_(...arguments);
  }
  function _isReadonlyStream(stream){
    return isStream(stream) && stream[$$$StreamProxyKey].get(stream).readonly;
  }
  function isReadonlyStream(stream){
    return _isReadonlyStream(stream);
  }
  function isShallowReadonlyStream(stream){
    return isShallowStream(stream) && isReadonlyStream(stream);
  }
  function genericStreamTransform(stream, config, types){
    if(isPrimitive(stream)){
      debugHandler(`Value Exception\nFailed to convert a primitive Value to a streamable object\n\nExpects a plain object or a collection`);
      return ;
    }else {
      types = new Tuple(...types);
      if(types.contains('readonly', 'shallow') && isShallowReadonlyStream(stream)) {
        return stream;
      }else if(types.has('readonly') && isReadonlyStream(stream)) {
        return stream;
      }else if(types.has('shallow') && isShallowStream(stream)) {
        return stream;
      }
    }
    if(isStream(stream)) {
      stream = stream[$$$StreamProxyKey].get(stream).origin
    }
    return _createStream(stream, {
      readonly : types.has('readonly'),
      shallow : types.has('shallow'),
      ...( !isPObject(config) ? {} : config  )
    });
  }
  function _toReadonlyStream(stream, config){
    return genericStreamTransform(stream, config, ["readonly"]);
  }
  function toReadonlyStream(stream, config){
    return _toReadonlyStream(...arguments)
  }
  function _toShallowStream(stream, config){
    return genericStreamTransform(stream, config, ["shallow"]);
  }
  function toShallowStream(stream, config){
    return _toShallowStream(...arguments);
  }
  function _toShallowReadonlyStream(stream, config){
    return dynamicStreamTransform(stream, config, ['readonly', 'shallow']);
  }
  function toShallowReadonlyStream(stream, config){
    return _toShallowReadonlyStream(...arguments);
  }
  const isReadonlyBypasser = bypasser=>bypasser instanceof readonlyBypasser;
  const bypassSymbol=Symbol("Readonly_Bypass_Symbol");
  const isBypassSymbol=sym=>sym === bypassSymbol;
  function useReadonlyBypasser(parent, key, value){
    return set_Object_Value(parent, key, new readonlyBypasser(value) );
  }
  function objFreeze(obj, deep=false){
    if(!validateType(obj, [Object, Array, Tuple])) {
      return obj;
    }
    if(isTuple(obj)) {
      return obj.freeze();
    }
    if(isTrue(deep)){
      for (let [key, value] of getIterator(obj)){
        obj[key]=objFreeze(value, true);
      }
    }
    return isTuple(obj) ? obj : freeze(obj);
  }
  function _trackEffectDeps(fn, config){
    if(!validateCollectionArgs(arguments, {
      min : 1,
      max: 2,
      validators:[Function, Object],
      name:'trackEffectDeps'
    })) {
      return [];
    }
    const effect=_createEffectBase(fn);
    effectRunner(effect);
    function reRunEffect(){
      return effect.runEffect()
    }
    function getValue(){
      return effect.value;
    }
    return [[ ...arrSet(effect.dependencies) ], getValue, reRunEffect];
  }
  function trackEffectDeps(fn, config){
    return _trackEffectDeps(...arguments);
  }
  function _runGlobalEffectHook(fn, config){
    const response=validateCollectionArgs(arguments, {
      name:'effectHook',
      required:[true, false ],
      min:1,
      max:2,
      validators:[ Function, Object ]
    })
    if(!response) {
      return pass;
    }
    const self=getCurrentRunningEffect({
      name:'effectHook'
    });
    if(!self ){
      debugHandler(`effectHook called out of scope`);
      return pass;
    }
    return EffectAdapterHook.call(self, ...arguments);
  }
  function effectHook(fn, config){
    return _runGlobalEffectHook(...arguments);
  }
  function EffectAdapterHook(fn, config={}){
    if(!validateCollectionArgs(arguments, {
      name:"effectHook",
      validators:[Function, Object],
      min:1,
      max:2,
      required:[true]
    } )) {
      return;
    }
    config.initial=false;
    const effect=_createEffectBase(function(){
      return fn();
    }, this );
    const { value, dependencies } = effectRunner(effect);
    const stoper=EffectObserver.call(this, dependencies, fn, config, effect);
    function stopEffect(callback){
      if(len(arguments) ) {
        if(isPFunction(callback)){
          stoper(callback);
        }
      }else {
        stoper();
      }
    }
    return function stopEffect(...args){
      return stopEffect(...args);
    }
  }
  class Type{
    constructor(type, validator){
      this.type=type;
      this.validator=validator;
    }
  }
  class AnyType extends Type{
    constructor(){
      super([], (value)=> true);
    }
  }
  class NoneType extends Type{
    constructor(){
      super([], (value)=> isNull(value) || isEmptyStr(value));
    }
  }
  const isBaseType=type=>type instanceof Type;
  const Any=new AnyType();
  const None=new NoneType();
  const isAnyType=data=>validateType(data, AnyType);
  const isNoneType=data=>validateType(data, NoneType);
  const $private_prop=Symbol();
  class ClassFunctionType extends Type {
    constructor(){
      super([Function], (value)=> isClass(value));
    }
  }
  const Class = new ClassFunctionType();
  class ArgumentType extends Type{
    constructor(){
      super([], (value)=> isArgument(value));
    }
  }
  const Arguments = new ArgumentType();
  class CollectionType extends Type{
    constructor(){
      super([Array, Set, Arguments, Tuple], (value)=> isCollection(value));
    }
  }
  const Collections = new CollectionType();
  function getType(value){
    return isArray(value) ? 'array' : isDate(value) ? 'date' : isSet(value) ? 'set' : isMap(value) ? 'map' : isTuple(value) ? 'tuple' : value instanceof AnyType ? 'any' : value instanceof NoneType ? 'none' : isToken(value) ? '_'+isReactiveToken(value) ? 'reactive' : 'readonly' +'__Token' :typeof  value;
  }
  class BaseTupleStream extends Tuple{
    constructor(){
      super(...arguments);
    }
  }
  class BaseArrayStream extends Array{
    constructor(array=[]){
      const isSVA=len(array) === 1 && isNumber(array[0]);
      if(isSVA) {
        array.push(undefined);
      }
      if(len(arguments) > 1){
        array=arrSet(arguments);
      }else if(isCollection(array)){
        array=arrSet(array);
      }else if(len(arguments)){
        const arr=[];
        arr.push(array);
        array=arr;
      }
      super(...array);
      if(isSVA) {
        this.pop();
      }
    }
  }
  class BaseSetStream extends Set{
    constructor(){
      super(...arguments);
    }
  }
  class BaseWeakSetStream extends WeakSet{
    constructor(wSet){
      super();
      this[$private_prop]=wSet;
      for(let n of ['has','add','delete'].values()){
        this[n]=wSet[n];
      }
    }
  }
  class BassMapStream extends Map{
    constructor(){
      super(...arguments);
    }
  }
  class BaseWeakMapStream extends WeakMap{
    constructor(wMap){
      super();
      this[$private_prop]=wMap;
      for(let n of ['get','set','has','delete','getOrInsert','getOrInsertComputed'].values()){
        this[n]=wMap[n];
      }
    }
  }
  function customTypeReader(type){
    //for reading names of custom dataTypes;
  }
  function BaseDict(...args){
  }
  BaseDict.prototype.set=function set(key, value){
    
  }
  function isFrozenWarn(isFrozen, action, type){
    if(isFrozen){
      debugHandler(`cannot perfom ${action} on ${type}\n\ninstance may have been frozen or sealed from future possible mutations`);
      return false;
    }
    return true;
  }
  class TupleSizeOverride{
    value = 0;
    constructor(value){
      this.value=Number(value);
    }
  }
  const isTSO=asset=>asset instanceof TupleSizeOverride;
  function setTupleSize(value){
    return new TupleSizeOverride(value);
  }
  function TupleConstructorManager(args){
    this[$$tupleStore]={
      array:[],
      unique:new Set(),
      isFrozen:false
    };
    let size=0;
    define(this, 'size', {
      get(){
        return size;
      },
      set(NS){
        if(!isTSO(NS)){
          debugHandler(`Mutation Exception\nCannot mutate the size property of a Tuple Object\n`);
          return false;
        }
        size=NS.value;
        return true;
      }
    })
    let index=0;
    for(const item of args.values()){
      if(!this[$$tupleStore].unique.has(item)){
        this[$$tupleStore].unique.add(item);
        this[$$tupleStore].array.push(item)
        instanciate_tuple_indexes(this);
        index++
      }
    }
    this.size=setTupleSize(len(this[$$tupleStore].array));
  }
  function instanciate_tuple_indexes(tuple){
    const oldListKeys=keys(tuple);
    const newList=tuple.list();
    for( const [ key, value ] of newList.entries()){
      if( value !== tuple[key] || key > len(this)-1){
        tuple[key]=value;
      } 
    }
    let ind = 0;
    for (let key of oldListKeys.values()){
      key=Number(key);
      if(key !== ind ) {
        tuple[key]=ind;
      }
      if(ind > len(newList)-1) {
        delete tuple[ind];
      }
      ind ++;
    }
  }
  function BaseTuple(...args){
    TupleConstructorManager.call(this, args );
  }
  function Tuple_filter(fn){
    if(!validateCollectionArgs(arguments, {
      count:1,
      validators:[Function],
      name:"Tuple.filter()"
    })) {
      return;
    }
    return new Tuple( ...this.list().filter(fn) );
  }
  BaseTuple.prototype.filter=function filter(fn){
    return Tuple_filter(...arguments);
  }
  BaseTuple.prototype.find=function find(fn){
    return this.list().find(...arguments)
  }
  BaseTuple.prototype.shift=function shift(){
    if(!(isFrozenWarn(this[$$tupleStore].isFrozen, 'Tuple.shift()', 'tuple'))) {
      return false;
    }
    let firstValue;
    if(this.size > 0){
      firstValue=this[$$tupleStore].array.shift();
      this[$$tupleStore].unique.delete(firstValue);
      this.size=setTupleSize(this.size-1);
      instanciate_tuple_indexes(this);
    }
    return firstValue;
  }
  BaseTuple.prototype.freeze=function freeze(deep=false){
    this[$$tupleStore].array=objFreeze(this[$$tupleStore].array, deep);
    this[$$tupleStore].isFrozen=true;
    return this;
  }
  BaseTuple.prototype.values=function values(){
    return this.list().values();
  }
  BaseTuple.prototype.keys=function keys(){
    return this.list().keys()
  }
  BaseTuple.prototype.entries=function entries(){
    return this.list().entries()
  }
  BaseTuple.prototype.isTuple=function(tuple){
    return isTuple(tuple);
  }
  BaseTuple.prototype.has=function has(value){
    return this[$$tupleStore].unique.has(value)
  }
  BaseTuple.prototype.indexOf=function indexOf(value){
    return len(arguments) && this.has(value) ? this.list().indexOf(value) : -1 ;
  }
  BaseTuple.prototype.add=function add(value){
    if(isFalse(isFrozenWarn(this[$$tupleStore].isFrozen, 'Tuple.add()', 'tuple'))) {
      return false;
    }
    if(len(arguments) && !this.has(value)){
      this[$$tupleStore].unique.add(value);
      this[$$tupleStore].array.push(value);
      this.size=setTupleSize(this.size+1);
      instanciate_tuple_indexes(this);
      return true;
    }
    return false;
  }
  BaseTuple.prototype.delete=function Tuple_delete(value){
    if(isFalse(isFrozenWarn(this[$$tupleStore].isFrozen, 'Tuple.delete()', 'tuple'))) {
      return false;
    }
    if(this.has(value)) {
      return this.splice(this.indexOf(value), 1);
    }
    return false;
  }
  BaseTuple.prototype.replace=function replace(oldV, newV){
    if(isFalse(isFrozenWarn(this[$$tupleStore].isFrozen, 'replace()', 'tuple'))) {
      return false;
    }
    if(!this.has(oldV) && this.has(newV)) {
      return false;
    }
    return this.splice(this.indexOf(oldV), 1, newV );
  }
  BaseTuple.prototype.prepend=function prepend(value){
    if(isFalse(isFrozenWarn(this[$$tupleStore].isFrozen, 'Tuple.prepend()', 'tuple'))) {
      return false;
    }
    if(!this.has(value)) {
      this[$$tupleStore].array.unshift(value)
      this[$$tupleStore].unique.add(value);
      this.size=setTupleSize(this.size+1);
      instanciate_tuple_indexes(this);
      return true;
    }
    return false;
  }
  BaseTuple.prototype.splice=function splice(start, deleteCount, ...insertElements){
    if(isFalse(isFrozenWarn(this[$$tupleStore].isFrozen, 'Tuple.splice()', 'tuple'))) {
      return false;
    }
    if(!len(arguments)) {
      return false;
    }
    if(!validateCollectionArgs(arguments, {
      min:0,
      max:Infinity,
      validators:[Number, Number],
      name:"Tuple.splice()",
    })) {
      return false;
    }
    if(len(arguments)>1 && (start + deleteCount-1) > this.size){
      debugHandler(`deleteCount argument 2 count at "Tuple.splice()" exceeds the tuple size`);
      return false;
    }
    if(len(arguments) === 1){
      for(const [ index, value ] of this.list().entries()){
        if(index >= start){
          this[$$tupleStore].unique.delete(value);
        }
      }
      this[$$tupleStore].array.splice(start);
    }else if(len(arguments) === 2){
      let tuple_delete_count=deleteCount;
      for(const [ index, value ] of this.list().entries()){
        if(index >= start && tuple_delete_count > 0){
          this[$$tupleStore].unique.delete(value);
          tuple_delete_count--;
        }
      }
      this[$$tupleStore].array.splice(start, deleteCount);
    }else if(len(insertElements)){
      let tuple_delete_count=deleteCount;
      for(const [ index, value ] of this.list().entries()){
        if(index >= start && tuple_delete_count > 0){
          this[$$tupleStore].unique.delete(value);
          tuple_delete_count--;
        }
      }
      for(const value of insertElements.values()){
        if(this.has(value)) {
          insertElements.splice(insertElements.indexOf(value), 1);
        }else {
          this[$$tupleStore].unique.add(value);
        }
      }
      if(len(insertElements)) {
        this[$$tupleStore].array.splice(start, deleteCount, ...insertElements );
      }
    }
    this.size=setTupleSize(len(this.list()));
    instanciate_tuple_indexes(this);
    return true;
  }
  BaseTuple.prototype.map=function map(callback){
    return this.list().map(callback);
  }
  BaseTuple.prototype.exchange=function exchange(value1, value2){
    if(!(this.has(value1) && this.has(value2))){
      debugHandler(`argument ${!this.has(value1) ? "1" : "2"} not a member of this tuple`);
      return false;
    }
    const index1=this.indexOf(value1);
    const index2=this.indexOf(value2);
    this[$$tupleStore].array[index1]=value2;
    this[$$tupleStore].array[index2]=value1;
    instanciate_tuple_indexes(this);
    return true;
  }
  BaseTuple.prototype.arrange=function arrange(sort, start=0){
    if(!validateCollectionArgs(arguments, {
      name:"Tuple.arrange()",
      min:1,
      max:2,
      validators:[Collections, Number]
    })) {
      return false;
    }else if(!len(sort) && !this.size) {
      return;
    }else if(start > (this.size || 1)-1){
      debugHandler(`Tuple.arrange()'s "start" argument @parameter 2 exceeds the tuple size\n"${start}"`);
      return false;
    }
    const flowTuple=new Tuple();
    const sortSet=new Set(arrSet(sort));
    this.forEach(val=>{
      if(!sortSet.has(val)) {
        this.delete(val);
      }
    });
    for(let [ ind, sort_value ] of getIterator(sort)){
      if(this.has(sort_value)) {
        this[$$tupleStore].array.splice(this.indexOf(sort_value), 1);
      }else {
        this[$$tupleStore].unique.add(sort_value);
      }
      flowTuple.add(sort_value)
    }
    this[$$tupleStore].array.splice(start, len(flowTuple), ...arrSet(flowTuple));
    instanciate_tuple_indexes(this);
    this.size=setTupleSize(len(this.list()));
    return true;
  }
  BaseTuple.prototype.clear=function clear(){
    if(isFalse(isFrozenWarn(this[$$tupleStore].isFrozen, 'Tuple.clear()', 'tuple'))) {
      return false;
    }
    return this.splice(0);
  }
  BaseTuple.prototype.pop=function pop(){
    if(isFalse(isFrozenWarn(this[$$tupleStore].isFrozen, 'Tuple.pop()', 'tuple'))) {
      return false;
    }
    if(this.size <= 0) {
      return undefined;
    }
    const value = this[$$tupleStore].array.pop();
    this[$$tupleStore].unique.delete(value);
    this.size=setTupleSize(len(this.list()));
    instanciate_tuple_indexes(this);
    return value;
  }
  BaseTuple.prototype.at=function at(index){
    if(!validateCollectionArgs(arguments, {
      count:1,
      validators:[Number],
      name:"Tuple.at()"
    })) {
      return;
    }
    index=Number(index);
    if(isNaN(index)){
      debugHandler(`index passed to Tuple.at() is not a number`);
      return undefined;
    }else if(index < 0 && index > this.size){
      debugHandler(`index exceded Tuple limit.........\n"at()"`);
      return null
    }
    return this.list()[index];
  }
  BaseTuple.prototype.list=function list(){
    return [ ...this[$$tupleStore].array ] ;
  }
  BaseTuple.prototype.extend=function extend(collection){
    const res=validateCollectionArgs(arguments, {
      count:1,
      validators:[Collections],
      name:'Tuple.extend()'
    })
    if(!res) {
      return false;
    }
    for(let [index, value] of getIterator(collection)){
      this.add(value);
    }
    return true;
  }
  BaseTuple.prototype.forEach=function forEach(callback){
    return this.list().forEach(...arguments);
  }
  BaseTuple.prototype.contains = function contains(...args){
    if(!len(args)) {
      return false;
    }
    for (let item of args.values()){
      if(!this.has(item)) {
        return false;
      }
    }
    return true;
  }
  const effectTuple= new Tuple();
  var previousRunningEffectBuild = undefined ;
  var currentRunningEffectBuild = undefined ;
  var ancestorRunningEffect = new Tuple() ;
  function installCurrentRunningEffect(self){
    effectTuple.add(self);
    if(isHouxitBuild(currentRunningEffectBuild)){
      previousRunningEffectBuild = currentRunningEffectBuild;
    }
    currentRunningEffectBuild = self;
  }
  function reinstatePreviousRunningEffect(){
    if(previousRunningEffectBuild) {
      currentRunningEffectBuild = previousRunningEffectBuild;
    }else {
      currentRunningEffectBuild = undefined;
    }
  }
  function getCurrentRunningEffect(binding){
    const self=currentRunningEffectBuild;
    const { name, silently } = binding;
    if(!isHouxitBuild(self)){
      if(!silently) {
        debugHandler(`"${name}()" Adapter method cannot be called outside of a build widget or function widget body.\n\n"${name}()" may have been called from an asynchronous thread from the origin or outside of the build option method/function based widget\n\nCheck if the widget instance build method is an arrow function`);
      }
      return false;
    }
    return self;
  }
  const activeRunningEffects=new Tuple();
  class Dependency{
    effects=new Tuple();
    property=undefined
    constructor(prop){
      this.property=prop;
    }
    subscribe(){
      activeRunningEffects.list().toReversed().forEach(effect=>{
        effect.depend(this);
        this.effects.add(effect);
      });
    }
    notifyEffects(){
      this.effects.forEach(effect=>effect.notify());
    }
  }
  function reduceEffects(leadEffect, ...effs){
    effs=effs.filter(e=>isEffect(e));
    if(!len(effs)){
      return;
    }
    const strategy={
      deps:new Tuple,
      run:new Tuple,
      callbacks:new Tuple
    }
    for(let effect of effs.values()){
      
      // for(let N of ['depend','notify','attachCallback','endLife'].values()){
      //   effect.prototype[N]=(function(...args){
      //     return effect.prototype[N].call(this, ...args);
      //   }).bind(leadEffect);
      //   leadEffect.callbacks.extend(effect.callbacks);
      //   leadEffect.dependencies.extend(effect.dependencies);
      // }
    }
    return leadEffect;
  }
  class HouxitEffectFrame{
    effect=undefined
    self=undefined
    callbacks=new Tuple
    value=undefined
    active=true;
    followers=new Tuple
    notified=false
    constructor(effect, self){
      assign(this, {
        effect,
        self,
      });
    }
    dependencies=new Tuple
    notified=false
    depend(dependency){
      this.dependencies.add(dependency);
    }
    notify(isReducer=false){
      if(this.notified || (this.reducer && this.reducer.notified && !isReducer)){
        return;
      }
      this.notified=true;
      this.schedule();
    }
    schedule(){
      if(isHouxitBuild(this.self)){
        for(let [ callback, type, flush ] of this.callbacks.values()){
          if(type==='effect'){
            this.self[$$$operands]._OBSERVERS.add([callback, flush]);
          }else if(type === 'priority'){
            this.self[$$$compiler].VN_Tree.priority.add(callback);
          }
        }
        this.self.__public_model__.$pushEffect().then(()=> {
          this.propagate();
          this.notified=false
        });
      }else{
        if(this.flushType && this.flushType==='sync'){
          this.callbacks.forEach(([fn])=>fn?.());
          this.propagate();
          this.notified=false;
        }else{
          tick(()=>{
            this.callbacks.forEach(([fn])=>fn?.());
            this.propagate();
            this.notified=false;
          });
        }
      }
    }
    attachCallback(callback, type='effect', flush='sync'){
      const { self } = this;
      if(!this.reducer && !len(this.dependencies)){
        return;
      }
      this.callbacks.add([callback, type, flush]);
    }
    flushDeps(){
      this.dependencies.forEach(dep=>{
        dep.effects.delete(this)
      });
      this.dependencies.clear();
    }
    runEffect(value){
      if(this.reducer && !this.r_flag){
        return this;
      }
      this.flushDeps();
      return effectRunner(this, value);
    }
    endLife(){
      this.flushDeps();
      this.callbacks.clear();
      this.effect=pass;
      this.active=false;
      if(this.reducer){
        this.reducer.followers.delete(this);
      }
      this.__proto__={}
    }
    follow(me){
      this.followers.add(me);
    }
    propagate(){
      this.followers.forEach(f=>f.notify(true));
    }
  }
  const isDependency=subscriber=>subscriber instanceof Dependency;
  const isEffect=effect=>effect instanceof HouxitEffectFrame;
  function _createEffectBase(effect, self){
    return new HouxitEffectFrame(effect, self);
  }
  function createEffectFrame(effect){
    return _createEffectBase(effect, null);
  }
  function effectRunner(effect, ...args){
    if(!activeRunningEffects.has(effect)){
      activeRunningEffects.add(effect);
    }
    const value=effect.effect(...args);
    effect.value=value;
    activeRunningEffects.delete(effect);
    return effect;
  }
  function scopeEffectHook(fn, config){
    return _createEffectHookGlobal(...arguments);
  }
  function scopeObserve(deps, fn, conf){
    return _createObserverInstance(...arguments);
  }
  function easingConstructor(value){
    let css, fn, name;
    if(value && !validateType(value, [Function, String, Object])){
      debugHandler(`easing Function argument 1 receives an invalid argument`);
      return;
    }
    if(isPObject(value)){
      ({ css, fn, name } = value);
      if(css && !isString(css)){
        debugHandler(`easing Function "css" property receives an invalid argument...\nexpects a css valid easing value`);
        css=undefined;
      }
      if(fn && !isPFunction(fn)){
        debugHandler(`easing Function "fn" property receives an invalid argument...\nexpects a Function return a valid easing value`);
        fn = undefined;
      }
    }else if(isString(value)){
      css = value;
    }else if(isPFunction(value)){
      fn=value;
    }
    if(!fn && css && css.startsWith('cubic-bezier')){
      fn=__cubicBezier(css);
    }
    assign(this, {
      css,
      fn,
      name
    });
  }
  class HouxitEasing{
    css=undefined
    fn=undefined
    name=undefined
    constructor(value){
      easingConstructor.call(this, value);
    }
  }
  const steps = (count = 1, direction = 'end') => createEasing({
    css: `steps(${count}, ${direction})`,
    fn: t => {
      if(direction === 'start'){
        return Math.ceil(t * count) / count;
      }  
      return Math.floor(t * count) / count;
    }
  });
  const reverse = easing => createEasing({
    css: easing.css,
    fn: t => easing.fn(1 - t)
  });
  const mirror = easing => createEasing({
    css: easing.css,
    fn: t => {
      return t < 0.5 ? easing.fn(t * 2) : easing.fn(2 - t * 2);
    }
  });
  const jsEasingMap={
    linear : t => t,
    easeIn : t => t * t,
    easeOut : t => 1 - (1 - t) * (1 - t),
    easeInOut : t => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2,
    cubicIn : t => t * t * t,
    cubicOut : t => 1 - Math.pow(1 - t, 3),
    cubicInOut : t => t < 0.5  ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
    quartIn : t => t ** 4,
    quartOut : t => 1 - Math.pow(1 - t, 4),
    quartInOut : t => t < 0.5 ? 8 * t ** 4 : 1 - Math.pow(-2 * t + 2, 4) / 2,
    quintIn : t => t ** 5,
    quintOut : t => 1 - Math.pow(1 - t, 5),
    quintInOut : t => t < 0.5 ? 16 * t ** 5 : 1 - Math.pow(-2 * t + 2, 5) / 2,
    sineIn : t => 1 - Math.cos((t * Math.PI) / 2),
    sineOut : t => Math.sin((t * Math.PI) / 2),
    sineInOut : t => -(Math.cos(Math.PI * t) - 1) / 2,
    expoIn : t => t === 0 ? 0 : Math.pow(2, 10 * t - 10),
    expoOut : t =>  t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
    expoInOut : t => {
      if (t === 0 || t === 1) {
        return t;
      }
      return t < 0.5 ? Math.pow(2, 20 * t - 10) / 2 
        : (2 - Math.pow(2, -20 * t + 10)) / 2;
    },
    circIn : t =>  1 - Math.sqrt(1 - t * t),
    circOut : t =>Math.sqrt(1 - Math.pow(t - 1, 2)),
    circInOut : t =>t < 0.5  ? (1 - Math.sqrt(1 - Math.pow(2 * t, 2))) / 2
      : (Math.sqrt(1 - Math.pow(-2 * t + 2, 2)) + 1) / 2,
    backIn : t => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return c3 * t * t * t - c1 * t * t;
    },
    backOut : t => {
      const c1 = 1.70158;
      const c3 = c1 + 1;
      return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
    },
    springSoft:t => {
      return 1 - ( Math.cos(t * 3 * Math.PI) * Math.exp(-4 * t));
    },
    backInOut : t => {
      const c1 = 1.70158;
      const c2 = c1 * 1.525;
      return (t < 0.5 ? (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2
        : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2)
    },
    bounceOut : t => {
      const n1 = 7.5625;
      const d1 = 2.75;
      if (t < 1 / d1) {
        return n1 * t * t;
      } else if (t < 2 / d1) {
        return n1 * (t -= 1.5 / d1) * t + 0.75;
      } else if (t < 2.5 / d1) {
        return n1 * (t -= 2.25 / d1) * t + 0.9375;
      } else {
        return n1 * (t -= 2.625 / d1) * t + 0.984375;
      }
    },
    spring:t => {
      return 1 - (Math.cos(t * 4.5 * Math.PI) * Math.exp(-6 * t));
    },
    bounceIn : t => 1 - bounceOut(1 - t),
    bounceInOut : t =>(t < 0.5 ? (1 - bounceOut(1 - 2 * t)) / 2
      : (1 + bounceOut(2 * t - 1)) / 2),
    elasticIn : t => {
      const c4 = (2 * Math.PI) / 3;
      if (t === 0 || t === 1) {
        return t;
      }
      return -Math.pow(2, 10 * t - 10) *  Math.sin((t * 10 - 10.75) * c4);
    },
    elasticOut : t => {
      const c4 = (2 * Math.PI) / 3;
      if (t === 0 || t === 1) {
        return t;
      }
      return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
    },
    elasticInOut : t => {
      const c5 = (2 * Math.PI) / 4.5;
      if (t === 0 || t === 1) {
        return t;
      }
      return t < 0.5 ? -(Math.pow(2, 20 * t - 10) *  Math.sin((20 * t - 11.125) * c5)) / 2  : (Math.pow(2, -20 * t + 10) *
      Math.sin((20 * t - 11.125) * c5)) / 2 + 1;
    },
    ease: t => {
      return t < 0.5 ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
    },
    stepStart: t => t > 0 ? 1 : 0,
    stepEnd:t => t < 1 ? 0 : 1,
    smoothstep:t => t * t * (3 - 2 * t),
    smootherstep:t => t * t * t * (t * (6 * t - 15) + 10),
    anticipate:t => {
      const s = 1.70158 * 1.5;
      return t * t * ((s + 1) * t - s);
    },
    overshoot: t => {
      const s = 1.70158;
      t -= 1;
      return t * t * ((s + 1) * t + s) + 1;
    },
    recoil:t => {
      return Math.sin(t * Math.PI * 2) * (1 - t) * 0.2 + t;
    },
    snap:t => {
      return t < 0.9 ? Math.pow(t / 0.9, 3) : 1;
    },
    springHeavy:t => {
      return 1 - (Math.cos(t * 6 * Math.PI) * Math.exp(-8 * t) );
    }
  }
  const cssEasingMap = {
    springSoft:'cubic-bezier(0.2, 1.2, 0.4, 1)',
    snap: 'cubic-bezier(0.2, 1, 0.3, 1)',
    recoil:'cubic-bezier(0.7, -0.4, 0.95, 0.9)',
    anticipate:'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
    smootherstep:'cubic-bezier(0.4, 0, 0.2, 1)',
    linear: 'linear',
    springHeavy: 'cubic-bezier(0.3, 1.8, 0.4, 1)',
    overshoot:'cubic-bezier(0.34, 1.56, 0.64, 1)',
    smoothstep:'cubic-bezier(0.4, 0, 0.2, 1)',
    easeIn: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
    spring:'cubic-bezier(0.25, 1.5, 0.5, 1)',
    easeOut: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    easeInOut: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
    cubicIn: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
    cubicOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    cubicInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    quartIn: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
    quartOut: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    quartInOut: 'cubic-bezier(0.77, 0, 0.175, 1)',
    quintIn: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    quintOut: 'cubic-bezier(0.23, 1, 0.32, 1)',
    quintInOut: 'cubic-bezier(0.86, 0, 0.07, 1)',
    sineIn: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
    sineOut: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
    sineInOut: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
    expoIn: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    expoOut: 'cubic-bezier(0.19, 1, 0.22, 1)',
    expoInOut: 'cubic-bezier(1, 0, 0, 1)',
    circIn: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
    circOut: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
    circInOut: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
    backIn: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    backOut: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    backInOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    bounceIn: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
    bounceOut: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    bounceInOut: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elasticIn: 'cubic-bezier(0.7, -0.75, 0.99, 0.01)',
    elasticOut: 'cubic-bezier(0.16, 1.5, 0.3, 1)',
    elasticInOut: 'cubic-bezier(0.87, -0.5, 0.13, 1.5)',
    easeInOut: 'ease-in-out',
    ease:'ease',
    stepStart:'step-start',
    stepEnd:'step-end'
  };
  const easings =createObj("Easings", {
    steps,
    reverse,
    mirror
  });
  iterate(jsEasingMap).each((fn, name)=>{
    easings[name]=createEasing({
      css:cssEasingMap[name],
      fn,
      name
    });
  });
  function createEasing(value){
    return new HouxitEasing(value);
  }
  function isEasingObject(ease){
    return ease && ease instanceof HouxitEasing;
  }
  class SuspenseBoundary{
    constructor(self, vNode){
      assign(this, {
        $owner:self,
        vNode
      });
    }
    super=undefined
    disposals=new Tuple
    disposable=pass
    fallbackElement=undefined
    errorElement=undefined
    activeElement=undefined
    rerenderObj={}
    timeout=Infinity
    hx_Element=undefined
    delay=200
    triggerResolved=pass
    state={
      pending:false,
      failed:false,
      resolved:false,
      postLoad:0
    }
    drivers={
      error:undefined,
      fallback:undefined,
      ancestorState:null,// 'pending' | 'failed' | 'resolved'
      
    }
    syncState(){
      if(this.super){
        if(this.super.super) this.super.syncState();
      }else return null;
      const xstate=this.super.state;
      if(xstate.pending){
        this.drivers.ancestorState='pending';
        if(this.super.drivers.fallback){
          this.drivers.fallback=this.super.drivers.fallback;
        }
      }else if(xstate.resolved){
        this.drivers.ancestorState='resolved';
      }else if(xstate.failed){
        if(this.super.drivers.error){
          this.drivers.error=this.super.drivers.error;
        }
        this.drivers.ancestorState='failed';
      }
      return this.drivers.ancestorState;
    }
    errorCaptured(cb, err, fb){
      this.state.failed=true;
      const failure=()=>this.triggerFailure(cb, err, fb);
      trackSuspenseConsistency(this, failure, 'failed');
    }
    resolvedHook(){
      this.state.resolved=true;
      this.triggerResolved();
    }
    hooks={
      errorHooks:new Tuple(),
      awaitHooks:new Tuple(),
      resolvedHooks:new Tuple()
    }
    metrics={
      $owner:undefined,
      vNodes:undefined,
      priorities:new Tuple(),
      vacuums:0,
      cashe:undefined,
      res:undefined,
      useFallback:false
    }
    triggerFailure=pass
    enterFallback(){
      if(this.state.pending){
        
      }
    }
    promise=undefined
    ref=undefined
    instance=undefined
    get activeAwaits(){
      return this.state.postLoad;
    }
    set activeAwaits(nvalue){
      const postLoad=this.state.postLoad;
      if(nvalue > postLoad){
        iterate(this.hooks.awaitHooks).each((callback)=> callback());
      }else if(nvalue < postLoad){
        
      }
      this.state.postLoad=nvalue;
      return true;
    }
    loadChain=new Tuple()
  }
  function _createAgent(value, config){
    const response=validateCollectionArgs(arguments, {
      name:'agent',
      required:[true, false ],
      min:1,
      max:2,
      validators:[ Any, Object ]
    });
    if(!response) {
      return pass;
    }
    const self=getCurrentRunningEffect({
      name:'agent'
    });
    if(!self) {
      return [ pass, pass ];
    }
    const parameters = [ value, assign({
      shallow:true
    }, config || {})];
    const state = !isToken(value) && !isPrimitive(value) ? stream(...parameters) : token(...parameters);
    return _useAgent_(state);
  }
  function agent(value, config){
    return _createAgent(...arguments);
  }
  function _pushEffect_(callback){
    let self=this;
    if(!isHouxitBuild(this)){
      self=getCurrentRunningEffect({
        name:"pushEffect"
      });
      if(!isHouxitBuild(self)) {
        return;
      }
    }
    if(!validateCollectionArgs(arguments, {
      max:1,
      validators:[Function],
      name:"pushEffect",
      self:this
    })) {
      return;
    }
    self[$$$operands].dependency.trigger();
    return isFunction(callback) ? tick(callback) : Promise.resolve();
  }
  function pushEffect(callback){
    return _pushEffect_.call(this, ...arguments);
  }
  function isSameNodeType(node1, node2){
    if(!inBrowserCompiler) {
      return false;
    }
    if(!node1 instanceof Element && !node2 instanceof Element) {
      return false;
    }else if(!node1.nodeType === node2.nodeType) {
      return false;
    }else if(!node1.localName === node2.localName) {
      return false;
    }
    return true
  }
  function isEQNode(node1, node2){
    if(!isSameNodeType(node1, node2)) {
      return false;
    }else if(!node1.outerHTML === node2.outerHTML) {
      return false;
    }else if(!len(node1.attributes) === len(node2.attributes)) {
      return false;
    }else if (len(node1.attributes) === len(node2.attributes)){
      const node2Attrs=node2.attributes;
      for(let [key, attr ] of entries(node1.attributes)){
        const { name , value } = attr;
        const { name:node2N, value:node2V } = node2Attrs[key];
        if(!name === node2N && !value === node2V) {
          return false;
        }
      }
    }
    return true;
  }
  function cloneVElement(vnode){
    if(!isHouxitElement(vnode)){
      debugHandler(`cloneVElement() macro expects a houxit virtual node as it's first argument`);
      return;
    }
    return vnode.compiler_options.createElement();
  }
  function _makeCloneVersion(value, deep=false, metrics=[]){
    let cValue;
    const [ parent, key ] = metrics;
    if(isPrimitive(value) || (isCollection(parent) && isNaN(Number(key)))){
      return value;
    }
    if(validateType(value, [HouxitElement, BaseToken, Function, Symbol]) || isPrimitive(value)) {
      return value;// cloneVElement(value);
    }else if(isCollection(value)) {
      let args=(value.map((val, ky)=>{
        return deep ? _makeCloneVersion(val, deep, [value, ky]) : val;
      }));
      let res=(arg=[])=>new value.__proto__.constructor(...arg);
      if(len(args) === 1 && isArray(value)){
        res=res();
        res.push(args[0]);
      }else{
        res=res(args)
      }
      return res;
    }else if(isObject(value)) {
      if(isVNodeClass(parent)){
        if(_makeMap_("prototype_,type,GeneticProvider,children,hx_Element", key));
        return value;
      }
      const isSVA= isArray(value) && len(value) === 1 && isNumber(value[0]);
      if(isSVA) {
        value=[ ...value ];
        value.push(undefined);
      }
      cValue = assign(new value.__proto__.constructor(), value);
      if(isSVA) {
        cValue.pop();
      }
      if(!deep) {
        return cValue;
      }
      for(let [ ky, vl ] of getIterator(cValue)){
        if(!isPrimitive(vl)) {
          cValue[ky]=_makeCloneVersion(vl, deep, [cValue, ky ]);
        }
      }
    }
    return cValue;
  }
  const equalityChecker=(val1, val2)=>{
    return (isEmptyStr(val1) && isEmptyStr(val2)) || (isUndefined(val1) && isUndefined(val2)) || (val1 === null && val2 === null);
  }
  function deepEqualityCheck(val1, val2){
    val1=unwrap(val1);
    val2=unwrap(val2);
    if(validateType(val1, None) && validateType(val2, None)){
      if(equalityChecker(val1, val2)) {
        return true;
      }else {
        return false;
      }
    }
    if(getType(val1) !== getType(val2)) {
      return false;
    }
    if(isPrimitive(val1) && isPrimitive(val2)) {
      return val1 === val2;
    }
    if(isCollection(val1)){
      if(len(val1) !== len(val2)) {
        return false;
      }
      val2=validateType(val2, [Set, Tuple]) ? arrSet(val2) : val2;
      for(const [ key, value] of val1.entries()){
        if(!deepEqualityCheck(value, val2[key])) {
          return false;
        }
      }
      return true;
    }else if(isMap(val1)){
      if(len(val1) !== len(val2)) {
        return false;
      }
      let index=0;
      for(const [ key, value] of val1.entries()){
        const val2Key=val2.keys().next();
        if(!deepEqualityCheck(key, val2Key)) {
          return false;
        }
        const value2=val2.values().next();
        if(!deepEqualityCheck(val2, value2)) {
          return false;
        }
        index++;
      }
      return true;
    }else if(isObject(val1)){
      if(len(val1) !== len(val2)) {
        return false;
      }
      let index=0;
      for(const [ key, value] of entries(val1)){
        if(key !== keys(val2)[index]) {
          return false;
        }
        if(!deepEqualityCheck(value, val2[key])) {
          return false;
        }
        index++;
      }
      return true
    }
    return JSON.stringify(val1) === JSON.stringify(val2);
  }
  function _$compiler_engine_hydrator(){
    let global=createObj('Houxit');
    global[PRIVATE_PROPERTY_KEY]={};
    if(inBrowserCompiler) {
      // window.Houxit=global;
    }
  }
  const exceptions=createObj('Exceptions',{
    SE:(self)=>debugHandler(``, self, isHouxitBuild(self))
  });
  const ConfigValidator={
    debug:Boolean, 
    forwardSlot:Boolean, 
    forwardAttrs:Boolean, 
    delimiters:Array, 
    scopedStyle:Boolean,
    forwardEvents:Boolean,
    flushType:"post"
  }
  class FrameworkCompilerOptions{
    debug=true
    forwardSlot=true
    forwardAttrs=true
    forwardEvents=this.forwardAttrs;
    delimiters=['{{','}}']
    flushType="post"
    scopedStyle=true
  }
  const isGlobalConfig=config=>config instanceof FrameworkCompilerOptions;
  const Compiler_Config_Options= new FrameworkCompilerOptions()
  class HouxitCompilerSetup{
    debug(debug){
      if(isFalse(mapSettingCheck(this, 'debug', debug))) {
        return this;
      }
      Compiler_Config_Options.debug=debug
    }
    forwardAttrs(forwardAttrs){
      if(isFalse(mapSettingCheck(this, 'forwardAttrs', forwardAttrs))) {
        return this;
      }
      Compiler_Config_Options.forwardAttrs=forwardAttrs
    }
    forwardEvents(forwardEvents){
      if(isFalse(mapSettingCheck(this, 'forwardEvents', forwardEvents))) {
        return this;
      }
      Compiler_Config_Options.forwardEvents=forwardEvents
    }
    flushType(flushType){
      if(isFalse(mapSettingCheck(this, 'flushType', flushType))) {
        return this;
      }
      Compiler_Config_Options.flushType=flushType
    }
    forwardSlot(forwardSlot){
      if(isFalse(mapSettingCheck(this, 'forwardSlot', forwardSlot))) {
        return this;
      }
      Compiler_Config_Options.forwardSlot=forwardSlot
    }
    delimiters(delimiters){
      if(isFalse(mapSettingCheck(this, 'delimiters', delimiters))) {
        return this;
      }
      Compiler_Config_Options.delimiters=delimiters
    }
    scopedStyle(scopedStyle){
      if(isFalse(mapSettingCheck(this, 'scopedStyle', scopedStyle))) {
        return this;
      }
      Compiler_Config_Options.scopedStyle=scopedStyle
    }
  }
  function isXtruct(func, ...arg) {
    try {
      const x=Reflect.construct(Object, arrSet(args), func);
      return x ;
    } catch (error) {
      return false;
    }
  }
  function hasSpecialCharacters(value) {// Define the regular expression for special characters
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/m.test(value);  // Test if the value contains any special characters
  }
  const extractorArsterists="*****";
  const reverseRegex=new RegExp(`(${escapeRegExp(extractorArsterists)}[\\d])`, 'g');
  function ArgsExtractor(source, funcN, config={}){
    const orgFName=funcN;
    config=assign({
      global:false,
      block:"declare"
    }, config);
    const { global, block } = config;
    if(hasSpecialCharacters(funcN)) {
      funcN=escapeRegExp(funcN);
    }
    let flags="mu";
    if(global) {
      flags+="g";
    }
    const fxRegex=new RegExp(`(${funcN} *${`\\(`})([\\S\\s]*)`, flags);
    const drafts=[];
    let draftCount=0;
    source=source.replace(stringsMonitorRegex, (match, rex, roll)=>{
      drafts.push(match);
      let dataDraft=extractorArsterists+draftCount;
      draftCount++;
      return dataDraft;
    });
    let [ match, context, rest ] =source.match(fxRegex);
    rest=rest.replace(reverseRegex, (match, rex, roll)=> drafts[Number(rex.match(/\d/))]);
    let value="";
    let callCount=0;
    let opQ="";
    let compile=true;
    const isQo=val=>/['"]/.test(val);
    for(let [ key, val ] of entries(rest)){
      value += val;
      if(isQo(val)){
        if(!opQ){
          compile=false;
          opQ=val;
        }
        if(val === opQ){
          opQ="";
          compile=true;
        }
      }
      if(!compile) {
        continue;
      }
      if(val === "(") {
        callCount++;
      }else if(val === ")"){
        if(callCount === 0 ) {
          break;
        }else {
          callCount--;
        }
      }
    }
    return {
      name:orgFName,
      content:value.slice(0, -1),
      source:orgFName+"("+value,
    }
  }
  function validateType(val, type){
    if(isFunction(type) ){
      if(new Set(DataFunctionMap).has(type)){
        return getType(val) === getType(type()) && !isNull(val)
      }else if(new Set(XtructDataCallableTypes).has(type)){
        let res=false;
         try {
           res=getType(val) === getType(new type()) && !isNull(val);
         }catch(err){
           return res;
         }
         return res;
      }else if(isDomSpecialConstructor(type) || isClass(type) || isXtruct(type) ) {
        let res=false;
        try {
          res=val instanceof type;
        }catch(err){
          return res;
        }
        return res;
      }
    }else if(isArray(type)){
      let res=false;
      for(let typeF of type.values()){
        if(!isFunction(typeF) && !isBaseType(typeF) && !isNull(typeF) && !isEmptyStr(typeF)){
          debugHandler(`type check value is not a function or class constructor type\n\n found "${typeF}"`); 
          return false;
        }
        res=validateType(val, typeF);
        if(isTrue(res)) {
          return res;
          break;
        }
      }
      return res;
    }else if(isBaseType(type)){
      if(type instanceof AnyType) {
        return !validateType(val , None );
      }else if(type instanceof NoneType) {
        return validateType(val, [undefined, null, ""]);
      }
      let res;
      if(type.validator) {
        res=type.validator(val);
      }
      if(!isTrue(res) && type.type ) {
        res=validateType(val, type.type);
      }
      return res;
    }else if(new Set([undefined, null, "" ]).has(type)) {
      return isString(val) ? isEmptyStr(val) : isNull(val);
    }
    return false;
  }
  function createTextElement(self, text, hx_Element, isRerender, config){
    return _createTextElement(...arguments);
  }
  function _createTextElement(self, text, hx_Element, isRerender, config){
    if(!isPrimitive(text)){
      debugHandler(`cannot create a TEXT_NODE element from a none primitive value.......\n\n"${text}" value`, self);
      text = "";
    }
    const isSSR=isSSRCompiler(self),  is_hyperscript=hx_Element.is_hyperscript;
    let hasSkip, node, priority;
    if(!isRerender && !isSSR) {
      node=document.createTextNode(text);
      node._hx_Element={
        hx_Element,
        _vnode_key:undefined
      };
    }
    if((!is_hyperscript && hasSpecialCharacters(text))  || (is_hyperscript && isFunction(text))) {
      const effect=_createEffectBase(function(){
        return is_hyperscript ? safeCall(text) : resolveAccessor(self, text, hx_Element);
      }, self);
      let { dependencies, value:textContent } = effectRunner(effect);
      if(!isRerender && !isSSR) {
        node.textContent=textContent
      }else {
        node=textContent;
        hx_Element.$element=textContent;
      }
      if(!isRerender) {
        if(isHouxitBuild(self) && (!isSSR || isHydration(self))){
          const flush=createPriorityFlush(effect, ()=>{
            if(IS_TEXT_NODE(node)){
              node.textContent=effect?.runEffect?.().value;
            }
          });
          hx_Element?.VN_Tree.FLUSHS.add(flush);
        }
      }
    }
    if((isRerender || isSSR) && (is_hyperscript || !hasSpecialCharacters(text))){
      node = text;
      hx_Element.$element=text;
    }
    return node ;
  }
  const DEPENDENCY_FLAGS={
    [0]:'TEXT',
    [16]:'CLASS',
    [32]:'STYLE',
    [48]:'ATTRS',
    [64]:'EVENTS',
    [80]:'PARAMS',
    [96]:'FRAGMENT',
    [112]:'SLOTS',
    [128]:'CHILDREN'
  }
  const flagNames="FRAGMENT,CLASS,STYLE,ATTRS,EVENTS,PARAMS,TEXT,SLOTS,CHILDREN".split(",");
  class BasevNodeClass{
    constructor(type, props, children, configOptions={}){
      this.type=type
      if(validHouxitWidget(type)) {
        this.GeneticProvider=type;
      }
      this.props=isPObject(props) ? props : {} ;
      if(hasOwn(this.props, 'key')){
        this.key=this.props.key;
        delete this.props.key;
      }
      if(!isNull(children)) {
        this.children=(new Tuple(...arrayInverter(children))).list();
      }
      let { subs, ctx, is_hyperscript, key, config, self, flags=[] } = configOptions;
      this.ctx=ctx;
      for(let fl of flags.values()){
        this.subscriptions[DEPENDENCY_FLAGS[fl]]=DEPENDENCY_FLAGS[fl].toString(2);
      }
      this.prototype_=type;
    }
    type=null
    props={}
    compiler={}
    prototype_=null
    children=null
    key=null
    config=null
    _is_VNodeClass=true
    filesFilter={
      $$$Events:{},
      $Model_Event:null,
      $Notifiers:null,
      $ssr_kit:{
        events:new Tuple(),
        props:{},
        hydrationFlushs:new Tuple()
      },
      parent:undefined
    }
    rawChildren=null
    rawProps=null
    children=null
    hx_Element=null
    is_hyperscript=false
    GeneticProvider=null
  }
  class vNodeClass extends BasevNodeClass{
    constructor(){
      super(...arguments);
    }
  }
  const wuf_class_prop=Symbol("wfu_class_prop");
  class __WUFClass__{
    constructor(instance){
      this[wuf_class_prop]=instance;
    }
  }
  const is_wuf_class=klass=>klass instanceof __WUFClass__;
  const isVNodeClass=vnode=>vnode instanceof vNodeClass ;
  class HouxitElement{
    constructor(){
      if (isNativeElement(this.$element)) {
        define(this.$element, 'houxitElement',{
          value:this, 
          enumerable, 
          configurable
        });
      }
    }
    base_element=undefined
    get_parent_element(){
      return this.$element.parentElement.houxitElement
    }
    prototype_=undefined
    $element=undefined
    slot_name=undefined
    widget_instance=undefined
    updated_hook=pass;
    destroyed_hook=pass;
    _vnode_key=undefined;
    patch_tracks=new Set();
    conditional_record={ 
      src:undefined, 
      res:false,
      passed:false
    }
    compiler_options={ 
      context:{}
    };
    VNodeManager={ 
      updateFlags:{ 
        active:false
      },
      motion_object:{
        transite:new Tuple(),
        animate:new Tuple(),
        config:{},
        hooks:{
          transition:{
            in:new Tuple(),
            out:new Tuple(),
            stop:new Tuple(),
            destroy:new Tuple()
          },
          animation:{
            to:undefined,
            from:undefined,
            options:{},
            play:new Tuple(),
            pause:new Tuple(),
            reverse:new Tuple(),
            cancel:new Tuple(),
            destroy:new Tuple(),
            finish:new Tuple(),
            restart:new Tuple()
          }
        },
        create(dir, fn, obj){
          this[dir].add({
            fn,
            ...obj
          });
        }
      },
      posix:[],
      GeneticProvider:undefined,
      vNodeClass:undefined,
      factoryCompiler:pass,
      LifeCycleHooks:{
        init_hook:new Tuple(),
        created_hook:new Tuple(),
        mounted_hook:new Tuple(),
        updated_hook:new Tuple(),
        destroyed_hook:new Tuple()
      },
      patchFlags:{
        subscriptions:new Tuple(),
        PropFlags:new Tuple(),
        shapeProps:{}
      },
      dexTransform:{
        sourcesArray:[],
        syntaxArray:[]
      },
      SSRVnode:undefined
    }
    VN_Tree={
      KEYS_INDEXES:new Tuple(),
      LEAGUE_TREE:{},
      FLUSHS:new Tuple(),
      ELEMENTS:undefined
    }
    hx_build=undefined
    is_hyperscript=false
    IS_RENDERLESS=false
    LabContext=undefined
    mounted=false
    isLoopWrappRenderer=false
    NodeList=new Tuple()
    PATCH_FLAGS=new Tuple()
  }
  function isTagMatch(open, close){//match syntax for a $$for opening and closing tags
    let res=false;
    const tags=[['[',']'],['{','}'],['(',')'],['<','>']];
    for(const items of tags.values()){
      if(items.includes(open) || items.includes(close)){
        if(open === items[0] && close === items[1] || open === items[1] && close === items[0]) {
          return true;
        }
      }
    }
    return res;
  }
  function tagMachErr(self, metrics){
    let [ op, cl, p1 ] = metrics;
    if(!isTagMatch(op, cl) ) {
      debugHandler(`Unmaching tags for "for" directive loop data keys mapping\n opening tag does not match a closing tag\n\n found ${p1} Unmaching`, self, true);
      return false;
    }
    return true;
  }
  const WrappedDestructuredRegex=/(((\(|\<)?(((\{|\[)(.*?[ ]*)*?(\}|\]))|([\w.\$]+))[ ]*(\,[ ]*(.*?))?(\)|\>)?)[ ]+([of|in]+)[ ]+)?([\w.\$\[\]\(\) \S\{\}]+)/;
  function get_Loop_Data(self, str, isBlock=false){
    const Loop_Data={};
    const match=str.match(WrappedDestructuredRegex);
    if(!match || !match[14]){
      debugHandler(`Usupported Loop format in 'for' ${isBlock ? 'block' : 'directive'}\n\n"${str}" loop syntax is invalid or is not recognised`, self, true);
      return;
    }
    const [matc, ig1, each, opening, value, isDestructure, ig2, ig3, ig4, isValueName, afterValue, key_index, closing, loopType, resource ] = match
    if(opening && !tagMachErr(self, [opening, closing, ''])){
          return;
    }
    if(!resource){
      debugHandler(`unable to alocate loop resource in loof 'for'`, self, true);
      return;
    }
    assign(Loop_Data, {
      obj:resource,
      value,
      type:loopType
    });
    if(opening && key_index){
      const [ key, index ] = key_index.split(',').map(v=>v.trim());
        Loop_Data.key = key;
        Loop_Data.index=index;
    }
    return Loop_Data
  }
  function For_Loop(self, attr, hx_Element, isBlock=false, config, isRerender){
    const data=get_Loop_Data(self, attr, isBlock, isRerender);
    if(!data) {
      return ;
    }
    let effect, dataObject;
    try{
      effect=isRerender ? config.effect : _createEffectBase(()=>{
        return unwrap(_$runModelBind(self, data.obj, hx_Element));
      }, self);
      dataObject=(isRerender ? effect.runEffect() : effectRunner(effect)).value;
    }catch(error){
      debugHandler(`Trouble accessing '${data.obj}' object for for loop\n\nnot found on instance or is undefined\n\n${error}`, self, true);
      return;
    }
    if(!isIterable(dataObject) && !isNumber(dataObject)){
      debugHandler(`Undefined scope for for, \n\n${data.obj} not iterable`, self, true);
      return ;
    }
    const Valid_LoopType="of,in";
    if(data.type && !_makeMap_(Valid_LoopType, data.type)){
      debugHandler(`((Iteration issue))\n\n"${data.type}" is not an iterator\n "of" or "in" only supported by Houxit`, self, true);
      return;
    }
    return { 
      effect,
      obj:dataObject, 
      keyName:data.key?.trim(), 
      valToken:data.value?.trim(), 
      loopType:data.type?.trim(), 
      token:data.obj, 
      index:data.index?.trim()
    }
  }
  function NormalizeDirGarbage(props){
    let has_conditional=false, has_loop=false, dataRecord={}, index=0;
    for(const [key, val] of entries(props)){
      if(!has_conditional) {
        has_conditional=isIfKey(key) || isElseKey(key) || isElseIfKey(key) ;
      }
      if(isIfKey(key)) {
        assign(dataRecord, {
          ifIndex:index,
          hasIf:true,
          getIf:val,
          ifKey:key
        });
      }
      if(isElseKey(key)) {
        assign(dataRecord, {
          elseIndex:index,
          hasElse:true,
          getElse:val,
          elseKey:key
        });
      }
      if(isElseIfKey(key)) {
        assign(dataRecord, {
          elseIfIndex:index,
          getElseIf:val,
          hasElseIf:true,
          elseIfKey:key
        });
      }
      if(isForKey(key)) {
        has_loop=true;
        assign(dataRecord, {
          forIndex:index,
          hasFor:true,
          getFor:val,
          forKey:key
        });
      }
      index++;
    }
    assign(dataRecord, {
      hasIFWithFor:has_conditional && has_loop,
      has_conditional
    });
    return dataRecord;
  }
  const isRenderlessElement=vnode=> isHouxitElement(vnode) && isTrue(vnode.IS_RENDERLESS);
  function hasMultiConditionals(hasIf, hasElseIf, hasElse){
    let count = 0;
    for (let value of [ ...arguments ].values()){
      if(value) {
        count++;
      }
    }
    return count;
  }
  function _$Conditional_Dir_Resolver(self, vnode, hx_Element, siblings, ctx, recordPatch, config){
    const [ hasIf, hasElseIf , hasElse ] = recordPatch[3];
    const condCount=hasMultiConditionals(hasIf, hasElse, hasElseIf);
    if(condCount > 1){
      debugHandler(`((directive))>.....Overloaded Conditional directive found on element instance\n\n
        "${hasIf ? "$$if" : hasElseIf ? "$$else-if" : "$$else" }"\nfailed to determine>>>>`, self, true);
      return ;
    }
    const isRerender=self[$$$operands].initializedRender;
    const GIC=new _$Directive_$Conditional$_Renderer(self, vnode, hx_Element, siblings, recordPatch, ctx, config);
    const createElement=(index)=> {
      if(hasIf){
        return GIC.Panel_If_Block();
      }else if(hasElseIf || hasElse){
        return GIC.Panel_elseif_Block(hasElse, index);
      }
    }
    const render=createElement({
      i:len(siblings)
    });
    if(!isRerender){
      render.compiler_options.createElement=createElement;
    }
    return render;
  }
  const isConditionalVnode=(vnode, cond, {suspenseFlag})=> {
    return (isHouxitElement(vnode) || (suspenseFlag && isVNodeClass(vnode))) ? vnode.conditional_record.src === cond : false;
  }
  function isMemoElement(elem){
    return isHouxitWidgetElement(elem) && isPObject(elem.VNodeManager.isMemoChild);
  }
  class _$Directive_$Conditional$_Renderer{
    options=undefined;
    constructor(self, vnode, hx_Element, siblings, recordPatch, ctx, config){
      let { type, props, children, key } = vnode;
      const [ hasEx , propValue , srcKey ]=recordPatch;
      const LabContext=hx_Element ? assign({}, hx_Element.LabContext) : {};
      ctx=assign(assign({}, ctx), LabContext);
      assign(this, {
        propValue, 
        srcKey, 
        self,
        props:memMove(vnode.props, true),
        vnode,
        hx_Element,
        siblings,
        ctx,
        config,
        effect:undefined,
        isRerender:self[$$$operands].initializedRender,
        createElement:()=>{
          return createHouxitElement(this.vnode, self, false, hx_Element?.LabContext, siblings, ctx,  hx_Element, config);
        },
        rf:[]
      });
      this.vnode.props=assign({}, this.vnode.props);
    };
    Panel_If_Block(typeF='if', previous, index){
      const { config, self, propValue, hx_Element, vnode, siblings, srcKey, ctx, isRerender } = this ;
      const isElseIf=typeF === 'else-if', isElse = typeF === 'else';
      let passed=!previous ? false : previous.conditional_record.passed, node;
      const previousTypeF=previous?.conditional_record.src || typeF;
      const effect= this.effect ?? _createEffectBase(()=>{
        return isElse ? true : _$runModelBind(self, propValue, ctx);
      }, self);
      this.effect ? effect.runEffect() : effectRunner(effect);
      //add conditional_record.effect in a 
      let data=effect.value;
      delete this.vnode.props[srcKey];
      if(passed || !data){
        node=$IfElseDirRenderLess(data, typeF, previous);
      }
      if((data && !passed ) && config.suspenseFlag){
        node=this.vnode;
        node.conditional_record={};
      }else if(data && !passed){
        node=this.createElement();
        assign(node.conditional_record, {
          src:typeF,
          res:data ? true : false,
          passed:!passed && data
        });
      }
      hx_Element?.NodeList.add(node);
      if(!this.effect && !isRerender){
        this.effect=effect;
        if(previous){
          previous.conditional_record.effect.follow(effect);
          effect.reducer=previous.conditional_record.effect;
        }
        node.conditional_record.effect=effect;
        const flush=createPriorityFlush(effect, (observer)=>{
          const c_ind=siblings.indexOf(node);
          const EffectVNode=node.compiler_options.createElement({
            i:c_ind
          });
          EffectVNode.compiler_options.createElement=node.compiler_options.createElement;
          if(config.memoVault && !checkMemoContentValidity(self, EffectVNode)){
            return;
          }
          let exch=renderVnodeDiffSequence(self, node, EffectVNode, observer, hx_Element || self.$build, {
            args:[ {
              i:c_ind
            }],
            config:{
              FORCE:typeF !== previousTypeF,
              ...config
            }
          });
          assign(node.conditional_record, EffectVNode.conditional_record);
          if(exch){
            exch.compiler_options.createElement=EffectVNode.compiler_options.createElement;
            node=exch;
            assign(exch.conditional_record, EffectVNode.conditional_record);
            siblings.splice(c_ind, 1, node);
          
          }
        }, self);
      }
      return node;
    } 
    Panel_elseif_Block(isElse=false, index){
      const block=isElse ? 'else' : 'else-if' ;
      const { config, self, propValue, hx_Element, siblings, vnode, srcKey, ctx } = this;
      const isRerender=self[$$$operands].initializedRender;
      let previous=siblings[index.i - 1];
      let passed, node;
      if(previous) {
        passed=previous.conditional_record.passed;
      }
      delete vnode.props[srcKey];
      if(!isRerender && !previous || (!isConditionalVnode(previous, 'if', config) && !isConditionalVnode(previous, 'else-if', config))){
        debugHandler(`The "$$${block}" conditional rendering directive block expects a preceding "$$if" or "$$else-if" directive element\n\nMay return unexpected result during production\nDid you mean "$$if" directive instead?\n at>>>>>`, self, true);
        node=$IfElseDirRenderLess( false, block, previous ); //this.createElement();
        node.compiler_options.createElement=this.createElement;
        return node;
      }
      return this.Panel_If_Block(block, previous, index);
    }
  }
  function $IfElseDirRenderLess( data, block, previous){
    return createRenderlessElement((hx_Element)=>{
      assign(hx_Element.conditional_record, {
        src:block,
        res:data ? true : false,
        passed: previous ? (previous.conditional_record.passed) : false
      });
    });
  }
  function has_Intersect_Prop(obj1, obj2 ){
    let res=false;
    for(const [key, value] of entries(obj1)){
      if(isArray(obj1)) {
        res=_makeMap_(obj2, value);
      }else if(isPObject(obj1)) {
        res=_makeMap_(obj2, key);
      }
      if(isTrue(res)) {
        break;
      }
    }
    return res;
  }
  function destructWarn(ref, object, self){
    if(ref && objectDestructureRegex.test(ref) && !isObject(object)){
      debugHandler(`Invalid object destructuring from a none object value\n\nillegal destructuring found at "${object}" on "$$<...>" directive definition\nTarget value is not an object`, self, true);
      return false;
    }else if(ref && arrayDestructureRegex.test(ref) && !isArray(object)){
      debugHandler(`Invalid array destructuring from a none array value\n\nillegal destructuring found at "${object}" on $$*** directive definition\nTarget value is not an array iterable`, self, true);
      return false;
    }
    return true;
  }
  function _$Directive_$For_Loop$_Renderer(self, vNode, hx_Element, siblings, ctx, renderPatch, saveGarbageContent, config){
    vNode=memMove(vNode, true);
    const [ check, propValue , srcKey ] = renderPatch;
    const isRerender=self[$$$operands].initializedRender;
    const isER=isEffRerender(self);
    const Instance= isER ? config.For_Loop_Instance : For_Loop(self, propValue, hx_Element, false, config, isRerender) || {};
    if(!isER){
      config.For_Loop_Instance=Instance;
    }else{
      Instance.obj=Instance.effect.runEffect().value;
    }
    let { obj, keyName, valToken, loopType, ref, index, effect }= Instance;
    if(!isRerender){
      config.effect=effect;
    }
    vNode.props=assign({}, vNode.props);
    delete vNode.props[srcKey];
    if(!isER && loopType === 'in' && valToken && ( validateType(obj, [ Object, Collections]))){
      $warn(`((Warning))\n\nWe recommend against the use of the 'for...in' loops type since it iterates over all of the object's enumerable and non-symbol properties \n\nLeaving the value data as "undefined"\nUse "for...of" instead......`, self);
      $warn(`Many JavaScript style guides and linters recommend against the use of 'for...in', because it iterates over the entire prototype chain which is rarely what one wants, and may be a confusion with the more widely-used "for...of" loop\n\nIt's included in Houxit for completeness.`, self);
    }
    const NodeList=[];
    iterate(obj, loopType).each(function(value, key, indexV){
      const vNodeClass=memMove(vNode, true);
      ctx=assign({}, ctx);
      if(!destructWarn(valToken, value, self)) {
        return;
      }
      if(isNumber(obj)){
        if(valToken) {
          ctx[valToken]=value+1;
        }
        if(keyName) {
          ctx[keyName]=valToken ? value : value+1;
        }
        if(index) {
          ctx[index]=index;
        }
        renderForConditional(self, vNodeClass, ctx, NodeList, key, value, hx_Element, saveGarbageContent, siblings, config);
      }else{
        const fallprops={};
        if(valToken) {
          fallprops.valToken=valToken;
        }
        if(keyName) {
          fallprops.keyName=keyName;
        }
        if(index) {
          fallprops.index=index;
        }
        ctx=loopContextPropsMerger(self, {
          valToken, 
          keyName,
          index,
          hx_Element
        }, { 
          ky:key, 
          vl:value,
          count:indexV
        }, ctx);
        renderForConditional(self, vNodeClass, ctx, NodeList, indexV, value, hx_Element, saveGarbageContent, siblings, config);
      }
    });
    const lastElement=NodeList[len(NodeList)-1];
    const wrapper= new HouxitFragmentElement(NodeList, self, hx_Element);
    if(lastElement) {
      assign(wrapper.conditional_record, lastElement.conditional_record);
    }
    wrapper.isLoopWrappRenderer=true;
    if(isHouxitElement(hx_Element)) {
      hx_Element.NodeList.add(wrapper);
    }
    if(!isRerender){
      const flush=createPriorityFlush(effect, ()=>{
        prioritize_list_effect(self, wrapper, vNode, obj, effect, config);
      });
      wrapper.VN_Tree.FLUSHS.add(flush);
    }
    return wrapper;
  }
  function loopContextPropsMerger(self, Loop_Data, it_Data, ctx){
    const { valToken, keyName, index, hx_Element} = Loop_Data;
    const { ky, vl, count } = it_Data;
    if(valToken && isDestructureSyntax(valToken)){
      if(!(destructWarn(valToken, vl, self))) {
        return ctx;
      }
      ctx=smartDextCtxMerging(ctx, {
        [$$dexTransformKey]:{
          sourcesArray:[ vl ],
          syntaxArray:[ valToken ]
        }
      });
    }else if(valToken) {
      ctx[valToken]=vl;
    }
    if(keyName) {
      ctx[keyName]=valToken ? ky : vl;
    }
    if(index) {
      ctx[index]=count;
    }
    return assign({}, ctx);
  }
  function renderForConditional(self, vnode, ctx, NodeList, count, vl, hx_Element, saveGarbageContent, siblings, config){
    if(hx_Element?.LabContext) {
      ctx=smartDextCtxMerging(hx_Element.LabContext, ctx || {});
    }
    const { has_conditional } = saveGarbageContent;
    const createElement=()=>createHouxitElement(vnode, self, false, ctx,  has_conditional && count === 0 ? siblings : NodeList, null, hx_Element, config);
    const loopNode=createElement();
    loopNode.compiler_options.createElement=createElement;
    if(loopNode) {
      NodeList.push(loopNode);
    }
  }
  function keyIndex(obj, key){
    return isObject(obj) ? keys(obj).indexOf(key) : validateType(obj, [Array, Set, Number]) ? Number(key) : isMap(obj) ? obj.keys().indexOf(key) : NaN;
  }
  function HX_ELEMENT_MANAGER(self, vnode, element, hx_Element, siblings, saveGarbageContent, ctx, config){
    const is_hyperscript=vnode.is_hyperscript;
    const { type, props, children }=vnode;
    const { hasIFWithFor , ifIndex , elseIndex, elseIfIndex, forIndex}=saveGarbageContent
    const {getIf, hasIf, hasElse, getElse, hasElseIf, getElseIf, hasFor, getFor } = saveGarbageContent;
    const { ifKey, elseKey, elseIfKey, forKey } = saveGarbageContent;
    const getValue=hasIf ? getIf : hasElse ? getElse : hasElseIf ? getElseIf : hasFor ? getFor : null ;
    const getEx=hasIf || hasElse || hasElseIf;
    const getKey= hasIf ? ifKey : hasElse ? elseKey : hasElseIf ? elseIfKey : hasFor ? forKey : null ;
    const conditionalArgs= [getEx, getValue, getKey, [ hasIf, hasElseIf, hasElse ]];
    if(hasElse && hasFor && elseIndex > forIndex){
      debugHandler(`A "$$for" directive loop cannot take precedence in the presence of an "$$else" condition directive statements\n\ndirective scoping error`, self, true);
      return;
    }
    vnode =memMove(vnode, true);
    vnode.filesFilter.hasDir=true;
    if((hasIFWithFor && (hasIf ? ifIndex : hasElse ? elseIndex : hasElseIf ? elseIfIndex : -1 ) < forIndex) ) {
      return _$Conditional_Dir_Resolver(self, vnode,  hx_Element, siblings, ctx, conditionalArgs, config );
    }else if(hasFor) {
      return _$Directive_$For_Loop$_Renderer(self, vnode, hx_Element, siblings, ctx,  [getEx, getFor, forKey ], saveGarbageContent, config );
    }else if(getEx) {
      return _$Conditional_Dir_Resolver(self, vnode, hx_Element, siblings, ctx, conditionalArgs, config);
    }
    return createHouxitElement(vnode, self, is_hyperscript, ctx, siblings, null, hx_Element, config);
  }
  function callSetHooks(self, hooks, element, bindObj={}, hx_Element, Name="" ){
    return (function Callback(){
      for(let hook of hooks.values()){
        if(isPass(hook)) {
          continue
        }
        try{
          const bindings = hook[lifeCiycleBinding];
          const instance=isHouxitNativeElement(hx_Element) ? element : self.__public_model__;
          hook.call(self.__public_model__, instance, bindings );
        }catch(err){
          debugHandler("$$"+hook.name+"("+Name.slice(0, -5)+") >>\nUnresolved problem during the call of the "+Name.slice(0, -5) +" hook of custom "+(hook.dirName||"")+" directive\n",  self, true);
          debugHandler(err, self);
          break;
        }
      }
    })();
  }
  function HouxitElementLifeCircleHooks(self, element, hx_Element){
    const args=(hookN)=> [ self, hx_Element.VNodeManager.LifeCycleHooks[hookN], element, self.__public_model__, hx_Element, hookN ];
    if(len(hx_Element.VNodeManager.LifeCycleHooks.created_hook)){ 
      callSetHooks( ...args('created_hook') );
    }
    if(len(hx_Element.VNodeManager.LifeCycleHooks.mounted_hook)){
      self[$$$compiler].whenMountedHooks.add(function(){
        whenMounted(self, element, ()=>{
          callSetHooks( ...args('mounted_hook') );
        });
      });
    }
    iterate(["updated_hook", "destroyed_hook"]).each((hookName)=>{
      if(len(hx_Element.VNodeManager.LifeCycleHooks[hookName])){
        $assignToHookFN( ...args(hookName) );
      }
    });
    return  element;
  }
  function $assignToHookFN(self, hookSet, element, model, hx_Element, hookN){
    hx_Element[hookN]=function hook(){
      callSetHooks(self, hookSet, element, self.__public_model__, hx_Element, hookN);
    }
  }
  const frameDirectives="$$for,$$if,$$else-if,$$else";
  function built_in_fragment_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    installSuspense(vnode.children, getBoundary(vnode));
    const fragmented_elements=vnode.children ? _HouxitCoreRenderer(vnode.children, self, null, hx_Element, ctx, config) : [];
    const fragment=new HouxitFragmentElement(fragmented_elements, self, hx_Element, vnode.props?.key);
    fragment._vnode_key=vnode.key;
    return fragment;
  }
  function debug_self_prop_warn(props, self, args){
    const [ WidgetName, propName, type ] = args;
    if(!props || !hasOwn(props, propName)){
      debugHandler(`"${WidgetName}" built-in widget expects a "${propName}" params\nMissing...`, self, true);
      return false;
    }
    if(type && !validateType(props[propName], type)){
      debugHandler(`"${WidgetName}" validation for the "${propName}" param is invalid`, self, true);
      return false;
    }
    return true;
  }
  function built_in_self_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    if(isSelfRecursiveWidget(self)) {
      return createRenderlessElement();
    }
    const prototype_=self[$$$core].virtualNode.prototype_;
    vnode=h(prototype_, memMove(vnode.props), memMove(vnode.children || []));
    vnode[factoryHXSelfInstance]=true;
    const ELEMENT= createHouxitElement(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config);
    return ELEMENT;
  }
  function getBuildSelf(self, value){
    if(isString(value)){
      if(IS_VALID_TAGNAME(value) || isCustomElementTagname(value)){
        return value;
      }else if(instance_Has_Widget(self, value)){
        return normalize_Widget(self, value);
      }else{
        debug_unrecognized_tagname(value, self);
        return;
      }
    }else if(validHouxitWidget(value)){
      return value;
    }
    debugHandler(`<Bulld/>.self property value failed to compile\nunrecognized data type`, self, true);
    return;
  }
  function built_in_build_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    if(!debug_self_prop_warn(vnode.props, self, ["hx:build", 'self' ])){ 
      return createRenderlessElement();
    }
    let props = vnode.props;
    const isRerender=self[$$$operands].initializedRender;
    props=memMove(props, true);
    const effect=vnode.compiler[Build]?.self || {};
    let prototype_=getBuildSelf(self, props.self);
    delete props.self;
    props=dynamicPropRemover(vnode.rawProps, 'self');
    props.key = vnode.key;
    const createElement=()=>{
      if(!prototype_){
        return createRenderlessElement();
      }
      vnode=h(prototype_, props, memMove(vnode.children || [], is_hyperscript));
      return createHouxitElement(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config);
    }
    let ELEMENT= createElement();
    ELEMENT.compiler_options.createElement=createElement;
    if(!isRerender){
      const flush=createPriorityFlush(effect, (obs)=>{
        prototype_=getBuildSelf(self, effect.runEffect().value);
        const EffectVNode=createElement();
        EffectVNode.compiler_options.createElement=createElement;
        let exch=renderVnodeDiffSequence(self, ELEMENT, EffectVNode, obs, isHouxitElement(hx_Element) ? hx_Element : null, {
          config
        });
        if(exch){
          ELEMENT=exch;
        }
      });
    }
    return ELEMENT;
  }
  function createPortalEntryDisplay(self, props){
    const target=unToken(props.target);
    const portalElement=target ? _GenerateRoot(target) : undefined;
    if(!portalElement || !IS_ELEMENT_NODE(portalElement)){
      debugHandler(`Unable to generate portal element\n\n
        Target not existing in the current document model layer\n\n
        Mount target for Portal widget is not a valid element node`, self, true);
      return;
    }
    return portalElement;
  }
  function built_in_portal_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    if(!debug_self_prop_warn(vnode.props, self, ["hx:portal", 'target'])) {
      return createRenderlessElement();
    }
    const portal=createPortalEntryDisplay(self, vnode.props);
    if(!portal) {
      return createRenderlessElement();
    }
    installSuspense(vnode.children, getBoundary(vnode));
    const portalContent=vnode.children ? _HouxitCoreRenderer(vnode.children, self, null, hx_Element, ctx, config) : [];
    const wrapper=new HouxitFragmentElement(portalContent, self, hx_Element, vnode.key);
    portal.append(wrapper.$element);
    wrapper.$element=_createFragment();
    wrapper._vnode_key=vnode.key;
    return wrapper;
  }
  function unwrapFragment(render){
    if(isHouxitFragmentElement(render)){
      return render.NodeList.list();
    }
    return isCollection(render) ? arrSet(render) : [ render ];
  }
  function getMCC(self, render, effect_stabilizer, config){
    let count=new Tuple();
    let buggy=false;
    for(let r of render.values()){
      const res=checkMemoContentValidity(self, r, effect_stabilizer, config);
      if(isHouxitWidgetElement(res)){
        count.add(res);
      }else if(!res){
        buggy=true;
      }
    }
    return [count, buggy];
  }
  function checkMemoContentValidity(self, render, effect_stabilizer, config){
    const renderless=createRenderlessElement();
    if(!render){
      return renderless;
    }
    const conf=config || {
      count:0,
    }
    render=unwrapFragment(render);
    let element;
    if(len(render) && (len(render) > 1 || !isHouxitWidgetElement(render[0]))){
      if(len(render) > 1){
        const [ count, buggy ]=getMCC(self, render, effect_stabilizer, conf);
        if(buggy){
          return;
        }
        element=count.at(0);
      }else{
        if(isHouxitFragmentElement(render[0])){
          return checkMemoContentValidity(self, render[0], effect_stabilizer, conf);
        }else if(isRenderlessElement(render[0])){
          return renderless;
        }
        debugHandler(`"<Memo>" expects atleast a single child widget instance\n\n<Memo> validation failed...\nNot a widget Instance`, self, true );
        debugHandler(`<Memo> expects a widget element instance...not a regular HTML element or unidentified DOM/Custom Wrapper`);
        return;
      }
    }else if(!len(render)){
      return renderless;
    }else if(len(render) && isHouxitWidgetElement(render[0])){
      conf.count++;
      return render[0];
    }
    if(!config){
      if(conf.count > 1){
        debugHandler(`[<Memo> Child Error] <Memo> child widget may have supassed the number of expected <Memo> container\n\n1 at most expected >>> ${conf.count} <<< found `, self, true);
        return;
      }
    }
    return isHouxitWidgetElement(element) ? element : renderless;
  }
  function built_in_memo_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    const isRerender=self[$$$operands].initializedRender;
    is_hyperscript=self[$$$core].map.is_hyperscript;
    const children=vnode.children;
    let { max, test }=vnode.props;
    max = Number(max);
    if(max && (max < 1 || isNaN(max))){
      debugHandler(`Failed validation of <Memo>.max param\n"${max}" ${isNaN(max) ? 'is not a number' : 'is less than 1'}`, self, true);
      max=Infinity;
    }else if(!max){
      max=Infinity;
    }
    if(test && !isPFunction(test)){
      debugHandler(`<Memo>.test prop expects a plain function returning Boolean\nINVALID <TEST> PROPERTY VALUE`, self);
    }
    const vault={
      storage:new Map(),
      keys:new Tuple(),
      caches:[],
      stableID:undefined,
      stabilityChecker(){
        return checkMemoContentValidity(self, this.Wrapper, true);
      },
      Wrapper:undefined,
      max,
      test
    }
    config.memoVault=vault;
    const render=_HouxitCoreRenderer(children, self, null, hx_Element, ssc, config);
    const res=checkMemoContentValidity(self, render);
    if(!res){
      return createRenderlessElement();
    }
    const memoVault=self[$$$compiler].memoVault;
    memoVault.add(vault);
    const index=memoVault.indexOf(vault);
    res.VNodeManager.isMemoChild={
      index,
      vault,
    }
    const Element= new HouxitFragmentElement(arrayInverter(render), self);
    Element.VN_Tree.FLUSHS.add(()=> memoVault.delete(vault));
    vault.Wrapper=Element;
    return Element;
  }
  function wrapSlotsContentDrives(self, nodeDriver, rnd, _SlotName, suspense){
    for(let element of rnd.values()){
      let name=element.slot_name;
      if(name && !_SlotName.has(name)){
        continue;
      }else if(!name) {
        if(isHouxitFragmentElement(element) && !isRenderlessElement(element) && !isSuspenseElement(element)){
          wrapSlotsContentDrives(self, nodeDriver, element.NodeList.list(), _SlotName, suspense);
          continue;
        }
        name='default';
      }
      if(name !== 'default' && len(nodeDriver[name+'X'])){
        debugHandler(`[<Suspense> Duplicate Slot Error] "${name}" slot has been duplicated in <Suspense>`, self, true);
        continue;
      }
      let vNode=isHouxitTextElement(element) ? element.$element :  element.VNodeManager.vNodeClass;
      if(isVNodeClass(vNode)) {
        if(vNode.props) {
          const { hasDir, getKey }=dirExistenceCheck(vNode.props, "$$slot");
          if(hasDir) delete vNode.props[getKey];
        }
        installSuspense(vNode, suspense);
      }
      nodeDriver[name+'X'].add(vNode);
    }
  }
  function normalizeEarlySlotsCompile(self, vNode, hx_Element, metrics, slotNames=[], suspense, config){
    const _SlotName=new Set(slotNames)
    if(_SlotName.has('default')){
      slotNames.push('default');
    }
    const isRerender=self[$$$operands].initializedRender;
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    let UnStableNodeList=[];
    const nodeDriver={}
    slotNames.forEach(n=>nodeDriver[n+'X']=new Tuple);
    if(is_hyperscript){
      for(const node of vNode.children.values()){
        if(isSlotInstance(node)){
          for( let [name, value ] of entries(node.slots)){
            if(!_SlotName.has(name)) continue;
            if( name !== 'default' && len(nodeDriver[name+'X'])){
              debugHandler('"'+name+'" slot already defined...\nduplicated slot for '+'"'+name+'" not allowed!!!', self, true);
                continue;
            }
            nodeDriver[name+'X'].add(value);
          };
        }else if(isChildrenNode(node)){
          installSuspense(node, suspense);
          nodeDriver.defaultX.add(node);
        }
      }
      return nodeDriver;
    }
    const preRenderState=self[$$$operands].initializedRender;
    self[$$$operands].initializedRender=true;
    config.suspenseFlag=true;
    let rnd= arrayInverter(_HouxitCoreRenderer(vNode.children, self, null,  hx_Element, metrics[2], config));
    wrapSlotsContentDrives(self, nodeDriver, rnd, _SlotName, suspense);
    delete config.suspenseFlag;
    self[$$$operands].initializedRender=preRenderState;
    return nodeDriver;
  }
  function createSuspenseFallback(self, suspense, [fallbackX, errorX], vnode, ssc, hx_Element, config){
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    const isRerender=self[$$$core].initializedRender;
    if(len(fallbackX) || len(errorX)){
      const createFallBack=(nodeList, name, errMsg)=>{
        const toggler=isRerender ? pass : smart_render_toggler(self);
        if(is_hyperscript){
          iterate(nodeList).each((node, key)=>{
            const arg=[];
            if(name === 'error'){
              arg.push(errMsg);
            }
            const nodeT=isFunction(node) ? node?.(...arg) : node;
            installSuspense(nodeT, suspense);
            nodeList.splice(key, 1, nodeT);
          });
        }else{
          if(name==='error'){
            ssc=wrapNamespaceBind(self, ssc, nodeList.at(0)?.filesFilter.bindings?.value || 'error', memMove(errMsg));
          }
        }
        let tree=suspense[name+'Element'];
        tree = tree || _HouxitCoreRenderer(nodeList, self, null, hx_Element, ssc, config);
        tree= isHouxitFragmentElement(tree) ? tree : new HouxitFragmentElement(arrayInverter(tree), self, hx_Element );
        toggler();
        suspense[name+'Element']=tree;
        return tree;
      }
      return [ 
        len(fallbackX) ? ()=>createFallBack(fallbackX, 'fallback') : null, 
        len(errorX) ? (err)=>createFallBack(errorX, 'error', err) : null ];
    }
    return [];
  }
  function installSuspense(list=[], suspense){
    if(!suspense){
      return;
    }
    list=arrayInverter(list);
    for(let node of list.values()){
      if(isVNodeClass(node)){
        node.filesFilter.suspense=suspense;
      }else if(isHouxitElement(node)){
        node.VNodeManager.suspense=suspense;
      }
    };
  }
  function handleSuspenseHooks(self, suspense, vnode, isRerender){
    const hooks=vnode.filesFilter.$$$Events || {};
    const obj={};
    iterate(['pending', 'resolved', 'failed']).each(name=>{
      obj['on'+name.at(0).toUpperCase()+name.slice(1)]=function(err){
        if(isRerender){
          return;
        }
        hooks[name]?.callbacks.list().forEach(fn=>fn(err));
      }
    })
    return obj;
  }
  function built_in_suspense_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    if(config.suspenseFlag){
      const Element=createRenderlessElement();
      Element.VNodeManager.vNodeClass=vnode;
      runSlotDirectiveCompile(self, config, vnode.props, vnode, Element, {
        is_hyperscript
      }, true);
      return Element;
    }
    const isRerender=self[$$$operands].initializedRender;
    is_hyperscript=self[$$$core].map.is_hyperscript;
    let suspense=new SuspenseBoundary(self, vnode);
    const superX=getBoundary(vnode);
    if(superX){
      suspense.super=superX;
      superX.metrics.priorities.add(suspense);
    }
    const parent=vnode.filesFilter.parent;
    suspense.hx_Element=isHouxitBuild(parent) ? parent.$build : parent;
    let { timeout, delay } = vnode.props || {};
    let awaitP=vnode.await;
    iterate({
      timeout,
      delay,
    }).each((value, key)=>{
      if(!hasOwn(vnode.props||{}, key) ){
        return iterate.Continue();
      }
      if(isNaN(Number(value))){
        debugHandler(`<Suspense> validation for "${key}" prop failed\n expects a Number value type`, self, true);
        return iterate.Continue();
      }else if(value < 0){
        debugHandler(`<Suspense>.[${key}] prop receives a negative value...`, self, true);
        return iterate.Continue();
      }
      suspense[key]=value;
    });
    let awaitCallback;
    if(hasOwn(vnode.props||{}, 'await') ){
      if(!isAsyncFunction(awaitP) && !isPromise(awaitP)){
        let throwE=true;
        if(isPFunction(awaitP)){
          awaitCallback=awaitP();
          if(isPromise(awaitCallback)){
            throwE=false
          }
        }
        if(throwE){
          debugHandler(`"await" <Suspense> prop expects an "async Function" , a "Promise object" or a callback that returns a "Promise object" object`, self, true);
        }
      }else{
        awaitCallback = isAsyncFunction(awaitP) ? awaitP() : awaitP;
      }
    }
    const metrics=[ siblings,  ctx, ssc ];
    const { defaultX, fallbackX, errorX, } = normalizeEarlySlotsCompile(self, vnode, hx_Element, metrics, ['default', 'fallback', 'error'], suspense, config);
    if(!isInfinity(suspense.timeout)){
      setTimeout(()=>{
        if(!suspense.state.resolved && !suspense.state.failed){
          suspense.errorCaptured(pass, {
            message:`[Suspense Tmeout] <Suspense> render wait timed out.`
          }, isRerender ? fallback : null);
          suspense.state.failed=true;
        }
      }, suspense.timeout);
    }
    suspense.promise= isPromise(awaitCallback) ? awaitCallback : Promise.resolve();
    const { onPending, onResolved, onFailed } = handleSuspenseHooks(self, suspense, vnode, isRerender);
    if(isPromise(awaitCallback)){
      suspense.activeAwaits++;
    }
    const [ fallback, error ]=createSuspenseFallback(self, suspense, [fallbackX, errorX], vnode, ssc, hx_Element, config);
    assign(suspense.drivers, {
      fallback,
      error
    });
    suspense.switchFallback=()=>{
      if(suspense.state.pending){
        const fallbackEl=safeCall(fallback)
        if(fallbackEl) HydrateSuspenseRender(self, suspense, fallbackEl, isRerender, config);
      }
    }
    suspense.triggerFailure=function(cb=pass, err, fb){
      const errorEl=isFunction(fb) ? fb() : error?.(err);
      if(errorEl) HydrateSuspenseRender(self, suspense, errorEl, isRerender, config);
      if(fb){
        return;
      }
      safeCall(cb);
      debugHandler(err?.message);
      onFailed(err);
    }
    suspense.triggerResolved=()=>{
      for(let sus of suspense.metrics.priorities.values()){
        const superY=sus.super;
        if(!superY){
          return iterate.Return();
        }
        sus.switchFallback();
      };
      onResolved()
    }
    let render;
    function createRender(){
      const renderX=_HouxitCoreRenderer(defaultX.list(), self, null,  hx_Element, ssc, config);
      return isArray(renderX) ? new HouxitFragmentElement(renderX, self) : renderX;
    }
    if(isPromise(awaitCallback)){
      suspense.state.pending=true;
      onPending();
      awaitCallback.then((response)=>{
        if(!is_hyperscript){
          const bindings=vnode.filesFilter.$$dir_PROVIDE_bindings;
          if(bindings){
            delete vnode.filesFilter.$$dir_PROVIDE_bindings;
            ssc=wrapNamespaceBind(self, ssc || {}, bindings?.value, response);
          }
        }
        suspense.activeAwaits--;
        const toggler=isRerender ? pass : smart_render_toggler(self);
        render= createRender();
        toggler();
      }).catch((err)=>{
        suspense.state.failed=true;
          suspense.errorCaptured(pass, {
            message:err.message
          });
      });
    }else{
      render=createRender();
    }
    if(suspense.state.postLoad){
      processBoundaryDriver(self, suspense, {
        isRerender,
        config,
        errorX,
        defaultX,
        fallbackX,
        render,
        is_hyperscript
      });
    }else{
      assign(suspense.state, {
        pending:false,
        resolved:true,
      });
    }
    let renderFallback;
    if(!isRerender && suspense.state.pending && suspense.delay){
      suspense.useFallback=true;
      setTimeout(()=>{
        if(fallback) {
          trackSuspenseConsistency(suspense, ()=>{
            if(suspense.state.pending && !suspense.state.failed && !suspense.state.resolved){
              HydrateSuspenseRender(self, suspense, fallback(), isRerender, config);
            }
          }, 'pending');
        }
      }, suspense.delay);
    }else if(suspense.state.pending){
      renderFallback=fallback?.();
    }
    if( (suspense.useFallback || !fallback) && suspense.state.pending){
      renderFallback= new HouxitFragmentElement([], self);
    }else if(suspense.state.resolved){
      renderFallback=new HouxitFragmentElement(render, self);
    }
    if(renderFallback){
      suspense.activeElement=renderFallback;
      renderFallback.VNodeManager[$suspenseElement]=suspense;
      renderFallback._vnode_key=vnode.key;
    }
    return renderFallback;
  }
  function trackSuspenseConsistency(suspense, action, current_state, a_p){
    let x=suspense.syncState();
    if(x==='pending'){
      if(current_state==='pending' && !suspense.super.drivers.fallback){
        action();
      }else suspense.super.disposals.add(action);
    }else if(x==='resolved' || !x){
      if(!x) action();
      else if(current_state==='failed' && !suspense.drivers.error){
        
        //consider switch the ancestorState to error
      }else if(current_state === 'pending' && !suspense.drivers.fallback){
        //consider maybe swutch ancestorState back to pending
      }else action();
    }else if(x === 'failed' && current_state==='failed' && !suspense.super.drivers.error){
      action();
    }
  }
  async function callLoadchains(suspense){
    for (const prom of suspense.loadChain.list().values()){
      await prom.then(()=>{
        suspense.loadChain.delete(prom);
        suspense.activeAwaits--;
      }).catch((err)=>{
        throw new Error(err);
      });
    }
  }
  function processBoundaryDriver(self, suspense, setup){
    suspense.state.pending=true;
    const { errorX, fallbackX, defaultX, config, isRerender, render, is_hyperscript }=setup;
      suspense.promise.then(()=>{
        (async function (){
          await callLoadchains(suspense);
          await callLoadchains(suspense);
        })().then(BoundaryProcessLoader).catch((err)=>{
          suspense.state.failed=true;
          suspense.errorCaptured(pass, {
            message:err.message
          });
        });
        function BoundaryProcessLoader(){
          if(suspense.state.failed) return;
          assign(suspense.state, {
            pending:false,
            resolved:true,
            failed:false
          });
          // suspense.triggerResolved();
          const action=()=>{
            HydrateSuspenseRender(self, suspense, render, isRerender, config);
            suspense.disposals.forEach(disposal=>disposal());
          }
          trackSuspenseConsistency(suspense, action, 'resolved');
        }
      })
  }
  function recurseParent(parent){
    if(isObject(parent) && hasOwn(parent, 'vNodeClass')){
      return recurseParent(parent.vNodeClass.filesFilter.parent);
    }else if(isHouxitBuild(parent)){
      return parent.$build
    }else if(isHouxitElement(parent)){
      return parent;
    }else if(isObject(parent) && hasOwn(parent, 'vNodeClass')){
      return recurseParent(parent.vNodeClass);
    }
    return parent
  }
  function HydrateSuspenseRender(self, suspense, element, isRerender, config){
    const { activeElement, vNode }=suspense;
    const rObj=suspense.rerenderObj;
    element._vnode_key=vNode.key;
    let parent= recurseParent(vNode.filesFilter.parent);
    parent=isHouxitBuild(parent) ? parent.$build : parent;
    const ind=parent.NodeList.indexOf(activeElement);
    if(ind >= 0){
      const key=parent.VN_Tree.KEYS_INDEXES[ind];
      parent.VN_Tree.LEAGUE_TREE[key][0]=element;
      parent.NodeList.replace(activeElement, element);
    }
    const initPosix=resolveTargetElement(activeElement);
    suspense.activeElement=element;
    initPosix.before(element.$element);
    unMountVNode(activeElement);
    element.VNodeManager[$suspenseElement]=suspense;
  }
  const BUILT_IN_TRANSITIONS={
    
  }
  const BUILT_IN_ANIMATIONS={
    
  }
  const hasMotionInstance=(self, name, mode)=>{
    const BUILT_IN_MOTION=mode === 'transitions' ? BUILT_IN_TRANSITIONS : BUILT_IN_ANIMATIONS;
    return _makeMap_(BUILT_IN_MOTION, name) || _makeMap_(self[$$$register][mode], name) || _wufHas_instance(name);
  }
  function normalize_Motion(self, name, mode){
    const BUILT_IN_MOTION=mode === 'transitions' ? BUILT_IN_TRANSITIONS : BUILT_IN_ANIMATIONS;
    return _makeMap_(BUILT_IN_MOTION, name) ? BUILT_IN_MOTION[name] : hasOwn(self[$$$register][mode], name) ? self[$$$register][mode][name] : _wufHas_instance(self, name) ? normalizeWUFBuildScope(self, name) : pass;
  }
  function generateMotion(self, { mode, value, key}){
    if(value && isString(value)){
      const mode=key==='transite' ? 'transitions' : 'animations';
      if(!hasMotionInstance(self, value, mode)){
        debugHandler(`Unrecognized ${mode} name "${value}"\n\n if this is a custom ${mode}, make sure it's registered through the local ${mode} option or global prototype '.${mode}()' method`,  self, true);
        return;
      }
      return normalize_Motion(self, value, mode);
    }else if(value && !isPFunction(value)){
      debugHandler(`<Motion> "${key}" prop expects ${key === 'animate' ? 'an animation' : 'a transition' } function>>>>\nValidation failed...`, self, true);
      return;
    }else if(value){
      return value;
    }
  }
  function built_in_motion_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    const isRerender=self[$$$operands].initializedRender;
    is_hyperscript=self[$$$core].map.is_hyperscript;
    config=assign({
      animate:undefined,
      transite:undefined,
      params:{},
      mode:'both',
    }, config);
    let { animate, transite, params, mode } = vnode.props || {};
    iterate({
      animate, 
      transite,
      params,
      mode
    }).each((value, key)=>{
      if(!hasOwn(vnode.props||{}, key) ){
        return;
      }
      if(key === 'animate' || key === 'transite'){
        value = generateMotion(self, {
          mode, 
          value,
          key
        });
      }else if(key === 'mode'){
        if(mode && !isString(value)){
          debugHandler(`<Motion> "params" prop requires a string value>>>\nvalidation failed...`, self, true);
          return;
        }else if( mode &&  !_makeMap_('in,out,both', value)){
          debugHandler('<Motion>.mode params property receives an Invalid mode argument...\nreceives "'+value+'"', self, true);
          return;
        }
      }else if(key==='params'){
        if(value && !isPObject(value)){
          debugHandler(`<Motion> "params" prop requires a plain object>>>\nvalidation failed...`, self, true);
          return;
        }else if(params){
          config.params=assign(config.params, params);
        }
        return;
      }else if(!value){
        return;
      }
      config[key]=value;
    });
    let render=_HouxitCoreRenderer(arrayInverter(vnode.children), self, null, hx_Element, ssc, config);
    render = isArray(render) ? new HouxitFragmentElement(render, self) : render;
    const create=(hx_Element)=>{
      iterate(['transite', 'animate']).each((type)=>{
        if(config[type]){
          createVnodeMotion(hx_Element, config[type], mode, type, config.params);
        }
      });
      createElementMotionEffect(self, hx_Element, {
        isRerender,
        is_hyperscript
      }, hx_Element.$element);
    };
    generateDeepReach(render, create, hx_Element, [ self, null, hx_Element, ssc, config ], isRerender);
    render._vnode_key=vnode.key;
    return render;
  }
  function beforeUnMountDelay(element, callback, self){
    let hx_Element, delay=false;
    if(isHouxitNativeElement(element)){
      hx_Element=element
    }else if(isNativeElement(element)){
      hx_Element=element._hx_Element.hx_Element;
    }
    const x_hooks=hx_Element?.VNodeManager?.motion_object?.hooks;
    const outHoots=x_hooks?.transition?.out;
    if(hx_Element){
      x_hooks.animation.from=hx_Element.$element.getBoundingClientRect();
    }
    if(!hx_Element || !len(outHoots)){
      callback();
      return;
    }
    async function out(){
      for(let hk of outHoots.values()){
        await hk();
      };
    }
    async function control(){
      await out();
      await tick(()=>callback());
    }
    return control();
  }
  function generateDeepReach(render, callback=pass, parent, args, isRerender){
    if(isHouxitNativeElement(render)){
      callback(render);
    }else if(isHouxitFragmentElement(render)){
      iterate(render.VN_Tree.LEAGUE_TREE).each(([vNode, k], ind)=>{
        generateDeepReach(vNode, callback, render, args, isRerender);
      });
    }else if(isHouxitWidgetElement(render)){
      generateDeepReach(render.widget_instance?.$build, callback, render, args, isRerender);
    }else if(isHouxitTextElement(render)){
      const span=_HouxitCoreRenderer([h('span')], ...args);
      parent=isHouxitBuild(parent) ? parent.$build : parent;
      if(!isRerender && parent.$element){
        const posix=document.createComment(c_str);
        render.$element.before(posix);
        callFlushs(render);
        render.$element.remove();
        posix.after(span.$element);
        span.$element.style.display='inline-block';
        span.$element.append(render.$element);
        posix.remove();
      }
      const ind=parent.NodeList.indexOf(render);
      const key=parent.VN_Tree.KEYS_INDEXES[ind];
      parent.VN_Tree.LEAGUE_TREE[key][0]=span;
      parent.NodeList.replace(render, span);
      span.NodeList.add(render);
      span.VN_Tree.LEAGUE_TREE[key]=[render, 0];
      span.VN_Tree.KEYS_INDEXES.add(key);
      callback(span);
      render = span;
    }
    return render;
  }
  function createVnodeMotion(hx_Element, motion, mode, type, params){
    const obj=hx_Element.VNodeManager.motion_object;
    obj.create(type, motion, {
      mode,
      params,
      element:hx_Element.$element
    });
  }
  function built_in_provider_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    
  }
  function hasDuplicateKeys(arr, getDuplicates=false){
    const sett=new Set();
    const getD=[];
    let res=false;
    for(let [ k, v] of getIterator(arr)){
      if(sett.has(v)){
        if(getDuplicates){
          getD.push([v, k ]);
          res=true;
        }else{
          return [ true ];
        }
      }
      sett.add(v);
    }
    return [ res, getD ];
  }
  function obtainListKeys(obj, self){
    if(isCollection(obj) || isIterator(obj)){
      if(isIterator(obj)){
        const iterRes=[];
        for(let [ k, v ] of getIterator(obj)){
          iterRes.push(v);
        }
        obj=iterRes;
      }
      let res= arrSet(obj);
      if(isArray(obj)){
        const [ hasDup, dups ] = hasDuplicateKeys(obj, true);
        if(hasDup){
          $warn(`[Houxit Warning] Duplicate primitive values detected in list resource.\nProvide a key for optimal granular updates.`, self, true);
          return keys(res);
        }
        return res;
      }
      return res;
    }else if(isObject(obj)){
      return(keys(obj));
    }else if(isNumber(Number(obj)) && !isNaN(Number(obj))){
      return Array.from({ 
        length: Number(obj)
      }, (_, i) => i + 1);
    }
  }
  function prioritize_list_effect(self, Template, vnode, value, effect, config, observer){
    const EffectVNode=Template.compiler_options.createElement();
    if(config.memoVault && !checkMemoContentValidity(self, EffectVNode)){
      return;
    }
    patchRenderNormalizerCall(self, Template, EffectVNode, observer, config);
  }
  function built_in_for_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    if(!debug_self_prop_warn(vnode.props, self, ["hx:for", 'each'])){ 
      return createRenderlessElement();
    }
    const { each } = vnode.props;
    const isRerender=self[$$$operands].initializedRender, NodeList = new Tuple();
    is_hyperscript=self[$$$core].map.is_hyperscript;
    const context=smartDextCtxMerging(ssc || {}, ctx || {});
    const provideBinding=vnode.filesFilter.$$dir_PROVIDE_bindings;
    const effect=vnode.compiler[vnode.prototype_].each;
    const metrics=[ hx_Element, NodeList, 'hx:for', context, ssc, effect.value, provideBinding ];
    const createElement=()=>blockForProcessor(self, vnode, "For", metrics, [ vnode.children], true, {
      effect
    });
    let template=createElement();
    template.compiler_options.createElement=createElement;
    return template;
  }
  function safeCall(callback, ...args){
    return isXtruct(callback, ...arrSet(args)) || isPFunction(callback) ? callback(...arrSet(args)) : callback;
  }
  function built_in_if_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    if(!debug_self_prop_warn(vnode.props, self, ["hx:if", 'test' ])){ 
      return createRenderlessElement();
    }
    const { test } = vnode.props;
    const isRerender=self[$$$operands].initializedRender;
    is_hyperscript=self[$$$core].map.is_hyperscript;
    const context=smartDextCtxMerging(ssc || {}, ctx || {});
    const effect=_createEffectBase( ()=>{
      return unwrap(is_hyperscript || !isString(test) ? safeCall(test) : _$runModelBind(self, test, smartDextCtxMerging(context, ssc || {})));
    });
    let value=effectRunner(effect).value;
    config.effect=effect;
    const NodeList=new Tuple();
    if(!isRerender && !is_hyperscript){
      vnode.compiler[If]={
        test:effect
      }
    }
    const metrics=[ hx_Element, NodeList, 'hx:if', context, ssc, value ];
    const createElement=()=> blockIFPreprocessor(self, vnode, 'If', metrics, [vnode.children], config, true);
    config.createElement=createElement;
    const { flush } = createElement();
    const template=new HouxitFragmentElement(NodeList.list(), self, hx_Element);
    config.ELEMENT=template;
    template.VN_Tree.FLUSHS.add(flush);
    return template;
  }
  function built_in_else_if_widget(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    blockElseIfPreprocessor(self, vnode, config, 'hx:else'+(vnode.prototype_ === ElseIf ? '-if' : ''), true);
    return createRenderlessElement();
  }
  function simulate_buitin_widget_syms(vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config){
    const { prototype_ } = vnode;
    const props_object={};
    hx_Element={
      subscriptions:new Tuple(),
      PropFlags:new Tuple(),
      vNodeClass:vnode,
    }
    if(_makeMap_([Fragment, Self, Build, Portal, Suspense, Motion, If, ElseIf, For, Memo], prototype_)){
      if(prototype_ === Build){
        vnode.rawProps=memMove(vnode.props, is_hyperscript);
      }
      Props_dilation_compile(vnode, self, hx_Element, {
        is_hyperscript,
        ctx,
        ssc
      }, props_object, config);
      vnode.props=props_object;
    }
    const resArgs=[vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config];
    if(prototype_ === Fragment ) {
      return built_in_fragment_widget(...resArgs);
    }else if(prototype_ === Self ) {
      return built_in_self_widget(...resArgs);
    }else if(prototype_ === Build ) {
      return built_in_build_widget(...resArgs);
    }else if(prototype_ === Portal) {
      return built_in_portal_widget(...resArgs);
    }else if(prototype_ === Memo) {
      return built_in_memo_widget(...resArgs);
    }else if(prototype_ === Suspense) {
      return built_in_suspense_widget(...resArgs);
    }else if(prototype_ === Motion) {
      return built_in_motion_widget(...resArgs);
    }else if(prototype_ === Provider) {
      return built_in_provider_widget(...resArgs);
    }else if(prototype_ === For) {
      return built_in_for_widget(...resArgs);
    }else if(prototype_ === If) {
      return built_in_if_widget(...resArgs);
    }else if(_makeMap_([ElseIf, Else], prototype_)) {
      return built_in_else_if_widget(...resArgs);
    }
  }
  function createHouxitElement(vnode, self, is_hyperscript, ctx, siblings, ssc,  hx_Element, config={}){
    config=assign({}, config);
    const isRerender=self[$$$operands].initializedRender;
    if(isRerender && vnode.filesFilter.memMoved) {
      delete vnode.filesFilter.memMoved;
    }
    if(!vnode.filesFilter.memMoved && !isRerender){
      vnode=memMove(vnode, true);
      vnode.filesFilter.memMoved=true;
    }
    ctx=smartDextCtxMerging(assign({}, ctx || {}), ssc || {});
    ssc=null;
    const saveGarbageContent = NormalizeDirGarbage(vnode.props||{});
    const { has_conditional, hasFor } = saveGarbageContent;
    const hasDir=hasFor || has_conditional;
    let ELEMENT;
    const { prototype_ } = vnode;
    const args=[vnode, self, is_hyperscript, ctx, siblings, ssc, hx_Element, config, null];
    if(!is_hyperscript && hasDir ) {
      const createElement=()=>HX_ELEMENT_MANAGER(self, vnode, null, hx_Element, siblings, saveGarbageContent, ctx, config);
      ELEMENT = createElement();
      createElement_Smart(ELEMENT, createElement);
    }else if(isHouxitBuiltinSymbolWidget(prototype_)) {
      ELEMENT = simulate_buitin_widget_syms(...args);
    }else if(validHouxitWidget(prototype_)) {
      ELEMENT = flattenWidgetAndAsyncBuild(...args);
    }else if(isString(prototype_)){
      if(IS_VALID_TAGNAME(prototype_)) {
        ELEMENT = new  HouxitNativeElement(...args);
      }else if(isCustomElementTagname(prototype_)) {
        ELEMENT = new HouxitCustomNativeElement(...args);
      }else {
        debug_unrecognized_tagname(prototype_, self);
      }
    }else if(isCustomBuiltinSymWidget(prototype_)){
      const factory=CUSTOM_BUILT_IN_WIDGETS_STORE.get(prototype_);
      return factory(...args);
    }
    return ELEMENT;
  }
  function createElement_Smart(ELEMENT, fn){
    if(!ELEMENT.compiler_options.createElement){
      ELEMENT.compiler_options.createElement=fn;
    }
  }
  function debug_unrecognized_tagname(tagname, self){
    debugHandler(`[unexpected template tagname]  "${tagname}" is not a valid html element, or a registered widget instance.\n\nif this is a customElement, make sure its defined through the "customElements.define()" method `, self, true);
  }
  function isCustomElementTagname(tagname){
    return isPFunction(customElements.get(tagname));
  }
  function getBoundary(instance){
    return isHouxitBuild(instance) ? instance[$$$core].virtualNode.filesFilter.suspense : instance?.[isVNodeClass(instance) ? 'filesFilter' : 'VNodeManager']?.suspense;
  }
  function extendBoundary(self, parentInstance){
    
  }
  function smart_render_toggler(self, t=false){
    const initializedRender=self[$$$operands].initializedRender;
    const toggler=(cond=true)=>{
      if(initializedRender){
        self[$$$operands].initializedRender=cond;
      }
    }
    toggler(t);
    return toggler;
  }
  function asyncWidgetBoundaryWrap(boundary, action, current_state, a_p){
    if(!boundary || !a_p.config.suspensible) return action();
    const x=boundary.syncState();
    if(x === 'resolved') {
      if(!x) return action();
      if(_makeMap_( 'resolved,pending', current_state)){
        return action();
      }else if(current_state === 'failed' && !boundary.drivers.error){
        return action();
      }
    }else if(x==='pending'){
      if(current_state==='resolved'){
        boundary.disposals.add(action);
      }
    }
  }
  function createAsyncFallback(self, a_p, hx_Element, ssc, VN_Tree, boundary, config){
    const fallback=a_p.config.fallback;
    let useFallback=false, useDefault=false, ELEMENT
    if(fallback){
      if(!isChildrenNode(fallback)){
        debugHandler(`[Invalid falllback Element]  fallback content of "asyncWidget" is not a valid Houxit element`, self, true);
        return;
      }
      const fall_content=()=>{
        const toggler=smart_render_toggler(self);
        installSuspense(fallback, boundary);
        let tree= _HouxitCoreRenderer(arrayInverter(fallback), self, null, hx_Element, ssc, config);
        tree= new HouxitFragmentElement(arrayInverter(tree), self, hx_Element );
        tree[AsyncHxElementTrackerKey]={};
        toggler();
        useFallback=true;
        const { activeElement } = a_p;
        if(activeElement){
          const posix=resolveTargetElement(ELEMENT);
          posix.before(tree.$element);
          unMountVNode(ELEMENT);
          reinstallFallbackResponses(self, tree, a_p.fallback[AsyncHxElementTrackerKey]);
        }
        ELEMENT=tree;
        a_p.activeElement=ELEMENT;
      }
      const activateFallback=()=>{
        if((a_p.resolved || a_p.failed) && !a_p.pending) {
          return;
        }
        asyncWidgetBoundaryWrap(boundary, fall_content, 'pending', a_p);
      }
      if( a_p.config.delay) {
        setTimeout(activateFallback, a_p.config.delay);
      }else{
        ELEMENT=activateFallback();
      }
    }
    if( ELEMENT && (useFallback || !boundary)) {
      return ELEMENT;
    }
    ELEMENT=new HouxitFragmentElement([], self, hx_Element);
    ELEMENT[AsyncHxElementTrackerKey]={};
    a_p.activeElement=ELEMENT;
    useDefault=true;
    return ELEMENT;
  }
  function normalize_lazy_return(self, ELEMENT, a_p, boundary){
    a_p.resolved=true;
    ELEMENT[AsyncHxElementTrackerKey]={};
    const { activeElement } = a_p;
    const posix=resolveTargetElement(activeElement);
    posix.before(ELEMENT.$element);
    unMountVNode(activeElement);
    reinstallFallbackResponses(self, ELEMENT, a_p.fallback[AsyncHxElementTrackerKey]);
  }
  function asyncErrorElement(self, a_p, hx_Element, ssc, boundary, config){
    const toggler=smart_render_toggler(self);
    installSuspense(a_p.config.error, boundary);
    let FailedElement= _HouxitCoreRenderer(arrayInverter(a_p.config.error), self, null, hx_Element, ssc, config);
    FailedElement= new HouxitFragmentElement(arrayInverter(FailedElement), self, hx_Element );
    toggler();
    FailedElement[AsyncHxElementTrackerKey]={};
    if(!boundary){
      const posix=resolveTargetElement(a_p.activeElement);
      posix?.before(FailedElement.$element);
      unMountVNode(a_p.activeElement);
    }
    reinstallFallbackResponses(self, FailedElement, a_p.activeElement[AsyncHxElementTrackerKey]);
    a_p.failed=true
  }
  function flattenWidgetAndAsyncBuild(vnode, self, is_hyperscript=false, ctx, siblings, ssc, hx_Element, config, isWidget=false){
    const { prototype_ } = vnode;
    if(!isAsyncWidget(prototype_)) {
      return new HouxitWidgetElement(...arguments);
    }else if(config.suspenseFlag){
      const Element=createRenderlessElement();
      Element.VNodeManager.vNodeClass=vnode;
      runSlotDirectiveCompile(self, config, vnode.props, vnode, Element, {
      is_hyperscript
    }, true);
      return Element;
    }
    const boundary=getBoundary(vnode);
    let widget=prototype_;
    const Oa_p=widget[$asyncVnodeKey];
    const a_p=memMove(Oa_p);
    a_p.resolved=false;
    a_p.pending=false;
    a_p.failed=false;
    a_p.activeElement=undefined;
    const VN_Tree=()=>hx_Element?.VN_Tree || self?.$build?.VN_Tree;
    if(!a_p.postLoad || !Oa_p.cache){
      let future=a_p.load();
      if(!isPromise(future)){
        debugHandler(`asyncWidget instance load callback expects a javascript Promise instance object as a return value`, self, true);
        return;
      }
      const timeout=a_p.config.timeout;
      let timeOutId;
      if(!isInfinity(timeout)){
        timeOutId=setTimeout(()=>{
          if(!a_p.resolved && !a_p.failed){
            asyncWidgetBoundaryWrap(boundary, ()=>asyncErrorElement(self, a_p, hx_Element, ssc, boundary, config), 'failed', a_p);
            debugHandler(`["asyncWidget()" timeout Error] load time exceeds the asyncWidget.timeout config limit`, self, true);
          }
        }, timeout);
      }
      const failureHandler=er=>{
        a_p.failed=true;
        debugHandler(er);
        if(timeOutId) clearTimeout(timeOutId);
        if(boundary){
            //
        }
        asyncErrorElement(self, a_p, hx_Element, ssc, boundary, config);
        debugHandler(`Failed resolving state during an "async build()" process\n\nReason::"${er.message}"`, self, true);
      }
      future=future.then((res)=>{
        if(isObject(res) && isUndefined(res.prototype) && hasOwn(res, 'default')) {
          res=res.default;
        }
        a_p.cache=res;
        Oa_p.cache=res;
        a_p.postLoad++;
        assign(vnode, {
          prototype_:res,
          GeneticProvider:res,
          type:res
        });
        vnode.filesFilter[$asyncVnodeKey]={
          prototype_,
        }
        assign(a_p, {
          resolved:true,
          pending:false
        });
        try{
          const toggler=smart_render_toggler(self);
          let ELEMENT=new HouxitWidgetElement(...arguments);
          toggler();
          const awaitReady = ELEMENT.widget_instance[$$$operands].awaitReady;
          const awaitCallback=()=>{
            normalize_lazy_return(self, ELEMENT, a_p, boundary);
            a_p.activeElement=ELEMENT;
            if(timeOutId) clearTimeout(timeOutId);
          }
          isPromise(awaitReady) ? (awaitReady.then(()=>{
            awaitCallback();
          }).catch(failureHandler)) : awaitCallback();
        }catch(err){
          failureHandler(err);
        } 
      }).catch(failureHandler);
      if(boundary){
        boundary.activeAwaits++;
        boundary.loadChain.add(future);
      }
      const tree=createAsyncFallback(self, a_p, hx_Element, ssc, VN_Tree, boundary, config);
      a_p.fallback=tree;
      return tree;
    }else {
      widget=a_p.cache;
      assign(vnode, {
        prototype_:widget,
        GeneticProvider:widget,
        type:widget
      });
      assign(a_p, {
        resolved:true,
        pending:false
      })
      const ELEMENT=new HouxitWidgetElement(...arguments);
      ELEMENT[AsyncHxElementTrackerKey]={};
      a_p.activeElement=ELEMENT;
      return ELEMENT;
    }
  }
  function reinstallFallbackResponses(build, ELEMENT, fall_Element){
    const { hx_Element, key, self } = fall_Element;
    if(self) {
      self.$build=ELEMENT
    }else if(hx_Element){
      hx_Element.VN_Tree.LEAGUE_TREE[key][0]=ELEMENT
      hx_Element.NodeList.replace(fall_Element, ELEMENT);
    }
  }
  function smartDextCtxMerging(context, ssc, merge=false){
    if(!(context || ssc)) {
      return merge ? context || ssc : assign({}, context || ssc || {}); 
    }
    context=merge ? context : assign({}, context);
    if(hasOwn(ssc, $$dexTransformKey)){
      if(!hasOwn(context, $$dexTransformKey) && hasOwn(ssc, $$dexTransformKey)) {
        context[$$dexTransformKey]={
          sourcesArray:[],
          syntaxArray:[]
        }
      }else if(hasOwn(context, $$dexTransformKey)){
        if(!merge) {
          context[$$dexTransformKey]=assign({}, context[$$dexTransformKey]);
        }
      }
      context[$$dexTransformKey].syntaxArray=arrSet(new Set([ ...context[$$dexTransformKey].syntaxArray, ...ssc[$$dexTransformKey].syntaxArray ]));
      context[$$dexTransformKey].sourcesArray=arrSet(new Set([ ...context[$$dexTransformKey].sourcesArray, ...ssc[$$dexTransformKey].sourcesArray ]));
      ssc=assign({}, ssc);
      delete ssc[$$dexTransformKey];
    }
    context=assign(context, ssc);
    return context;
  }
  function evaluateKeyOnElement(hx_Element, key, self){
    if(!isHouxitElement(hx_Element)) {
      return;
    }else if(!isNull(key) && !isPrimitive(key)){
      debugHandler(`key prop value expects primitive values`, self, true);
      return;
    }else if(!isNull(key)){
      hx_Element._vnode_key=key;
    }
  }
  function createFragmentMove(vElement){
    
  }
  function HouxitTemplateGenerators(vnode, self, is_hyperscript=false, ctx, siblings, ssc, hx_Element, config, isWidget=false){
    vnode.hx_Element=this;
    this.VNodeManager.vNodeClass=vnode;
    is_hyperscript=vnode.is_hyperscript;
    this.is_hyperscript=is_hyperscript;
    const isRerender=self[$$$operands]?.initializedRender;
    if(vnode.filesFilter.suspense){
      this.VNodeManager.suspense=vnode.filesFilter.suspense;
    }
    if(config.topLevelSlotContext && !isHouxitWidgetElement(vnode.filesFilter.parent)){
      delete config.topLevelSlotContext;
    }
    let { type, props, children, key } = vnode;
    ctx=smartDextCtxMerging(ctx || {}, ssc || {});
    this.LabContext=smartDextCtxMerging(this.LabContext, ctx);
    vnode.hx_Element=this;
    if(isWidget) {
      this.VNodeManager.rawChildren=()=> vnode.rawChildren;
    }
    this.compiler_options.parent=vnode.filesFilter.parent;
    bufferDirSetups(self, props, this);
    const customElementsArgs=[...arguments];
    customElementsArgs.pop();
    const element=_generateTemplateElement(vnode, self, this, siblings,
    vnode.IS_RENDERLESS, customElementsArgs, config);
    if(!isRerender && isHouxitNativeElement(this)) {
      HouxitElementLifeCircleHooks(self, element, this);
    }
    this.$element=element;
    evaluateKeyOnElement(this, vnode.key, self);
  }
  class HouxitNativeElement extends HouxitElement{
    constructor(vnode){
      super(...arguments);
      this.VNodeManager.SSRVnode=new vNodeClass();
      HouxitTemplateGenerators.call(this, ...arguments);
      this.prototype_=vnode.type;
    }
  }
  class HouxitCustomNativeElement extends HouxitNativeElement{
    constructor(){
      super(...arguments);
    }
  }
  class HouxitWidgetElement extends HouxitElement{
    constructor(vnode){
      super(...arguments);
      this.VNodeManager.SSRVnode=[];
      HouxitTemplateGenerators.call(this, ...arguments, true);
      this.prototype_=vnode.prototype_;
    }
  }
  class HouxitFragmentElement extends HouxitElement{
    constructor(vnodes=[], self, hx_Element, key, resource){
      super();
      if(!isHouxitBuild(self)) {
        self=null;
      }
      vnodes=arrayInverter(vnodes);
      let index=0;
      const isRerender = self ? self[$$$operands].initializedRender : undefined;
      this.VNodeManager.SSRVnode=[];
      const inDom=(isHydration(self) || !isSSRCompiler(self)) && inBrowserCompiler && !isRerender;
      const isSSR=isSSRCompiler(self);
      const isHy=isHydration(self);
      if(!isSSR && !isRerender) {
        this.VNodeManager.posix=[ document.createComment(c_str), document.createComment(c_str)];
      }
      const fragment = !isSSR && !isRerender ?  _createFragment() : isSSR ? [] : isRerender ? undefined : undefined;
      const [start_el, end_el ]=this.getSSRPosixEl();
      if(start_el && !isSSR) {
        fragment?.append(start_el);
      }
      for(let [ key, node ] of vnodes.entries()){
        if(!(node ?? isRerender) && !fragment) {
          continue;
        }
        if(isHouxitElement(node) && !isSSR) {
          this.NodeList.add(node);
        }
        fragment?.[(isSSR ? 'push' : 'append')](smartSSRGrab(node, isSSR, isHy));
        if(isAsyncTrackerElement(node)) {
          node[AsyncHxElementTrackerKey]={
            key,
            hx_Element:this
          }
        }
        resolve_keyed_mapping(this, node, index, self, resource);
        index ++;
      }
      if(end_el && !isSSR) {
        fragment?.append(end_el);
      }
      evaluateKeyOnElement(this, key, self);
      if(!isRerender){
        this.VN_Tree.ELEMENTS=()=>{
          const recorder=new Tuple();
          const [start, end] = this.getSSRPosixEl();
          if(!isInDomNode(start)) {
            return recorder;
          }
          let node = start;
          while(node){
            let next = node.nextSibling;
            recorder.add(node);
            if(node === end) {
              break;
            }
            node = next;
          }
          return recorder;
        }
      }
      this.$element=isHy && !isRerender ? new SSRFragment(fragment) : fragment;
      if(isSSR) {
        if(isHy) {
          this.$element.hx_Element=this;
        }
        this.VNodeManager.SSRVnode=this.$element;
      }
    }
    getSSRPosixEl(){
      return this.VNodeManager.posix;
    }
    upload(callback){
      return this.VN_Tree.ELEMENTS().forEach((el, ind)=> callback(el, ind));
    }
  }
  class HouxitRenderlessElement extends HouxitFragmentElement{
    constructor(){
      super();
      this.IS_RENDERLESS=true;
    }
  }
  class HouxitTextElement extends HouxitElement{
    constructor(text, self, hx_Element, fall, config={}){
      super();
      if(config.suspenseFlag){
        this.$element=text;
        return
      }
      const isRerender=self[$$$operands].initializedRender;
      const isHy=isHydration(self);
      this.is_hyperscript= self[$$$core].map.is_hyperscript;
      if(hx_Element) {
        this.LabContext=assign({}, hx_Element?.LabContext || {});
      }
      if(!this.is_hyperscript && fall ) {
        this.LabContext=smartDextCtxMerging(this.LabContext, fall);
      }
      this.$element=_createTextElement(self, text, this, isRerender, config);
      this.prototype_=isRerender || isSSRCompiler(self) ? this.$element : this.$element.textContent;
      if(isSSRCompiler(self)) {
        this.$element=isHy ? new SSRText(this.prototype_) : this.prototype_;
        this.VNodeManager.SSRVnode=this.$element;
        if(isHy) {
          this.$element.hydrationFlushs.add(element=> this.$element=element);
        }
      }
      if(this.is_hyperscript && config.lazy_effect && !isRerender){
        const flush=createPriorityFlush(config.lazy_effect, (obs)=>{
          if(IS_TEXT_NODE(this.$element)){
            this.$element.textContent=config.lazy_effect.runEffect().value;
          }
        });
        this.VN_Tree.FLUSHS.add(flush);
      }
    }
  }
  class MemoWrapperElement extends HouxitWidgetElement{
    constructor(){
      super(...arguments);
    }
  }
  function isMemoWrapperElement(el){
    return el instanceof MemoWrapperElement;
  }
  function smartSSRGrab(node, isSSR, isHy){
    let collectings= !isSSR ? node.$element : !isHouxitElement(node) ? node : node.$element;
    if((isCollection(collectings) || isHouxitWidgetElement(node)) && isHy){
      if(!isCollection(collectings) && isHouxitWidgetElement(node)) {
        collectings=node.widget_instance.$build.$element;
      }else{
        collectings=new SSRFragment(collectings);
        collectings.hx_Element=isHouxitWidgetElement(node) ? node.widget_instance.$build : node;
      }
    }
    return collectings;
  }
  function createRenderlessElement(callback=pass){
    const renderlessElement=new HouxitRenderlessElement();
    callback(renderlessElement);
    return renderlessElement;
  }
  function isSameHouxitElementType(el1, el2){
    const isHE=isHouxitElement(el1) && isHouxitElement(el2);
    return isHE && isS(el1.__proto__.constructor, el2.__proto__.constructor);
  }
  function bufferDirSetups(self, props, hx_Element){
    if(!props || !props[dir$$__render] || !len(props[dir$$__render])) {
      return;
    }
    for(let dir of props[dir$$__render].values()){
      if(isChar(dir.name) && !isHouxitDirective(dir.name)){
        if(!hasProp(self[$$$register].directives, dir.name) || !self[$$$register].directives[dir.name]){
          debugHandler(`"${dir.name}" is not a registered directive\n`, self, true);
          return;
        }else if(!validateType(self[$$$register].directives[dir.name], [Function, Object])){
          debugHandler(`directive resolved at "${dir.name}" is not a valid directive data value`,self, true);
          return;
        }
        dirMap(self, dir, self[$$$register].directives[dir.name], hx_Element );
        props[dir$$__render].delete(dir);
      }else if(!isString(dir.name)) {
        dirMap(self, dir, dir.name, hx_Element);
        props[dir$$__render].delete(dir);
      }
    }
  }
  function dirMap(self, resolver, dir, hx_Element){
    if(isPObject(dir)){
      for(let [name, hook] of entries(dir)){
        if(_makeMap_(directivesHooksMap, name)){
          if(!isPFunction(hook)){
            debugHandler(`"${name} directive hook received at $$ is not a function`, self, true);
            return;
          }
          hook.value=resolver.value;
          hook.modifiers=resolver.modifiers
          hx_Element[name+'_hook'].add(hook);
        }
      }
    }else if(isPFunction(dir)){
      dir.value=resolver.value;
      dir.modifiers=resolver.modifiers;
      hx_Element.created_hook.add(dir);
    }
  }
  function __renderSlots__(options){
    if(!validateCollectionArgs(arguments, {
      count:1,
      validators:[[Object, Function]],
      required:[true],
      name:"enSlot()"
    })) {
      return ;//renderimg of slots contents in hyperscript;
    }
    if(isClass(options)){
      debugHandler(`Uresolved function type ---- received at "enSlot"\n\nSeems to be a "class" instance value type`);
      return;
    }else if(isPFunction(options)) {
      options={
        default:options
      }
    }
    return new slotInstanceMap(options || {});
  }
  function enSlot(options){
    return __renderSlots__(...arguments);
  }
  const isHouxitWidgetElement=vnode=> vnode instanceof HouxitWidgetElement;
  function transpileDirectiveShorhand(key){
    return (hasAsterisks_bind(key) ? '$$bind:' : hasAt_bind(key) ? '$$on:' : hasAsh_bind(key) ? '$$slot:' : key[0])+key.slice(1);
  }
  function dirExistenceCheck(props, dir){
    let RawMap={ 
      hasDir:false
    };
    for(let [key, val] of entries(props)){
      const keyP=key;
      key = transpileDirectiveShorhand(key);
      if(key.startsWith(dir)) {
        return {
          hasDir:true,
          getDir:val,
          getKey:keyP
        }
      }
    }
    return RawMap;
  }
  function resolve_keyed_mapping(hx_Element, child, index, self, resource){
    let key=isHouxitTextElement(child) ? index : (child._vnode_key);
    key = !key ? null : isNaN(Number(key)) ? key : Number(key);
    const KEYS_INDEXES=hx_Element.VN_Tree.KEYS_INDEXES;
    if(!isNull(key) && KEYS_INDEXES.has(key)){
      debugHandler(`keyed element seemes to have been dublicated within this render siblings >>"${key}"<<<\n\nCheck for possible duplicates in special key props\n`, self, true);
      return;
    }
    if(resource && isNull(key)){
      if(KEYS_INDEXES.has(key)){
        key=index;
      }else{
        key=resource[index];
      }
    }
    if(isNull(key)){
      key=index;
    }
    KEYS_INDEXES.add(key);
    hx_Element.VN_Tree.LEAGUE_TREE[key]=[ child, index ];
  }
  function generateTemplateElement(vnode, self, hx_Element, siblings, IS_RENDERLESS, customElementsArgs, config ){
    return _generateTemplateElement( ...arguments );
  }
  function _generateTemplateElement(virtualNode, self, hx_Element, siblings, IS_RENDERLESS, customElementsArgs, config){
    const { prototype_ } = virtualNode;
    if(isString(prototype_) && IS_VALID_TAGNAME(prototype_)) {
      return _createNativeElement(...arguments);
    }else if(isString(prototype_)) {
      return generateCustomNativeElement(...arguments );
    }else {
      return _createWidgetElement(...arguments );
    }
  }
  function generateCustomNativeElement(vnode, self, hx_Element, siblings, IS_RENDERLESS, customElementsArgs, config ){
    let { type, props, children, key} = vnode;
    const argsCount=len(arguments);
    const is_hyperscript=hx_Element?.is_hyperscript || false;
    const isRerender=self[$$$operands]?.initializedRender;
    if(isRerender) {
      return;
    }
    const element=document.createElement(type);
    element._set_compiler_options(...arguments);
    return element
  }
  function _createNativeElement(virtualNode, self, hx_Element, siblings, IS_RENDERLESS, customElementsArgs, config, o){
    config=assign({}, config);
    let { type, props, children, key } = virtualNode;
    const argsCount=len(arguments);
    const isSSR=isSSRCompiler(self);
    const isHy=isHydration(self);
    let element;
    const is_hyperscript=virtualNode.is_hyperscript;
    const isRerender=self[$$$operands]?.initializedRender;
    if(!isRerender && isString(type)){
      element=isSSR ? hx_Element.VNodeManager.SSRVnode : document.createElement(type);
      if(isSSR) {
        element.type=type;
      }
      if(hx_Element && isHouxitBuild(self)){
        hx_Element.hx_build=self[$$$ownProperties].hx_build
        if(self[$$$ownProperties].hx_build) {
          if(isSSR) {
            element.props['data-hx_build']=self[$$$ownProperties].hx_build;
          }else {
            element.setAttribute("data-hx_build", self[$$$ownProperties].hx_build);
          }
        }
      }
      if(!isRerender) {
        element._hx_Element={
          hx_Element,
          _vnode_key:virtualNode.key
        };
        if(hx_Element){
          whenMounted(self, element, ()=>{
            hx_Element.VNodeManager.motion_object.hooks.animation.from=element.getBoundingClientRect();
          });
        }
      }
    }
    if(isHy){
      element.filesFilter.$ssr_kit.hydrationFlushs.add((element)=>{
        hx_Element.$element=element;
      });
    }
    const metrics ={
      is_hyperscript,
      isRerender
    }
    runSlotDirectiveCompile(self, config, props, virtualNode, hx_Element, metrics);
    if(config.suspenseFlag){
      return
    }
    let childNodes;
    if(children && !IS_HTML_VOID_TAG(type)) {
      if(!isRerender && hasOwn(virtualNode.filesFilter ,'dir--raw')){ 
        const item= _$runModelBind(self, virtualNode.filesFilter['dir--raw'], hx_Element, true);
        if(item){
          const content=escapeDecoder(virtualNode.rawChildren);
          if(!isRerender) {
            if(isSSR) {
              element.props.innerHTML=content;
            }else {
              element.innerHTML=content; 
            }
          }else {
            hx_Element.$element=content;
          }
        }
      } else {
        config={
          ...config,
          slotTap:{
            parent:hx_Element
          },
        };
        installSuspense(children, getBoundary(virtualNode));
        childNodes=_HouxitCoreRenderer(children, self, true, hx_Element, assign({}, hx_Element.LabContext), config);
        childNodes = arrayInverter( childNodes );
        let index=0;
        if(isSSR) {
          element.children=[];
        }
        for(let [key, els] of childNodes.entries()){
          if(!els || ( !isRerender && (isSSR && isSSRText(els.$element) ? !els.$element.content : !els.$element))) {
            continue;
          }
          if(els){
            hx_Element.NodeList.add(els);
          }
          if(isSSR) {
            element.children.push(smartSSRGrab(els, isSSR, isHy));
          }else if(!isRerender && els.$element) {
            element.append(els.$element);
          }
          if(isAsyncTrackerElement(els)) {
            node[AsyncHxElementTrackerKey]={
              key,
              hx_Element
            }
          }
          resolve_keyed_mapping(hx_Element, els, index, self);
          index++;
        }
      }
    }
    if(props) {
      Props_dilation_compile(virtualNode, self, hx_Element, metrics, element, config);
    }
    if(!isRerender && virtualNode.prototype_==='slot' && !(isSSR ? element?.props.name.trim() : element.name?.trim())){
      slotNamingTRANSITION(self, {
        value:'default'
      }, element, hx_Element, {
        is_hyperscript,
        isRerender,
        vNode:virtualNode
      });
      childNodes?.forEach((node)=> hx_Element.VNodeManager.patchFlags.subscriptions.extend(node.VNodeManager.patchFlags.subscriptions));
    }
    const { hasDir:hasModel } = dirExistenceCheck(props||{}, '$$model');
    if(!isRerender){
      return element;
    }
  }
  function createNativeElement(virtualNode,  hx_Element, siblings, isRerender, IS_RENDERLESS  ){
    return _createNativeElement( ...arguments );
  }
  function _createWidgetElement(virtualNode, self, hx_Element, siblings,IS_RENDERLESS, customElementsArgs, config){
    let { type, props, children, prototype_ } = virtualNode;
    const is_hyperscript=hx_Element?.is_hyperscript;
    const isRerender=self[$$$operands].initializedRender;
    let buildInstance;
    const slotsCompilerArgs={
      self,
      hx_Element,
      isRerender:self[$$$operands]?.initializedRender,
      ...config
    }
    if(validHouxitWidget(prototype_)) {
      buildInstance =$compilerEngine(self, virtualNode, hx_Element, slotsCompilerArgs, config);
    }else{
      debugHandler(`widget initializer failed to compile...`, true, self);
    }
    if(buildInstance){
      if(!is_hyperscript) {
        hx_Element.hx_build=buildInstance[$$$ownProperties].hx_build;
      }
      if(buildInstance[$$$ownProperties]?.slot_name) {
        hx_Element.slot_name=buildInstance[$$$ownProperties].slot_name;
      }
    }
    return isHouxitBuild(buildInstance) ? buildInstance.$build?.$element : undefined;
  }
  function createWidgetElement(virtualNode, metrics ){
    const { hx_Element, siblings, IS_RENDERLESS, config } = metrics; 
    return _createWidgetElement(virtualNode, config.hx_Element, siblings, IS_RENDERLESS, null, config );
  }
  const unsupportedDelimiters="<,>";
  function includesUnsupported(delimiters){
    let response=false;
    for(const deli of delimiters.values()){
      unsupportedDelimiters.split(',').forEach((v)=>{
        response=deli.includes(v);
        if(response) {
          return response;
        }
      })
    }
    return response;
  }
  function escapeRegExp(string) { 
    return string.replace(/[.!@#%_\,<>:;'"\-=*+?^${}()|[\]\\]/g, '\\$&'); 
  }
  const entities = {
    '!':`&excl;`,
    '@':`&commat;`,
    '#':`&num;`,
    '$':`&dollar;`,
    '%':`&percnt;`,
    '^':`&Hat;`,
    '&':`&amp;`,
    '*':`&ast;`,
    '(':`&lpar;`,
    ')':`&rpar;`,
    '_':`&lowbar;`,
    '+':`&plus;`,
    '-':`&minus;`,
    '=':`&equals;`,
    '[':`&lsqb;`,
    ']':`&rsqb;`,
    '\\':`&bsol;`,
    '{':`&lcub;`,
    '}':`&rcub;`,
    ';':`&semi;`,
    ':':`&colon;`,
    '"':`&quot;`,
    "'":`&apos;`,
    '|':`&vert;`,
    ',':`&comma;`,
    '<':`&lt;`,
    '.':`&period;`,
    '>':`&gt;`,
    '/':`&sol;`,
    '?':`&quest;`
  }
  function escapeDecoder(str, useReverse=false){
    // for(const char of keys(entities)){
    //   let entity = entities[char]
      
    //   const regex = new RegExp(`/${isTrue( useReverse ) ? entity : char }/g`, isTrue(useReverse) ? char : entity );
    //   if(!regex.test(str)) {
    //      continue;
    //       }
    //   str=str.replace(regex)
    // }
    return str/*.replace(/&/g, '&amp;')*/.replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')     
      // .replace(/\[/g, '&lsqb;')     
      .replace(/"/g, '&quot;')     
      .replace(/\\/g, '&#39;'); 
  }
  
  function escapeReverseDecoder(str){
    return str.replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      //.replace(/&amp;/g, '&')
      .replace(/&#39;/g, '\\')
  }
  const isSafeString=text=>/\[\[\[\%\%safe\-\-(.*?)\-\-\%\%\]\]\]/.test(text);
  function markSafeString(text){
    return `[[[%%safe--${text}--%%]]]`;
  }
  function RenderableContextManager(self, text, hasSafeString ){
    text=compileToRenderable(unwrap(text));
    return hasSafeString ? escapeDecoder(text) : text ;
  }
  function validateDelimiterConstruct(self, delimiters){
    if(!isArray(delimiters)){
      debugHandler(`expects an arrah of character strings encoding\n\n.....delimiters config setup`, self, isHouxitBuild(self));
      return false;
    }
    let [ open, close ] = delimiters ;
    if( open && close ){
      if( !hasSpecialCharacters( open ) || !hasSpecialCharacters( close ) ) {
        debugHandler(`mustache customization error::\n\n delimeters must match value of special characters\n\ne.g !, @, #, $, %, ^, &, *, (, ),  [, ], {, }, ;, :, ?`,  self, isHouxitBuild(self) ); 
        return false;
      }else if(includesUnsupported([ open, close ])) {
        debugHandler(`Invalid  delimiter value :: \n\n"${open} or ${close} is an unsupported delimiter constructs"\n cannot be used as a string mustache delimeter since this are javascript multiline string interpolation technic\n\n Delimeter Configuration failed`, self, isHouxitBuild(self));
        return false;
      }
    }
    return true;
  }
  function resolveAccessor(self, str, hx_Element, $$bind=false){
    let [ open, close ] = self[$$$core].settings.delimiters ;
    open=hasSpecialCharacters(open) ? escapeRegExp(open) : open ;
    close=hasSpecialCharacters(close) ? escapeRegExp(close) : close ;
    const pattern=new RegExp(`${open}([${open}]?.*?[${close}]*)${close}`, 'mg');
    let link;
    if(str.match(pattern)) {
      str=str.replace(pattern, (match, text)=>{
        text=escapeReverseDecoder(text.trim());
        const drafts=[];
        let draftCount=0;
        text=text.replace(stringsMonitorRegex, (match, rex, roll)=>{
          drafts.push(match);
          let dataDraft=extractorArsterists+draftCount;
          draftCount++;
          return dataDraft;
        });
        const filters=text.split('%');
        for( const [ index, flt ] of filters.entries()){
          filters[index]=flt.replace(reverseRegex, (match, rex, roll)=> drafts[Number(rex.match(/\d/))]);
        }
        text=text.replace(reverseRegex, (match, rex, roll)=> drafts[Number(rex.match(/\d/))]);
        let hasSafeString;
        text=_$runModelBind(self, filters.shift().trim(), hx_Element);
        text=unwrap(text);
        if(len(filters)) {
          text=$Filter_HelpersService(self, text, filters, hx_Element, $$bind);
        }
        return RenderableContextManager(self, text, hasSafeString);
      })
    }
    return str;
  }
  function checkForModeLAndContextAvailability(model, context, ref, returnToken){
    if(!hasOwn(model, ref) && !hasOwn(context, ref) && !returnToken) {
      throw new Error('AccessorError')
      return;
    }else if (returnToken) {
      return ref;
    }
  }
  function _$runModelBind(self, ref, hx_Element, returnToken=false){
    let value;
    const model= isHouxitBuild(self) ? self.__public_model__ : isModelInstance(self) ? self : Object.create(null);
    const context=isHouxitElement(hx_Element) ? hx_Element?.LabContext || {} : isPObject(hx_Element) ? hx_Element : {};
    try{
      value=_Evaluate_THIS( model, ref, self, context) ;
      // if(isNull(value) && !hasSpecialCharacters(ref) && !isNullBasedKeyword(ref) ){
      //   return checkForModeLAndContextAvailability(model, context, ref, returnToken);
      // }
    } catch(err){
      console.error(err)
      if(ref && !returnToken){
        debugHandler(`Accessor Error::\n\n"${ref}" property value was accessed during render, but not initialized on model or is undefined\n\nat at\n ..."${ref}" property \n\n${err}`, self, true);
        return;
      }else {
        return ref;
      }
    }
    return value 
  }
  function _useBindDriver__(ref){
    const response=validateCollectionArgs(arguments, {
      name:'useBindDriver',
      required:[false],
      min:0,
      max:1,
      validators:[ String ]
    });
    if(!response) {
      return null;
    }
    const self=getCurrentRunningEffect({
      name:'useBindDriver'
    });
    if(!self) {
      return null;
    }
    if(!len(arguments) || !ref) ref='modelValue';
    const params=defineParams();
    const signalKey='update'+(ref!=='modelValue' ? ':'+ref : "" );
    const signals=defineSignals([signalKey]);
    return {
      get value(){
        return hasOwn(params, ref) ? params[ref] : self.__public_model__.$attrs[ref];
      },
      update(value){
        return signals[signalKey](value);
      }
    };
  }
  function useBindDriver(ref, config){
    return _useBindDriver__(ref, config);
  }
  const hasFilterInstance=(self, name)=>_makeMap_(BUILT_IN_FILTERS, name) || _makeMap_(self[$$$register].filters, name) || _wufHas_instance(self, name);
  const normalize_Filter=(self, name)=>hasOwn(BUILT_IN_FILTERS, name) ? BUILT_IN_FILTERS[name] : hasOwn(self[$$$register].filters, name) ?  self[$$$register].filters[name] : _wufHas_instance(self, name) ? normalizeWUFBuildScope(self, name) : pass;
  function customFilterDebugger(value, filter){
    if(!canRender(value)){
      debugHandler(`"${filter}" template filter expects a plain string value`);
      return false;
    }
    return true;
  }
  function evaluateShortener(defaultValue, digitsSlice, secondValueSlice, appendText, verboseText){
    let dValue=String(defaultValue).trim();
    let digitsValue=digitsSlice;
    let secondSlice=secondValueSlice
    let text=String(appendText);
    let digits=dValue.slice(Number(digitsValue.at(0)),Number(digitsValue.at(-1)));
    let secondValue=dValue.slice(secondSlice.at(0),secondSlice.at(-1));
    let SConvert=Number(secondValue);
    let res=digits+text;
    if (SConvert>0){
      let term=digits+'.'+secondValue;
      res=term+text;
    }
    if (verboseText) {
      return res+' '+useVerbose(Number(dValue),verboseText);
    }else {
      return res;
    }
}
  function SHORTENER_FILTER_SERVICE(value, verboseText=""){
    value=Number(value);
    if(!isNumber(value) || isNaN(value)){
      debugHandler(`shortener filter Adapter at argument <1> expects a number`);
      return value;
    }else if(!isString(verboseText)){
      debugHandler(`shortener filter Adapter at argument <2> expects a string`);
      return value;
    }
    var result=value;
    if (value > 999 && value < 999999 ) {
      result=evaluateShortener(value,[0,-3],[-3,-2],'K');
    }else if(value > 1000000 && value < 999999999 ) {
      result=evaluateShortener(value,[0,-6],[-6,-5],' Million');
    }else if(value > 1000000000 && value < 999999999999 ) {
      result=evaluateShortener(value,[0,-9],[-9,-8],' Billion');
    }else if(value> 1000000000000 && value < 999999999999999 ) {
      result=evaluateShortener(value,[0,-12],[-12,-11],' Trillion');
    }else if(value > 1000000000000000){
      let digits=String(value).slice(0,-15);
      let digitsConvert=Number(digits);
      let expo=digitsConvert.toExponential();
      result=expo+' E';
    }
    if (verboseText) {
      return result+' '+useVerbose(value,verboseText);
    }else {
      return result;
    }
  }
  function useVerbose(value, txt){
    var val=Number(value);
    var result=String(txt);
    if (val>1) {
      result=result+'s';
    }
    return result;
  }
  function PERCENTAGE_FILTER_SERVICE(value, arg, decimalIndex){
    let index=Number(decimalIndex);
    let div=100/value;
    let e=div*arg;
    let fix=e.toFixed(index);
    let result=Number(fix);
    return String(result)+"%";
  }
  function CURRENCY_FILTER_SERVICE(value, currency='$'){
    if(!isNumber(value) || isNaN(value)){
      debugHandler(`currency filter Adapter at argument <1> expects a number`);
      return value;
    }else if(!isString(currency)){
      debugHandler(`currency filter Adapter at argument <2> expects a string`);
      return value;
    }
    const stringifyNum=String(value);
    const houxitBank=[];
    let recorder=[];
    const reInstate=()=>{
      houxitBank.push(recorder.toReversed().join(""));
      recorder=[];
    }
    for(const val of values(stringifyNum).toReversed()){
      if(len(recorder) === 3 ) {
        reInstate();
      }else {
        recorder.push(val);
      }
    }
    if(len(recorder)) {
      reInstate();
    }
    return currency+houxitBank.toReversed().join(",")+".00";
  }
  function UPPER_FILTER_SERVICE(value){
    if(!customFilterDebugger(value, 'upper')) {
      return value;
    }
    return compileToRenderable(value).toUpperCase();
  }
  function TITLE_FILTER_SERVICE(value){
    if(!customFilterDebugger(value, 'title')) {
      return value;
    }
    const splitted=String(value).split(' ');
    for(let [ind, val] of entries(splitted)){
      splitted[Number(ind)]=val.charAt(0).toUpperCase()+val.slice(1);
    }
    return splitted.join(' ');
  }
  function LOWER_FILTER_SERVICE(value){
    if(!customFilterDebugger(value, 'lower')) {
      return value;
    }
    return String(value).toLowerCase();
  }
  const BUILT_IN_FILTERS={
    upper:UPPER_FILTER_SERVICE,
    title:TITLE_FILTER_SERVICE,
    lower:LOWER_FILTER_SERVICE,
    shortener:SHORTENER_FILTER_SERVICE,
    percent:PERCENTAGE_FILTER_SERVICE,
    currency:CURRENCY_FILTER_SERVICE
  }
  function $Filter_HelpersService(self, value, filters,hx_Element, $$bind){
    if(!len(filters)) {
      return  value;
    }
    let filterInstance;
    let parameters;
    for(const [ index, filter ] of filters.entries()){
      let name=filter.trim() ||  null;
      if(!name){
        $warn(`undefined filter name\n\nCheck template filter definition`, self);
        return;
      }
      const VResponse=filterInstancesValidator(name, self, hx_Element);
      if(!VResponse ) {
        break;
      }
      [ filterInstance, parameters ] = VResponse;
     const filterCallback=isPFunction(filterInstance) ? {
       filter:filterInstance
     } : filterInstance;
      try{
        const filterResponse=filterCallback.filter(value, ...parameters);
        value=filterResponse;
      }catch(error){
        debugHandler(`Encountered an error when running the filter callback at >>>>>> ${name}`, self, true);
        debugHandler(error, self);
        break;
      }
    }
    return value;
  }
  function filterInstancesValidator(name, self, hx_Element){
    let parameters=[];
    if(name.includes("(") && name.includes(")")){
      const filter=name;
      name=abstractFilterName(name);
      let { content } = ArgsExtractor(filter, name);
      const reader=`((...args)=> args)(${content})`;
      parameters=_$runModelBind(self, reader, hx_Element);
    }
    if(!hasFilterInstance(self, name)) {
      debugHandler(`Unrecognized  filter name "${name}"\n\n if this is a custom filter, make sure it's registered through the local filter option or global prototype 'filter' method`,  self, true);
      return;
    }
    const filterInstance=normalize_Filter(self, name);
    if(!validateType(filterInstance, [Function, Object])){
      debugHandler(`${name} filter receives an Invalid type definition\n\nExpects a filter function or a plain object type exposing a filter method which acts as the filter callable itself`, self, true);
      return;
    }else if(isPObject(filterInstance)){
      if(!hasProp(filterInstance, 'filter')){
        debugHandler(`"${name}" filter instance object does not expose a "filter" method which acts as the filter function`, self, true);
        return;
      }else if(!isPFunction(filterInstance.filter)){
        debugHandler(`"${name}".<filter> instance filter property value is not a method/callable  \n\n Expects a function type which acts as the filter function`, self, true);
        return;
      }
    }
    return [ filterInstance, parameters ];
  }
  function abstractFilterName(filter){
    return filter.match(/^([^(]+)/)[0];
  }
  const HouxitDirectives="if,else,else-if,html,text,for,raw,slot,model,bind,on,scoped,provide,transite,animate,clone";
  const preCompiledDirs="if,else-if,else,for,raw";
  const buildUsableDirectives="scoped,model,clone,motion";
  const isHyperscriptDirective=dir=>_makeMap_(buildUsableDirectives, dir);
  const isHouxitDirective=dir=>_makeMap_(HouxitDirectives, dir);
  
  const validIdentifierRegex=/([...]*[\w\d]+)/g;
  const isNullBasedKeyword=str=>/^(null|undefined)$/.test(str);
  function _Evaluate_THIS(obj, str, self, optional){// Use a regular expression to match statements or multiple expressions
  const statementRegex=/^(?:const|var|let|while|for|of|if|else|import|export|switch|case|try|catch|throw|continue|break|with|debugger|label|do|from|as|finally|delete|void|enum|implements|interface|package|protected;).*$/;;
    // =|\+\+|\+=|--|-=|\*|\*=|\.\.|\/\/|\/\*|\*\*|\[=|==\+|\/=|%=\*\*=|&&=|\|\|=|<=|>=|\\|
    if (statementRegex.test(str.replace(stringsMonitorRegex, ()=>"" )) && !passableBlock(str)) {
      throw new Error(`Invalid expression: \n\n"${str}" Your binding seems to contain an unallowed expression as a statement\n Only single expressions are allowed.`, self, true);
    }// Use a regular expression to remove comments from the expression by using string .replace regex method
    const commentRegex = /\/\/.*$|\/\*[^]*?\*\//g;//comment matching regular expression
    let expressionWithoutComments = str.replace(commentRegex, '');// Use a regular expression to match any remaining unsupported constructs and statement keywords
    const unsupportedRegex = /(?:\.\.|\bthrow\b|\bdelete\b|\bvoid\b|\bconst\b|\blet\b|\bvar\b|\bwhile\b|\bfor\b|\bof\b|\bif\b|\belse\b|\bimport\b|\bexport\b|\bswitch\b|\bcase\b|\btry\b|\bcatch\b|\bcontinue\b|\bbreak\b|\bwith\b|\bdebugger\b|\blabel\b|\bdo\b|\bfrom\b|\bas\b|\bfinally\b|\benum\b|\bimplements\b|\binterface\b|\bpackage\b|\bprotected\b)/;
    let scriptRender;
    let checkRegex=false;
    try{
      scriptRender=parseScript(expressionWithoutComments);
    }catch(err){
      checkRegex=true;
    }
    if (checkRegex && unsupportedRegex.test(expressionWithoutComments.replace(stringsMonitorRegex, ()=>"" ))) {
      throw new Error(`Invalid expression: \n\nUnsupported constructs are not allowed.\n\n"${str}"`, self, true);
    }else if(commentRegex.test(str)){
      debugHandler(`Template SyntaxError...\n\nComments not allowed in template expression\n\n"${str}"`, self, true);
      return;
    }
    let dexTransform;
    if(optional && isPObject(optional) && hasOwn(optional, $$dexTransformKey)){
      dexTransform=optional[$$dexTransformKey];
      let syntaxArray=dexTransform.syntaxArray;
      dexTransform.traverse=()=>transformDestructureContext(syntaxArray, dexTransform.sourcesArray, str, [obj, optional]);
    }
    let compile_Str=`with(obj){
        with($$$ctx){
          try{
            return dexTransform ? dexTransform.traverse()  : ${str.trim() || "undefined" };
          }catch(err){
            throw new Error(err);
          }
        }
      }`
    if(_isWUFBuild(self)){
      compile_Str=`with(__env__){
        ${compile_Str}
      }`
    }
    const getValue = new Function('obj','$$$ctx','dexTransform','__env__', compile_Str);
    let value;
    try{
      value = getValue.call(obj, obj, isPObject(optional) ? optional : {}, dexTransform, self[$$$core].__env__ || {});
    }catch(error){
     // throw new  Error(error);
    }
      return value;
  }
  function transformDestructureContext(props, sources, vv, metrics=[]){
    props=props.toReversed().join(',');
    const register=new Tuple(...extractArgumentsFromDext(props, true));
    const syntax =dextNamespaceControler(props, tokenGENERATOR({
      size:10
    }, (uuid)=>{
      if(!register.has(uuid)){
        register.add(uuid);
        return true;
      }
      return false;
    }));
    const traverse =Function('obj', '$$$ctx',`
      with(obj){
        with($$$ctx){
          try{
            return function transform(${syntax}){
              return ${vv}
            }
          }catch(err){
            throw new Error(err)
          }
        }
      }
    `);
    const [obj={}, $$$ctx={}]=metrics;
    return traverse.call(obj, obj, $$$ctx ).call(obj, ...sources.toReversed());
  }
  function dextNamespaceControler(src, replacement=""){
    const namespace=extractArgumentsFromDext(src);
    const register=new Tuple();
    for(const [ index, { key, start, end }] of namespace.entries()){
      if(!register.has(key)){
        register.add(key);
        continue;
      }
      src=src.substring(0, start) + replacement + src.substring(end+1);
      register.add(replacement);
    }
    return src;
  }
  function facadeArgsRegister(setup, namespace, index, traverse){
    if(len(setup.ariel)){
      const word=setup.ariel.join("");
      if(word.trim()) {
        namespace.push(traverse ? word : {
          start:index-(len(setup.ariel)),
          end:index-1,
          key:word
        });
      }
      setup.ariel=[];
    }
  }
  function extractArgumentsFromDext(src, traverse=false){
    const isStrRegex=val=>/['"`]+/.test(val);
    const setup={
      ariel:[],
      deff:undefined,
      op_str:false,
      str_type:undefined,
      re_start:false,
      deff_cage:{}
    }
    const rChar={
      ")":"(",
      "]":"[",
      "}":"{"
    }
    const namespace=[];
    let index=0;
    let prev_item;
    for(const val of values(src)){
      const prev=index > 0 ? src[index-1] : undefined;
      if(isString(prev) ? prev.trim() : prev) {
        prev_item=prev;
      }
      const next=src[index+1];
      if(/[`'"]/.test(val)){
        if(!setup.op_str){
          setup.op_str=true;
          setup.str_type=val;
        }else if(val === setup.str_type){
          setup.op_str=false;
          setup.str_type=undefined;
        }
      }else if(setup.op_str);
      else if(val==='='){
        facadeArgsRegister(setup, namespace, index, traverse);
        setup.deff=true;
      }else if(setup.deff){
        if(/[[({]/.test(val)){
          setup.deff_cage[val]=(setup.deff_cage[val] || 0)+1;
          setup.re_start=true
        }else if(/[\)}\]]/.test(val)){
          if(hasOwn(setup.deff_cage, rChar[val])){
            if((setup.deff_cage[rChar[val]] || 0) <= 1) {
              delete setup.deff_cage[rChar[val]];
            }else {
              setup.deff_cage[rChar[val]]--;
            }
          }
        }else if(!len(setup.deff_cage) && /[{([\])},]/.test(val)) {
          setup.deff=false;
        }
      }else if(/[, \W]/.test(val) && !/[$:]/.test(val)) {
        facadeArgsRegister(setup, namespace, index, traverse);
      }else if(/\w$/.test(val)) {
        setup.ariel.push(val)
      }else if(val === ":") {
        setup.ariel=[];
      }
      index++;
    }
    return namespace;
  }
  const dynamicAttrRegex=/\[(.*?)\]/;
  function _DynamicAttrNameResolver(self, attr, hx_Element, metrics){
    let iniAttr=attr;
    attr= fall_AttrName(attr) ;
    const isRerender=self[$$$operands]?.initializedRender;
    if(dynamicAttrRegex.test(attr)){
      const matches=attr.match(dynamicAttrRegex);
      let name='';
      const effect=_createEffectBase(function(){
        return matches[0].replace(dynamicAttrRegex, (match, text)=>{
          return unwrap(_$runModelBind(self.__public_model__, text, hx_Element, true));
        })
      });
      attr=effectRunner(effect).value;
      if(len(subscribers) && !isRerender){
        
      }else if(isRerender){
        
      }
    }
    if(!isString(attr)){
      debugHandler(`Unexpected value at "${iniAttr}" as dynamically evaluated prop name binding is not a valId prop string`);
      return iniAttr;
    }
    const response= iniAttr.replace(dynamicAttrRegex, function (match, space){
      return attr;
    });
    return [ effect, attr ];
  }
  const DebugFlags={
    slots:"compilation of slot element",
    template:"template compile process",
    hook:name=>"during the call of "+name.toUpperCase()+" hook",
    build:"during the call of the build function",
    register:(name)=>"the registration of a "+name,
    forloop:"during mapping of the for directive",
    ifElse:name=>"during the consitional rendering of the "+name+" directive",
  }
  function get_Object_Value(obj, path, check=false){
    const processor=Function('obj','check',`
      let value;
      try{
        value= obj.${path}
      }catch(err){
        if(check) throw new Error(err)
        return
      }
      return value;
    `);
    return processor(obj, check);
  }
  const accessorsRegex=/[.[\]]/;
  const dynamicAccessorsRegex=/(\[(.*?)\])/g;
  function object_Has_Path(obj, str, getRes) {
    let res=false;
    let value=obj
    if ((!isEmptyStr(str) ? accessorsRegex.test(str) : false)) {
      const navigation = str.split('.');
      for (const key of navigation) {
        if(dynamicAccessorsRegex.test(key)){
          let shouldBreak=false;
          let access=[];
          let match=key.replace(dynamicAccessorsRegex, (match, p1, internal)=>{
            internal=Number(internal)
            if(!isNaN(internal)) {
              access.push(internal);
            }
            return "";
          })
          if((shouldBreak && !res) || !value ) {
            return false;
          }
          if(!isEmptyStr(match)) {
            value = value[match];
          }
          if(len(access)) {
            for(let [index, keys ] of access.entries()){
              if( !validateType(value, [ Object , Array, Function]) && isArray(value) && isNaN(Number(keys)) && Number(keys)+1 > len(value)) {
                return false;
              }
              value=value[keys];
            }
          }
        }else if (!hasOwn(value||{}, key)) {
          return false;
        }else {
          value = value[key];
          res=true;
        }
      }
    } else {
      if (hasOwn(obj, str)) {
        value=value[str];
      }else {
        return false;
      }
      return true;
    }
    return res;
  }
  function set_Object_Value(obj, path, value, check=false){
    return Function('obj','value','check','metrics',`
      try{
        const [ isToken, get_Object_Value, debug, unwrap ] = metrics;
        const initVal=get_Object_Value(obj, "${path}" );
        if(isToken(initVal)) obj.${path}[initVal[refInternalEffectKey].accessor]=unwrap(value);
        else obj.${path}=value;
      }catch(err){
        if(check) debug(err)
        return err
      }
      return obj;
    `)(obj, value, check, [isToken, get_Object_Value, debugHandler, unwrap ]);
  }
  function get_Prop_Path(obj, prop) {
    const stack = [{ 
      object: obj, 
      path: '' 
    }];
    while (len(stack) > 0) {
      const { object, path } = stack.pop();
      for (const [key, value] of getIterator(object)) {
        const currentPath = path ? `${path}${ isPObject(object) ? '.' : '[' }${key}${isArray(object) ? ']' : ''}` : key;
        prop = isNumber(key) ? ( isNaN(Number(prop) ) ? prop : Number(prop ) ): prop ;
        if (key === prop) {
          return currentPath;
        }
        if (validateType(value, [Object, Array ])) {
          stack.push({ 
            object: value, 
            path: currentPath 
          });
        }
      }
    }
    return null;
  }
  function toCamelCase(str) {
    return str.replace(/-+([a-zA-Z])/g, (match, letter) => letter.toUpperCase());
  }
  function ToPascalCase(str){
    const camelCase=toCamelCase(str);
    return camelCase.at(0).toUpperCase()+camelCase.slice(1);
  }
  function to_kebab_case(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
  function mapClassTypeTransform(item, transpiled){
    if(isCollection(item)){
      for(let value of item.values()){
        value = unwrap(value);
        mapClassTypeTransform(value, transpiled);
      }
    }else if(isPObject(item)){
      entries(item).forEach(([key, value])=>{
        value=unwrap(value);
        if(value) {
          for(let val of values(key.split(' '))){
            transpiled.add(val);
          }
        }
      });
    }else if(isString(item)){
      for(let val of values(item.split(' '))){
        transpiled.add(val);
      }
    }
    return transpiled.list();
  }
  function resolveClassDiffing(newClass, oldClass){
    [ oldClass, newClass ] = [ new Tuple(...arrSet(oldClass)), new Tuple(...arrSet(newClass ))];
    if(deepEqualityCheck(newClass, oldClass)) {
      return [ new Tuple(), new Tuple()];
    }
    const insert=new Tuple();
    const remove=new Tuple();
    newClass.forEach((klass)=>{
      if(!oldClass.has(klass)) {
        insert.add(klass);
      }
    });
    oldClass.forEach((klass)=>{
      if(!newClass.has(klass)) {
        remove.add(klass);
      }
    });
    return [ insert, remove ];
  }
  function parse_Class_Binding(self, item, element, hx_Element, { is_hyperscript, bindings, forwardAttrs }){
    const isSSR=isSSRCompiler(self);
    const sp=hx_Element.VNodeManager.patchFlags.shapeProps;
    const isRerender=self[$$$operands].initializedRender;
    if(!is_hyperscript && len(bindings.deepKeys)){
      const value=bindings.value;
      if(value || isString(value)) {
        item=bindings.deepKeys;
      }else {
        return;
      }
    }
    item=unwrap(item);
    const transform=mapClassTypeTransform(item, new Tuple());
    for(let [index, cls] of transform.entries()){
      cls=unwrap(cls);
      if(isSSR || isRerender){
        const props=isRerender ? sp : hx_Element.VNodeManager.SSRVnode.props;
        if(!hasOwn(props, 'class')) {
          props.class=new Tuple();
        }
        if(!props.class.has('cls')) {
          props.class.add(cls);
        }
      }else if(!element.classList.contains(cls)) {
        toggleClassNames(element, cls);
      }
    }
    if((isRerender && !len(bindings.subscribers)) || isSSR) {
      return;
    }
    const flush=createPriorityFlush(bindings.effect, function(observers){
      _createElementPropsEffectBlock_(self, {
        element, 
        mode:'class',
        key:'class',
        effect:bindings.effect,
        value:bindings.effect.value
      }, observers);
    });
    hx_Element.VN_Tree.FLUSHS.add(flush);
  }
  function toggleClassNames(element, classes, remove=false){
    const toggler=remove ? 'remove' : 'add';
    classes.split(' ').forEach((cls)=>{
      if(cls) {
        element.classList[toggler](cls);
      }
    })
  }
  function compileStyleProps(self, item, styleProps){
    styleProps = styleProps || {};
    if(isPObject(item)){
      entries(item).forEach(([key, style])=>{
        if(!isPrimitive(unwrap(style))){ 
          
          debugHandler(`"${key}" style prop: Unrecognized style property value \nat at\n "${key}" style property\n\n${'' || "" }`, self); 
          return;
        }
        styleProps[toCamelCase(key)]=compileToRenderable(style);
      });
    }else if(isArray(item)) {
      item.forEach(value=>compileStyleProps(self, value, styleProps));
    }else if(isString(item)){
      let splited=item.trim().split(';');
      for(let styling of splited.values() ){
        if(styling && styling.includes(':')){
          const spread=styling.split(':');
          styleProps[spread[0]]=spread[1];
        }
      }
    }
    return styleProps;
  }
  function stylePropsKeys_Normalizing(self, item, deepKeys){
    const styleProps={};
    deepKeys?.forEach(prop=> styleProps[toCamelCase(prop)]=item);
    return styleProps;
  }
  function parse_Style_Binding(self, item, element, metrics, hx_Element){
    const { is_hyperscript, bindings, forwardAttrs } = metrics;
    let styleProps;
    const isSSR=isSSRCompiler(self);
    const deepKeys=metrics.bindings.deepKeys;
    const sp=hx_Element.VNodeManager.patchFlags.shapeProps;
    const isRerender=self[$$$operands].initializedRender;
    if(!is_hyperscript && len(deepKeys)) {
      styleProps=stylePropsKeys_Normalizing(self, item, deepKeys);
    }else {
      styleProps=compileStyleProps(self, item, {});
    }
    entries(styleProps).forEach(([prop, style])=> {
      if(isSSR || isRerender){
        const props= isRerender ? sp : hx_Element.VNodeManager.SSRVnode.props;
        if(!hasOwn(props, 'style')) {
          props.style={};
        }
        props.style[to_kebab_case(unwrap(prop))]=style;
      }else {
        element.style[toCamelCase(unwrap(prop))]=style;
      }
    });
    if((isRerender && !len( bindings.subscribers )) || isSSR) {
      return;
    }
    let { effect } = bindings;
    const flush=createPriorityFlush(effect, function(observers){
      value=_createElementPropsEffectBlock_(self, {
        element, 
        mode:'style', 
        effect,
        value,
        key:style
      }, observers);
    });
    hx_Element.VN_Tree.FLUSHS.add(flush);
  }
  function fall_AttrName(key, attr){
    const Key_Binding={ 
      '*':1, 
      '@':1, 
      '...':3, 
      "$$" :2,
      "#":1
    };
    if( !isString(key) && !key.trim() && hasSpecialCharacters(attr)) {
      return key ;
    }
    for(const [ky, sl] of entries(Key_Binding)){
      if(key.startsWith(ky)){
        if(has$$_bind(key)){ 
          key=key.split(':')
          key.shift();
          return key.join(':')
        }
        return key.slice(sl);
      }
    }
    return key;
  }
  function isOnListener(key){
    return exists(key) && (isString(key) && /^on[A-Za-z]+\w+$/.test(key));
  }
  function directive_sep(key){
    return key.includes(':') ? key.split(':') : [key]
  }
  function elementObserverWatch(element, callback, config={}){
    const observer= new MutationObserver(callback);
    const obsConfig= {
      attributes: true,
      childList: true, 
      subtree: true 
    }
    observer.observe(element, {
      ...config,
      ...obsConfig
    });
  }
  const keysSeparatorRegex= /([\w$\-][\w$\-]*)|\[([^\]]+)\]/g;
  function AttrsKeyNormalizer(key, value, self){
    const binding={
      modifiers:[],
      directive:undefined,
      key:undefined,
      deepKeys:[],
      src:key,
      value
    }
    if(hasSpread_bind(key, true)){
      let prop=key.slice(3);
      binding.value=key.slice(3);
      binding.directive="bind";
    }else if(!key.includes(':') && !key.includes('|') && !has$$_bind(key )) {
      binding.key=key;
    }else{
      let [ dir, keys, unecessary ] = directive_sep(key);
      if(exists(unecessary)) {
        debugHandler(`Error in directive saperator chain.\n\nExcessive directive chain, unable to determine\n >>>> "${unecessary}"`, self, true);
      }
      binding[ ( key.startsWith("$$")) ? 'directive' : 'key' ]=dir;
      if(!binding.key) {
        binding.key=keys;
      }else {
        keys = binding.key;
      }
      if(keys?.includes('|') || dir.includes('|')) {
        const ssd=!keys ? dir : keys;
        binding.modifiers=(ssd).split('|');
        const fV=binding.modifiers.shift();
        if(keys) {
          keys=fV;
        }else {
          dir=fV;
          binding.directive=dir
        }
        if(len(binding.modifiers)){
          iterate(binding.modifiers).each((value, key)=>{
            if(!value.trim()) {
              binding.modifiers.splice(key, 1);
            }
          });
        }
      }
      binding.key=keys;
      binding.directive=binding.directive?.slice(2);
    }
    if(keysSeparatorRegex.test(binding.key)){
      const deeps=[ ...(binding.key?.match(keysSeparatorRegex) || [])];
      if(len(deeps)) {
        binding.key=deeps.shift();
      }
      binding.deepKeys=deeps;
    }
    binding.src=key;
    if(binding.directive && !binding.value){
      const canBindDyy =_makeMap_("provide,html,text,model,clone,scoped,transite,animate,bind,slot", binding.directive);
      if(canBindDyy) {
        binding.value= binding.key || binding.directive;
      }
    }
    return binding;
  }
  function AttrsKeyNormalizerDebugging(bindings, self){
    const { directive, modifiers, deepKeys, key, src } = bindings;
    let response=true;
    if(!directive){
      let errType=[ len(modifiers) ? "modifiers" : null, len(deepKeys) ? "deepKeys" : null];
      // iterate(errType).each((val, ind)=>{
      //   if(!val) return;
      //   debugHandler(`"${val}" carriers are only supported in template directive mode\n\n${key}::(("${bindings[val].join( val==='modifiers' ? "|" : ".")}"))\n\n"${val}" interference has been rescinded`, self, true);
      //   response=false;
      // });
    }
    return response;
  }
  function validateIncomingPropsKeys(self, { key, attr }, is_hyperscript, hx_Element, metrics){
    if(is_hyperscript && isillegalKeyBinding(key, is_hyperscript)){
      debugHandler(`Illegal binding not allowed in build Adapter mode\n\n"${key}" property has a disallowed binding directive property`, true, self);
      return {};
    }
    let { isRerender, patch } = metrics ;
    let $orgKey=key, modifiers=[], deepKeys=[], directive, bindings={}, effect
    if(!is_hyperscript){
      key = transpileDirectiveShorhand(key);
      bindings=AttrsKeyNormalizer(key, attr, self);
      const debugResponse=AttrsKeyNormalizerDebugging(bindings, self);
      modifiers=bindings.modifiers; 
      deepKeys=bindings.deepKeys;
      directive=bindings.directive; 
      key=bindings.key;
      const ResolveDAName=(kk)=>_DynamicAttrNameResolver(self, kk, hx_Element, metrics);
      if(key && dynamicAttrRegex.test(key) ) {
        let [ subs, attribute, p]=ResolveDAName(key);
        effect=p;
        bindings.key=attribute;
        bindings.value=bindings.key;
      }
      iterate(deepKeys).each((v, k)=>{
        if(deepKeys[k] && dynamicAttrRegex.test(deepKeys[k])) {
          let [ subs, attribute, patch]=ResolveDAName(v);
          deepKeys[k]=attribute;
        }
      });
      bindings.propertyKeyEffect=effect;
    }else {
      bindings= {
        directive,
        key,
        modifiers,
        deepKeys,
        value:attr,
      }
    }
    return bindings;
  }
  function validateListenSpecialEvent(self, bindings){
    const key = bindings.key;//.slice(2).toLowerCase();
    const is_dispatch_ev=key==='dispatch';
    if(!is_dispatch_ev && isFunction(bindings.value)) {
      bindings.value=[ bindings.value, bindings.value.options || {}];
    }
    let response=validateCollectionArgs(bindings.value, {
      validators:is_dispatch_ev ? [ [String, Array], Function, [String, Array]] : [Function, [String, Array]],
      name:bindings.key,
      max:is_dispatch_ev ? 3 : 2,
      min:is_dispatch_ev ? 2 : 1,
      name:`<${key}> event`
    });
    let [ events, method, modifiers ] = bindings.value;
    if(!is_dispatch_ev){
      const func=events;
      modifiers= method;
      events=to_kebab_case(key).split('-');
      if(to_kebab_case(key).includes('-')) {
        events.shift();
      }
      method=func;
    }
    bindings.deepKeys=isString(events) ? events.split(".") : isArray(events) ? events : [];
    bindings.key=bindings.deepKeys.shift();
    bindings.value=method;
    bindings.modifiers=isString(modifiers) ? modifiers.split("|") : isArray(modifiers) ? modifiers : [];
    return true
  }
  function HTMLAttrsMagnifier(element, bindings, hx_Element, self, metrics){
    let { is_hyperscript, isRerender, vNode, forwardAttrs } = metrics ;
    const isSSR=isSSRCompiler(self);
    let { key, value:attr, src } = bindings;
    if(isHTMLBooleanAttributes(key)) {
      BooleanAttributesManager(self, element, [ key, attr], { 
        is_hyperscript,
        bindings,
        forwardAttrs
      }, hx_Element );
    }else if(key === 'class') {
      parse_Class_Binding(self, attr, element, hx_Element, {
        is_hyperscript,
        bindings,
        forwardAttrs
      });
    }else if(isHTMLIDLAttributes(key)) {
      IDLPropsTransform(self, [ key, attr], element, {
        is_hyperscript,
        bindings,
        forwardAttrs
      }, hx_Element );
    }else if(!isRerender && (isOnListener(key) || isInlineListener(key) || key === 'dispatch')){ 
      if(!click_handler_facading(self, [ key, attr, src ], bindings, element, hx_Element, metrics)) {
        return;
      }
    }else if(!isRerender && key === "ref") {
      Special_REF_Modifier(self, element, bindings, hx_Element, metrics);
    }else if(!isRerender && key === "attach") {
      transformAttachProp(self, bindings, element, hx_Element, metrics, );
    }else if(isHouxitNativeElement(hx_Element) && key === 'name' && vNode.prototype_ ==='slot') {
      slotNamingTRANSITION(self, bindings, element, hx_Element, metrics);
    }else if(key === "context") {
      SlotContextBindingTRANSITON(self, bindings, element, hx_Element, metrics);
    }else if(key === 'motion'){
      motionPropFacade(self, bindings, element, hx_Element, metrics);
    }else{
      try{
        attr=compileToRenderable(unwrap(attr));
        const sp=hx_Element?.VNodeManager?.patchFlags.shapeProps;
        if(isSSR || isRerender) {
          const props = isRerender ? sp : element.props;
          props[key]=attr;
        }else {
          element.setAttribute(key, attr);
        }
      }catch(err){
        debugHandler(err)
        debugHandler(`Attribute Error::\n\n...unable to set node attribute "${key}\n\n ${err}`, self, true, `When setting the attribute "${key}" on "${isSSR ? element.type : element.outerHTML}"`, self, !is_hyperscript );
        return;
      }
      if((isRerender && !len(bindings.subscribers)) || isSSR) {
        return;
      }
      const flush=createPriorityFlush(bindings.effect, function(observers){
        value=_createElementPropsEffectBlock_(self, {
          element,
          key,
          value:compileToRenderable(value),
          mode:undefined,
          effect:bindings.effect
        }, observers);
      });
      hx_Element?.VN_Tree.FLUSHS?.add?.(flush);
    }
  }
  function motionPropFacade(self, bindings, element, hx_Element, metrics){
    let { value, key } = bindings;
    if(!isBaseMotion(value)){
      debugHandler(`<Element>.motion property receives an Invalid value...\nNot a <Houxit.Motion> Property`, self, true);
      return;
    }
    const type=value.type;
    value=value[$motionKey];
    const motion=value[value.key];
    const { params, mode } = value;
    hx_Element.VNodeManager.motion_object.create(value.key === 'transition' ? 'transite' : 'animate', motion, {
      params,
      mode,
      element
    });
    createElementMotionEffect(self, hx_Element, metrics, element);
  }
  function isInlineListener(key){
    if(key.startsWith("on")){
      const ev=key.slice(2);
      if(!IS_VALID_EVENT_HANDLER(ev)) {
        return;
      }
      return ev;
    }
    return;
  }
  function click_handler_facading(self,[ key, attr, src], bindings, element, hx_Element, metrics){
    attr=unwrap(attr);
    if(key === "dispatch" && !isArray(attr)){
      debugHandler(`<dispatch> dispatcher expects an array value of events and method\n\nFound "${attr}" of "${getType(attr)}" type`, self, !isNull(self));
      return;
    }else if(isOnListener(src) && !validateType(attr, [Array, Function])) {
      debugHandler(`<${key}> listener expects a function value or an array of valid methods functions\n\nFound "${attr}" of "${getType(attr)}" type`, self, !isNull(self));
      return;
    }
    if(isInlineListener(key)) {
      bindings.key=isInlineListener(key);
    }
    const options=attr.options || {};
    bindings.value=attr;
    metrics=assign({ options }, metrics);
    if(!validateListenSpecialEvent(self, bindings)) {
      return
    }
    $$dir_ON(self, bindings, element, hx_Element, metrics);
    return true;
  }
  const isValidPropsEffectMode=prop=>_makeMap_('bool,style,class,idl,ref', prop);
  function getPropMode(prop){
    if(isHTMLBooleanAttributes(prop)){
      return 'bool';
    }else if(isHTMLIDLAttributes(prop)){
      return prop === 'style' ? 'style' : 'idl';
    }else if(prop === 'ref'){
      return ref;
    }else if(prop === 'class'){
      return 'class';
    }
    return undefined;
  }
  function _createElementPropsEffectBlock_(self, metrics, observer, vnode){
    const { element, mode, effect, value, key, deepKeys=[] }=metrics;
    let transform =isEffect(effect) ? effect?.runEffect().value : value;
    let newValue=unwrap(transform);
    if(deepEqualityCheck(newValue, value)) {
      return value;
    }
    if(mode === 'class' || (mode === 'idl' && key === 'className')){
      newValue= newValue || '';
      const [ insert, remove ] = resolveClassDiffing(mapClassTypeTransform(newValue, new Tuple()), mapClassTypeTransform(value, new Tuple()));
      remove.forEach((klass)=>toggleClassNames(element, klass, true));
      insert.forEach((klass)=>toggleClassNames(element, klass));
    }else if(mode === 'bool'){
      if((newValue || isString(newValue)) && !(value || isString(value))){
        if (isHTMLIDLAttributes(key)) {
          element[key]=newValue;
        }else{
          element.setAttribute(key, newValue||'');
        }
      }else{
        if(!(newValue || isString(newValue)) && (value || isString(value))){
          if(isHTMLIDLAttributes(key)) {
            element[key]=false;
          }else {
            element.removeAttribute(key);
          }
        }
      }
    }else if(mode === 'style'){
      let styleProps;
      const deepKeys=deepKeys;
      newValue={};
      if(!is_hyperscript && len(deepKeys)) {
        styleProps=stylePropsKeys_Normalizing(self, newValue, deepKeys);
      }else {
        styleProps=compileStyleProps(self, newValue, {});
      }
      let oldStyleProps;
      if(!is_hyperscript && len(deepKeys)) {
        oldStyleProps=stylePropsKeys_Normalizing(self, value, deepKeys);
      }
      oldStyleProps=compileStyleProps(self, value, {});
      for(let [ prop, style ] of entries(styleProps)){
        style=unwrap(style);
        if(!deepEqualityCheck(style, oldStyleProps[prop]) || !hasOwn(oldStyleProps, prop )) {
          element.style[prop]=style;
        }
      }
      keys(oldStyleProps).forEach(style=>{
        if(!hasOwn(styleProps, style)) {
          element.style[style]="";
        }
      });
    }else if(mode === 'idl') {
      newValue=compileToRenderable(newValue);
      element[key]= newValue;
    }else if(mode === 'ref'){
      
    }else if(isUndefined(mode))  {
      newValue=compileToRenderable(newValue);
      element.setAttribute(key, newValue);
    }
    return newValue;
  }
  function genericLifecircleTransmitter(args, hooksTuple, name, el){
    const [ callback ]=args;
    if(!validateCollectionArgs(args, {
      count:1,
      validators:[Function],
      required:[true],
      name:"attach=Function(ctx){ctx."+name+"()}"
    })) {
      return;
    }
    hooksTuple.add(callback);
    return undefined;
  }
  function attachOnListener(self, args, element, hx_Element, metrics){
    if(!validateCollectionArgs(args, {
      min:2,
      max:3,
      validators:[[String, Array], Function, [String, Array]],
      required:[true, true],
      name:"attach=Function(ctx){ctx.on()}"
    })) {
      return;
    }
    let [ events, callback, modifiers ] = args;
    events=isString(events) ? events.split(".") : events;
    $$dir_ON(self, {
      value:callback,
      modifiers:isString(modifiers) ? modifiers.split("|") : modifiers || [],
      key:events.shift(),
      deepKeys:events,
      directive:undefined,
    }, element, hx_Element, metrics);
  }
  function attachUseCallback(self, args, element, hx_Element, metrics, hooksList){
    const [ directive, value, modifiers ] = args;
    if(!validateCollectionArgs(args, {
      min:2,
      max:3,
      validators:[[Object, Function], Any, [String, Array]],
      required:[true, true],
      name:"attach=Function(ctx){ctx.use()}"
    })) {
      return;
    }
    _With_Custom_Directives(self, {
      value:directive,
      modifiers:isString(modifiers) ? modifiers.split("|") : modifiers || [],
      key:undefined,
      deepKeys:[],
      directive:undefined,
    }, element, hx_Element, metrics.vNode, metrics.is_hyperscript );
  }
  function attachMultiProp(self, args, element, hx_Element, metrics){
    const [ key, value ] = args;
    if(!validateCollectionArgs(args, {
      min:1,
      max:2,
      validators:[String, Any],
      required:[true],
      name:"attach=Function(ctx){ctx.prop()}"
    })) {
      return;
    }
    attributes_hydration({
      key,
      attr:value
    }, self, hx_Element, metrics, element, metrics.config) ;
  }
  function transformAttachProp(self, bindings, element, hx_Element, metrics){
    const { key, value, } = bindings;
    if(!isPFunction(value)){
      debugHandler(`"attach" special property expects a plain Function type`, self, true);
      return;
    }
    const hooks=hx_Element.VNodeManager.LifeCycleHooks;
    const hooksList=new Tuple(...directivesHooksMap.split(","));
    const context_obj={
      use(directive, value, modifiers){
        return attachUseCallback(self, [ ...arguments ], element, hx_Element, metrics, hooksList);
      },
      on(events, callback, modifiers){
        return attachOnListener(self, [ ...arguments ], element, hx_Element, metrics);
      },
      addProp(key, value){
        return attachMultiProp(self, [ ...arguments ], element, hx_Element, metrics);
      },
      animate(animation, params, mode){
        animation=animate(...arguments);
        motionPropFacade(self, {
          value:animation,
          key:'motion'
        }, element, hx_Element, metrics);
        return animation;
      },
      transite(transition, params, mode){
        transition=transite(...arguments);
        motionPropFacade(self, {
          value:transition,
          key:'motion'
        }, element, hx_Element, metrics);
        return transition;
      }
    }
    for(let hk of hooksList.values()){
      context_obj[hk]=function(callback){
        return genericLifecircleTransmitter([...arguments], hooks[hk+'_hook'], hk, element);
      }
    }
    value(context_obj);
  }
  function __widget_props_effect(app, metrics, observers){
    if(!isHouxitBuild(app)){
      return;
    }
    const { value, effect, key } = metrics;
    const transform= effect.runEffect().value;
    const newValue = unwrap(transform);
    const params=app[$$$ownProperties].$params;
    const attrs=app.__public_model__.$attrs;
    const mode=hasOwn(params, key) ? "params" : hasOwn(attrs, key) ? "attrs" : undefined;
    if(deepEqualityCheck(unwrap(value), newValue)) {
      return value;
    }
    if(mode === "params") {
      params[key].data=newValue;
    }else if(mode === "attrs") {
      useReadonlyBypasser(attrs, key, newValue, true);
    }
    return newValue;
  }
  function widget_props_plugin(element, bindings, hx_Element, self, metrics){
    let { key, value, src, deepKeys} = bindings;
    const { is_hyperscript, vNode } = metrics;
    let re_evaluate=false;
    const isRerender=self[$$$operands].initializedRender;
    if(isOnListener(key) || key === 'dispatch') {
      click_handler_facading(self,[ key, value, src], bindings, element, hx_Element, metrics);
    }else if(!isRerender && key === "ref"){
      Special_REF_Modifier(self, element, bindings, hx_Element, metrics);
    }else if(key === 'attach') {
      transformAttachProp(self, bindings, element, hx_Element, metrics)
    }else if((!hasOwn(element, key))) {
      element[key]=value;
      re_evaluate=true;
    }else if(hasOwn(element, key)){
      if(!hasOwn(element, '__hx_keys__')){
        element.__hx_keys__=new Tuple();
      }
      element.__hx_keys__.add([key, value]);
    }
    if(!re_evaluate || !(!isHouxitBuiltinSymbolWidget(vNode.prototype_) && !isSSRCompiler(self))){
      return;
    }
    const flush=createPriorityFlush(bindings.effect, function(observers){
      value=__widget_props_effect(hx_Element.widget_instance, {
        effect:bindings.effect,
        value:memMove(value),
        key,
      }, observers);
    });
    hx_Element.VN_Tree.FLUSHS.add(flush);
  }
  function attributes_hydration(props, self, hx_Element, metrics, element, config, lexical){
    const { key, attr, data, deepKeys, effect } = props;
    let { isW, is_hyperscript, isRerender, patch, vNode } = metrics ;
    metrics.config=config;
    const bindings=validateIncomingPropsKeys(self, { key, attr }, is_hyperscript, hx_Element, metrics);
    const $orgKey=bindings.src;
    bindings.data=data;
    bindings.effect=effect;
    if(lexical) {
      bindings.deepKeys=deepKeys;
    }
    if(is_hyperscript && !isOnListener(bindings.key) && (isFunction(bindings.value) || _makeMap_([For, If, ElseIf, Build], vNode.prototype_))){
      const fn=bindings.value;
      const effect=_createEffectBase(()=>{
        return unwrap(safeCall(fn));
      }, self);
      effectRunner(effect);
      bindings.effect=effect;
      bindings.value=effect.value;
      defineKeyEffectOnVnode(vNode, key, effect);
    }else{
      assign(bindings, metrics.patch);
    }
    if(!is_hyperscript && bindings.directive){ 
      _Resolve_Directives_Hydration(self, bindings, element, hx_Element, metrics );
    }else if(bindings.key === 'key'){
      hx_Element.VNodeManager.vNodeClass.key=bindings.value;
      hx_Element.VNodeManager.keyIdBinding=bindings;
    }else{ 
      ( isW ? widget_props_plugin : HTMLAttrsMagnifier )(element, bindings, hx_Element, self, metrics );
    }
  }
  function slotNamingTRANSITION(self, bindings, element, hx_Element, metrics){
    let { value }=bindings;
    const { isRerender, vNode, is_hyperscript } = metrics;
    const isSSR=isSSRCompiler(self);
    if(isRerender) {
      hx_Element.VNodeManager.element_slot_ref=value;
      return;
    }
    if(!isString(value)){
      debugHandler(`slot "name" atrribute value expects a "string" value data type\n\nuntraceable data type found`, self, true);
      return;
    }
    const SSBs=self[$$$compiler].scopeSlotsBindings;
    if(hasOwn(SSBs, value)){
      debugHandler(`slot with name "${value}" has been duplicated\n\nMore than one slot with same name mapping cannot be implemented to avoid dublicated renderimg of slots contents`, self, true);
      $warn(`NOTE: Un-named slots elements shares the same naming scope with implicitly defined "name='default'" slots elements`, self);
      return;
    }
    if(!isRerender){
      const current_value=compileToRenderable(unwrap(value));
      if(isSSR) {
        element.props.name=current_value;
      }else {
        element.setAttribute('name', current_value);
      }
      SSBs[value]={
        bindings:undefined,
        element
      }
    }
  }
  function SlotContextBindingTRANSITON(self, bindings, element, hx_Element, metrics){
    const { isRerender, is_hyperscript, effect, vnode } = metrics;
    const isSSR=isSSRCompiler(self);
    const SSRVnode=hx_Element.VNodeManager.SSRVnode
    if(!isRerender && (isSSR ? SSRVnode.type : element.localName) !== "slot"){
      debugHandler(`"context" special property is only scoped to html "<slot>" element in Houxit\n<slot> element scope context property found on a none "<slot>" element\n\nFailed to resolve binding`);
      return;
    }
    const slotName = isRerender && !isSSR ? hx_Element.VNodeManager.element_slot_ref : isSSR ? SSRVnode.props.name : element.name
    const SSBs=self[$$$compiler].scopeSlotsBindings;
    if(!isRerender && !slotName && !hasOwn(SSBs, slotName)){
      debugHandler(`To specifically bind context scope to slots, they are obliged to be contextually named\n\nIt's either this slot element was not named properly…\nOr that the "context" property precedes the special slot "name" attribute`, self, true);
      $warn(`To resolve this, make sure the "name" attribute comes before the "context" key on this slot element`, self);
      return;
    }
    let data_bind=bindings.value;
    if(!isPObject(data_bind)){
      debugHandler(`"context" special scope property expects a plain object\nInvalid data type received\n\n@@ "${slotName}" <slot> element>>>>>`, self, true);
      return;
    }
    data_bind=token(data_bind);
    if(!isRerender) {
      assign(SSBs[slotName], {
        get bindings(){
          return data_bind.data;
        }
      });
      effect.attachCallback(()=> {
        assign(data_bind.data, effect.runEffect().value);
      });
    }
  }
  function IDLPropsTransform(self, props, element, metrics, hx_Element ){
    let [ key, attr ] = props;
    const { is_hyperscript, bindings } = metrics;
    const isSSR=isSSRCompiler(self);
    const sp=hx_Element.VNodeManager.patchFlags.shapeProps;
    const isRerender=self[$$$operands].initializedRender;
    if(key === 'style') {
      return parse_Style_Binding(self, attr, element, metrics, hx_Element);
    }else if(key === "className") {
      const transform=mapClassTypeTransform(attr, new Tuple());
      if(isSSR || isRerender){
        const props=isRerender ? sp : hx_Element.VNodeManager.SSRVnode.props;
        if(!hasOwn(props, 'className')) {
          props.className="";
        }
        props.className=props.className+" "+transform.join(" ");
      }else {
        element.className=element.className+" "+transform.join(" ");
      }
    }else {
      if(isSSR || isRerender){
        const props=isRerender ? sp : hx_Element.VNodeManager.SSRVnode.props
        props[ _makeMap_('innerText,textContent', key) ? 'innerText' : key]=escapeDecoder(compileToRenderable(attr));
      }else {
        element[key]=compileToRenderable(attr) ;
      }
    }
    if((isRerender && !len( bindings.subscribers )) || isSSR) {
      return;
    }
    const flush=createPriorityFlush(bindings.effect, function(observers){
      _createElementPropsEffectBlock_(self, {
        element, 
        mode:'idl', 
        value:bindings.effect.value,
        key,
        effect:bindings.effect,
      }, observers);
    });
    hx_Element.VN_Tree.FLUSHS.add(flush);
  }
  const isillegalKeyBinding=(prop, is_hyperscript)=>is_hyperscript && (hasAsterisks_bind(prop) || has$$_bind(prop) || hasAt_bind(prop)) || hasAsh_bind(prop);
  function Props_dilation_compile(vNode, self, hx_Element, metrics, element, config){
    const props=vNode.props ;
    const shatteredFlags=!isHouxitElement(hx_Element) ? hx_Element : null;
    const isSSR=isSSRCompiler(self);
    if(!isPObject(props)) {
      return element;
    }
    const is_hyperscript= metrics.is_hyperscript;
    const isRerender=self[$$$operands]?.initializedRender;
    const ctx=metrics.ctx;
    metrics = { 
      isRerender,
      is_hyperscript: self ? self[$$$core].map.is_hyperscript : hx_Element ? hx_Element.is_hyperscript : undefined,
      isW: !(isSSR ? isString(element.type) : IS_ELEMENT_NODE(element)) && (validHouxitWidget(vNode.prototype_)),
      shatteredFlags,
      ctx,
      vNode
    }
    let propsIndex=0;
    const compileProps=(key, attr)=>attributes_hydration({
      key,
      attr
    }, self, hx_Element, metrics, element, config) ;
    entries(props).forEach(([key, attr ])=>{
      if(key === "__hx_keys__"){
        iterate(attr).each(([ky, vl])=> compileProps(ky, vl));
      }else {
        compileProps(key, attr);
      }
    });
  }
  function specialPropsPrefix(self, props, element, hx_Element){
    
  }
  function BooleanAttributesManager(self, element, [ key, attr ], { is_hyperscript, bindings, forwardAttrs }, hx_Element){
    attr=unwrap(attr);
    const isSSR = isSSRCompiler(self);
    const isRerender=self[$$$operands].initializedRender;
    if(isString(attr) || attr) {
      if(isSSR) {
        element.props[key]=attr;
      }else if(isRerender){
        hx_Element.patchFlags.shapeProps[key]=attr;
      }else{
        if (isHTMLIDLAttributes(key)) {
          element[key]=attr;
        }else {
          element.setAttribute(key, attr||'');
        }
      }
    }
    if((isRerender && !len(bindings.subscribers)) || isSSR) {
      return;
    }
    const flush=createPriorityFlush(bindings.effect, function(observers){
      _createElementPropsEffectBlock_(self, {
        element, 
        mode:'bool', 
        effect:bindings.effect,
        key,
        value:bindings.effect.value,
        effect:bindings.effect
      }, observers);
    });
    hx_Element.VN_Tree.FLUSHS.add(flush);
  }
  function generateCustomDirBinding(self, hx_Element, bindings){
    const { modifiers, deepKeys } = bindings;
    return {
      modifiers,
      deepKeys
    };
  }
  function _With_Custom_Directives(self, bindings, element, hx_Element, vNode, is_hyperscript){
    let { key, value:attr, modifiers, deepKeys, src, directive:Name  } = bindings;
    const isRerender = self[$$$operands].initializedRender;
    let value;
    if(!is_hyperscript && attr) {
      value=_$runModelBind(self, attr, hx_Element, true);
    }
    let has_modifiers=len(modifiers) ? true : false;
    if(!is_hyperscript && !hasOwn(self[$$$register].directives, Name )){
      debugHandler(
        `((unrecognized directive reference))\n\n "${Name}" directive was not registered as a directive on this widget\n\nat...........at>>>\n${element?.outerHTML || ""}`
      , self, true, "during directive resolving"  );
      return element;
    }
    const directive= is_hyperscript ? attr : self[$$$register].directives[Name];
    const CustomDir ={ 
      init:pass, 
      destroyed:pass,
      created:pass, 
      updated :pass,  
      mounted :pass
    };
    let dirB=generateCustomDirBinding(self, hx_Element, bindings)
    if(isPFunction(directive)) {
      CustomDir.mounted=directive;
    }else if(isPObject(directive) ){
      if( !has_Intersect_Prop(directivesHooksMap.split(','), keys(directive))) {
        debugHandler(`((Directive Error))\n\ndirective ${ typeof directive } does not define any of widget Directive hook.\n  "created/mounted/updated/init/destroyed" method`, self, true); 
        return element;
      }else{
        for(const [ name, hook] of  entries(directive)){
          if(new Set(directivesHooksMap.split(',')).has(name)){
            if(!isPFunction(directive[name])){
              debugHandler(`((Custom directive))\n\ncustom Directive "${Name}" ${name}  hook is not a function`,self, true);
              return element;
            }else {
              hook[lifeCiycleBinding]={
                modifiers:new Tuple(...keys(modifiers || [])),
                key,
                deepKeys,
                value
              }
              CustomDir[name]=hook;
            }
          }
        }
      }
    }
    if(isRerender) {
      return;
    }
    if(!isNativeElement(element) && validHouxitWidget(element.prototype_)){
      define(element, $$$customDirs,{ value:{
        init_hook:new Tuple(), 
        created_hook:new Tuple(),
        mounted_hook:new Tuple(),
        updated_hook:new Tuple(),
        destroyed_hook:new Tuple()
      }, enumerable, configurable });
    }
    for(let hook of directivesHooksMap.split(',').values()){
      if(CustomDir[hook] && !isPass(CustomDir[hook])) {
        if(isNativeElement(element)){
          if(hook === 'init') {
            continue;
          }
          hx_Element.VNodeManager.LifeCycleHooks[hook+'_hook'].add(CustomDir[hook]);
        }else if(validHouxitWidget(element.prototype_)) element[$$$customDirs][hook+'_hook'].add(CustomDir[hook]);
      }
    }
    return element;
  }
  function isPass(func){
    return isPFunction(func) && func.name === 'pass' && hasOwn(func, $passKey);
  }
//   const KEYS = {
//   // Control keys
//   enter: "Enter",
//   tab: "Tab",
//   esc: "Escape",
//   escape: "Escape",
//   space: " ",
//   spacebar: " ", // legacy alias
//   backspace: "Backspace",
//   delete: ["Delete", "Backspace"],
//   insert: "Insert",

//   // Navigation
//   home: "Home",
//   end: "End",
//   pageup: "PageUp",
//   pagedown: "PageDown",

//   // Arrow keys
//   up: "ArrowUp",
//   down: "ArrowDown",
//   left: "ArrowLeft",
//   right: "ArrowRight",

//   // Lock keys
//   capslock: "CapsLock",
//   numlock: "NumLock",
//   scrolllock: "ScrollLock",

//   // Editing / Misc
//   printscreen: "PrintScreen",
//   pause: "Pause",
//   contextmenu: "ContextMenu",

//   // Function keys
//   f1: "F1",
//   f2: "F2",
//   f3: "F3",
//   f4: "F4",
//   f5: "F5",
//   f6: "F6",
//   f7: "F7",
//   f8: "F8",
//   f9: "F9",
//   f10: "F10",
//   f11: "F11",
//   f12: "F12",

//   // Modifier keys
//   ctrl: "Control",
//   control: "Control",
//   shift: "Shift",
//   alt: "Alt",
//   meta: "Meta",

//   // Common punctuation
//   comma: ",",
//   period: ".",
//   slash: "/",
//   backslash: "\\",
//   semicolon: ";",
//   quote: "'",
//   backquote: "`",
//   minus: "-",
//   equal: "=",
//   bracketleft: "[",
//   bracketright: "]"
// };
  const KEYS_MODIFIERS = {
    enter: "Enter",
    esc: "Escape",
    tab: "Tab",
    space: " ",
    delete: ["Delete", "Backspace"],
    up: "ArrowUp",
    down: "ArrowDown",
    left: "ArrowLeft",
    right: "ArrowRight",
  }
  const modifiers_keys={
    ctrl:'ctrlKey',
    shift:'shiftKey',
    alt:'altKey',
    meta:'metaKey'
  }
  function _Run_With_Modifiers(self, element, modifiers, func){
    if(!isPFunction(func)){
      // debugHandler(`"${''}" event Callback must be passed as  a function \n \n${func } is not a valid event callback  method`, self, true);
      return;
    }
    modifiers=isArray(modifiers) ? new Tuple(...modifiers) : modifiers;
    const options={};
    if(modifiers.has('once')) {
      options.once=true;
      modifiers.delete('once');
    }
    if(modifiers.has('passive')) {
      options.passive=true;
      modifiers.delete('passive');
    }
    if(modifiers.has('nonpassive')) {
      options.passive=false;
      modifiers.delete('nonpassive');
    }
    if(modifiers.has('capture')) {
      options.capture=true;
      modifiers.delete('capture');
    }
    if(modifiers.has('noncapture')) {
      options.capture=false;
      modifiers.delete('noncapture');
    }
    function __With_Modifiers($event){
      if(modifiers.has('prevent')) {
        $event.preventDefault();
        modifiers.delete('prevent');
      }
      if(modifiers.has('stop')) {
        $event.stopPropagation();
        modifiers.delete('stop');
      }
      if(modifiers.has('trusted')) {
        func=$event.isTrusted ? func : pass;
        modifiers.delete('trusted');
      }
      if(modifiers.has('self') && !element.isSameNode($event.target)) {
        modifiers.delete('self');
        return;
      }
      for (let  modifier of modifiers.values()){
        if(hasOwn(KEYS_MODIFIERS, modifier)){
          const keyBind=KEYS_MODIFIERS[modifier];
          const e_key=$event.key;
          if(isArray(keyBind) ? !keyBind.includes(e_key) : keyBind !== e_key){
            return;
          }
        }else if(hasOwn(modifiers_keys, modifier)){
          if(!$event[modifiers_keys[modifier]]){
            return;
          }
        }
      }
      func.call(this, ...arguments);
    }
    return [ __With_Modifiers, options ];
  }
  function Special_REF_Modifier(self, node, binding, hx_Element, metrics){
    let { key, value, src, data, effect  }=binding;
    const isWidget=isHouxitWidgetElement(hx_Element);
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    let refKey =  effect ? effect.value : value ;
    const templateRefs=self[$$$operands].templateRefsInputs;
    const model=self.__public_model__;
    let ref;
    if(isString(refKey)){
      if(!hasOwn(templateRefs, refKey)){
        debugHandler(`[templateRefs reference] not defined (${refKey})`, self, true);
        return;
      }
      ref=templateRefs[refKey];
    }else if(isToken(refKey)){
      ref=refKey;
    }else{
      debugHandler(`[templateRefs reference] not a token. templateRefs expects a token() instance.\nSee [Template Refs] reference`, self, true);
      return;
    }
    const [ getRef, setRef ] = model.$useAgent(ref);
    let cb=pass;
    const current=getRef();
    if(current && !isArray(current)){
      const prev=current;
      setRef(shallowStream([prev]));
    }else if(!current){
      cb=element=>setRef(element);
    }
    if(isArray(getRef())){
      cb=element=>getRef().push(element);
    }
    if(isWidget){
      metrics.vNode.filesFilter.templateRef=instance=>safeCall(cb, instance);
    }else{
      cb(node);
    }
  }
  function $$dir_HTML(self, bindings, element, hx_Element, metrics, text ){
    let { value, modifiers } = bindings;
    modifiers=new Set(modifiers);
    const isSSR=isSSRCompiler(self), SSRVnode=hx_Element.VNodeManager.SSRVnode, is_hyperscript=hx_Element.is_hyperscript, item=value;
    let effect, attr=value;
    if(!is_hyperscript) {
      effect=_createEffectBase(function(){
        return _$runModelBind(self, attr, hx_Element, !modifiers.has('bind'));
      }, self);
      value=effectRunner(effect).value;
    }
    value=unwrap(value);
    const innerProp=text ? 'innerText' : 'innerHTML';
    if( isPrimitive(value)) {
      value=compileToRenderable(value);
      if((isSSR ? isSSR(element.type) : !isNativeElement(element))){ 
        self.__public_model__.$attrs[innerProp]=value;
      }else if(isSSR) {
        element.props[innerProp]=value;
      }else {
        element[innerProp]=value;
      }
    }
    const flush=createPriorityFlush(effect, function(observers){
      value=_createElementPropsEffectBlock_(self, {
        element, 
        mode:'idl', 
        effect,
        value,
        key:innerProp
      }, observers, metrics.vnode);
    });
    hx_Element.VN_Tree.FLUSHS.add(flush);
  }
  function wrapNamespaceBind(self, LabContext, param, dataBind){
    if(!LabContext) {
      LabContext={};
    }else {
      LabContext=assign({}, LabContext);
    }
    if(param && isDestructureSyntax(param)){
      if(!destructWarn(param, dataBind, self)) {
        return LabContext;
      }
      LabContext=smartDextCtxMerging(LabContext, {
        [$$dexTransformKey]:{
          sourcesArray:[ dataBind ],
          syntaxArray:[ param ]
        }
      });
    }else if(param) {
      LabContext[param]=dataBind;
    }
    return LabContext;
  }
  function $$dir_SLOT(self, bindings, vnode, hx_Element, metrics){
    let { value, modifiers, key } = bindings;
    const { is_hyperscript, isRerender, config } = metrics;
    if(!key){
      debugHandler(`slot key error: "$$slot" directive has no key mapping name defined to the "slot" element\n\n--failed-- to normalize slot --directive--`);
      return;
    }
    modifiers=new Set(modifiers);
    const isSSR=isSSRCompiler(self);
    const isHy=isHydration(self);
    const iswt=!(isSSR ? isString(vnode.type) : isNativeElement(vnode)) && validHouxitWidget(vnode?.prototype_);
    hx_Element.slot_name=key;
    const parent=hx_Element?.VNodeManager?.vNodeClass.filesFilter.parent.widget_instance;
    const slotBindings=parent?.[$$$compiler].scopeSlotsBindings;
    let dataBind=slotBindings ? slotBindings[key]?.bindings : undefined;
    hx_Element.LabContext=wrapNamespaceBind(self, hx_Element.LabContext, value, dataBind);
  }
  function __dilateHandler(self, props, hx_Element, is_hyperscript){
    const { key, item, src } = props;
    if(is_hyperscript || (!isOnListener(src) && !hasAt_bind(src) && !src.startsWith("$$on:") ) || isContextMethodString(self, hx_Element, item)){
      return item;
    }
    return "($event)=>"+item;
  }
  function $$dir_BIND(self, binding, el, hx_Element, metrics){
    const { is_hyperscript, shatteredFlags, ctx, vNode, config } = metrics
    let { key, value:item, modifiers, deepKeys, src }= binding;
    item=__dilateHandler(self, { 
      key,
      item,
      src
    }, hx_Element, is_hyperscript );
    const effect=_createEffectBase(function(){
      return isString(item) ? _$runModelBind(self, item, hx_Element || ctx ) : safeCall(item) ;
    }, self);
    let { value:transform } = effectRunner(effect);
    const isRerender=self[$$$operands]?.initializedRender;
    const response=transform;
    transform = unwrap(transform);
    metrics.effect=effect;
    if(!key && !isPObject(transform)) {
      debugHandler(`[non object spread bind] "$$bind" directive attributes binding expects a plain props object value when not chained to any key argument`, self, true);
      return ;
    }else if(!key && isPObject(transform)) {
      for(const [ ky, attr ] of entries(transform)){
        attributes_hydration({
          key:ky,
          attr:unwrap(attr),
          data:attr,
          effect
        }, self, hx_Element, metrics, el, config);
      }
    }else {
      attributes_hydration({
        key,
        attr:transform,
        data:response,
        deepKeys,
        effect
      }, self, hx_Element, metrics, el, config, true);
    }
    hx_Element=!isHouxitElement(hx_Element) ? shatteredFlags : hx_Element;
    defineKeyEffectOnVnode(vNode, key, effect);
  }
  function defineKeyEffectOnVnode(vNode, key, effect){
    if(isHouxitBuiltinSymbolWidget(vNode.prototype_)){
      if(!vNode.compiler[vNode.prototype_]){
        vNode.compiler[vNode.prototype_]={};
      }
      vNode.compiler[vNode.prototype_][key]=effect;
    }
  }
  function $$dir_ON(self, bindings, node, hx_Element, metrics){
    let { key, value:attr, deepKeys, modifiers, src } = bindings;
    let options=metrics.options;
    const isRerender=self[$$$operands].initializedRender;
    const vNode=isHouxitElement(hx_Element) ? hx_Element.VNodeManager.vNodeClass : hx_Element.vNodeClass;
    const isSSR=isSSRCompiler(self);
    const isWidget=node && validHouxitWidget(vNode.prototype_) && !((isSSR && isString(node.type)) || isNativeElement(node));
    let effect;
    if(isString(attr)){
      attr=__dilateHandler(self, {
        key,
        item:attr,
        src
      }, hx_Element, metrics.is_hyperscript);
      const funcToken=attr;
      effect=_createEffectBase(()=>{
        attr=_$runModelBind(self, attr, hx_Element);
        attr=object_Has_Path(self.__public_model__, funcToken) && isPFunction(attr) ? attr.bind(self.__public_model__) : attr;
        return attr;
      }, self);
      try{
        attr=effectRunner(effect).value;
      }catch(err){
        debugHandler(`${err}`, self, true);
        return node;
      }
      attr=unwrap(attr);
      if(!isPFunction(attr)){
        debugHandler(`"${name}" event must be wrapped as or in a function \n\non.....on...\n  "${isWidget ?  '' : node?.localName}" \n`, self, true);
        return node;
      }
    }
    if(len(modifiers)){ 
      [ attr, options ]=_Run_With_Modifiers(self, node, modifiers, isFunction(attr) ? attr : pass, deepKeys);
    }
    if(key) {
      deepKeys=[ key, ...deepKeys];
    }
    let listenerHandle=attr;
    if(!isRerender && isWidget){
      const board=vNode.filesFilter.$$$Events;
      for( let [ ind, ev ] of deepKeys.entries()){
        let card={
          callbacks:new Tuple(),
          event:ev,
          effect
        }
        if(hasOwn(board, ev)) {
          card=board[ev];
        }else {
          board[ev]=card;
        }
        attr.options=options;
        card.callbacks.add(attr);
      }
    }else if(!isRerender && (isHydration(self) && isVNodeClass(node)) || (!isSSR && IS_ELEMENT_NODE(node))){
      let index=0;
      for(let event of deepKeys.values()) {
        if(!IS_VALID_EVENT_HANDLER(event)){
          debugHandler(`"${event}" is not a valid event name`, self, true);
        }else {
          const callbackListen=element=>{
            element.addEventListener(event, (...args)=>{
              (isFunction(listenerHandle) ? listenerHandle : pass)(...args);
            }, options);
          }
          if(isHydration(self)) {
            node.filesFilter.$ssr_kit.hydrationFlushs.add(callbackListen);
          }else if(!isSSR) {
            callbackListen(node);
          }
        }
      }
    }
    createPriorityFlush(effect, ()=>{
      listenerHandle=effect.runEffect().value;
      listenerHandle = !isPFunction(listenerHandle) ? pass : listenerHandle;
    });
    return node;
  }
  function $$dir_CLONE(self, bindings, vnode, hx_Element, metrics){
    const is_hyperscript=hx_Element.is_hyperscript;
    let { key, value:item, modifiers, deepKeys, directive:name }=bindings;
    modifiers=new Set(modifiers);
    if(!object_Has_Path(self.__public_model__, item)){
      debugHandler(`value "${item}" property value was referenced during render, but not initialized on model or is undefined\n\nat at\n ..."${name} directive on ${isWidget ? '$$clone' : vnode.localName} `,self, true);
      return;
    }
    let ref, effect;
    try{
      if(!is_hyperscript){
        effect=_createEffectBase(function(){
          return get_Object_Value(self.__public_model__, item, modifiers.has('bind'));
        }, self);
        ref=effectRunner(effect).value;
      }
      if(ref && !isNull(ref)) {
        ref = get_Object_Value(self.__public_model__, item, modifiers.has('bind'));
      }
    }catch(err){
      debugHandler(`There is a problem with accessing the path "${item}" property which was referenced during render, but seems not initialized on model or is undefined\n\nat at\n ..."${name} directive on ${isWidget ? '$$ref' : vnode.localName} `, self, true);
      debugHandler(err)
      return;
    }
    let propPath=item;
    if(isToken(ref)){
      if(isReadonly(ref)){
        debugHandler(`Path provided to the $$clone directive path "${item}" resolves to a readonly ref value\n\nFailed to mutate a readonly ref......at ......."${name}"`, self, true);
        return;
      }
      propPath= item+ref[refInternalEffectKey].accessor;
    }
  }
  function normalize_motion_directives(self, bindings, node, hx_Element, metrics, patchFlags, transit){
    let { value, modifiers, key, directive, deepKeys } = bindings;
    modifiers=new Set(modifiers);
    const type=directive === 'transite' ? 'transitions' : 'animations';
    const is_hyperscript=hx_Element.is_hyperscript;
    const item=value;
    const effect=_createEffectBase(function(){
      return _$runModelBind(self, value, hx_Element, !modifiers.has('bind'));
    }, self);
    value= effectRunner(effect).value;
    value=unwrap(value);
    const obj=hx_Element.VNodeManager.motion_object;
    const mode =modifiers.has('in') ? 'in,' : modifiers.has('out') ? 'out' : 'both';
    const activateMotion=(key, directive)=>{
      const motion=generateMotion(self, {
        mode,
        value:key,
        key:directive
      });
      obj.create(directive, motion, {
        mode,
        params:value,
        element:node
      });
    }
    activateMotion(key, directive);
    iterate(deepKeys || []).each(ky=> activateMotion(ky, directive));
    createElementMotionEffect(self, hx_Element, metrics, node);
  }
  function $$dir_ANIMATE(self, bindings, node, hx_Element, metrics, patchFlags, animate){
    normalize_motion_directives(...arguments);
  }
  function $$dir_TRANSITE(self, bindings, node, hx_Element, metrics, patchFlags, transit){
    normalize_motion_directives(...arguments);
  }
  function $$dir_SCOPED(self, bindings, node, hx_Element,  metrics, patchFlags){
    let { value:item, modifiers, directive:name } = bindings;
    modifiers=new Set(modifiers);
    const isStyleEl=isNativeElement(node) && node.localName === 'style';
    if(!isStyleEl) {
      debugHandler(`"$$scoped" directive is only restricted to document <style> elements only`, self, true);
      return node;
    }
    let effect;
    if(!is_hyperscript){
      effect=_createEffectBase(function(){
        return _$runModelBind(self, item, hx_Element, !modifiers.has('bind'));
      }, self);
      value=effectRunner(effect).value;
    }else {
      value=item;
    }
    const unwraped=unwrap(value);
    if(!unwraped) {
      return node;
    }
    node.innerHTML=_stylesheet_hydration(self, node.innerHTML);
    return node;
  }
  function $$dir_PROVIDE(self, Binding, vNode, hx_Element){
    let { directive, value, key, }=Binding;
    hx_Element.VNodeManager[$$$context]={ 
      prop:value
    };
  }
  function $$dir_MODEL(self, bindings, element, hx_Element, metrics){
    let { value:item, modifiers, key, }=bindings;
    let initVal='', effect;
    const { config } = metrics;
    const isSSR=isSSRCompiler(self);
    try{
      effect=_createEffectBase(function(){
        return get_Object_Value(self.__public_model__, item, true);
      }, self);
      bindings.effect=effect
      initVal=unwrap(effectRunner(effect).value);
    }catch(err){
      debugHandler(`undefined reference for directive "$$model"\n\n "${item}" is not defined on widget model instance\n\n${err}`, self, true);
      return
    }
    if(isHouxitWidgetElement(hx_Element)){
      return defineInstanceModelDriver(...arguments);
    }
    if((isSSR && isString(element.type)) || IS_ELEMENT_NODE(element)){
      if(!(isSSR ? _makeMap_(HTML_FORM_ELEMENTS, element.type) : Is_Form_Element(element) )){
        debugHandler(`Compilation Error::\n\n cannot bind a data model to  a none form element\n\n`, self, true);
        $warn("widget root element is not a form element", self);
        return;
      }
      const nameProp=getFormElementProp(element);
      function flushCallback(element){
        if(element.localName==='select'){
          if(element.multiple){
            if(!isCollection(source)){
              debugHandler(`[$$model collection error] <select multiple> element expects $$model source to be an array or valid colloction type`, self, true);
              return;
            }
            const options=element.options;
            for(let v of source.values()){
              
            }
          }
        }else{
          element.value=compileToRenderable(unwrap(initVal));
        }
        element.addEventListener(get_Model_Event(element), function($ev){
          const value=$ev.target.value;
          try{
            if(initVal !== value){
              tick(()=> updateElementModelValue(self, element, value, item)).catch((err)=>{
                throw new Error(err);
              });
              initVal=value;
            }
          }catch(err){
            debugHandler(`${err}`, self, true);
          }
        });
      }
      if(isHydration(self)) {
        element.filesFilter.$ssr_kit.hydrationFlushs.add(flushCallback);
      }else if(!isSSR) {
        flushCallback(element);
      }
      effect.attachCallback(()=>{
        element.value=compileToRenderable(unwrap(effect.runEffect().value));
      });
    }
  }
  function updateElementModelValue(self, element, value, path){
    const name=element.localName;
    const type=element.type;
    const source=unwrap(get_Object_Value(self.__public_model__, path));
    if((name === 'input' && _makeMap_('checkbox,radio')) || name === 'select'){
      if(name === 'select' && element.multiple){
        if(!isCollection(source)){
          debugHandler(`[$$model collection error] <select multiple> element expects $$model source to be an array or valid colloction type`, self, true);
          return;
        }
        
        // log(element, element.selectedIndex)
        return;
      }
      if(!isCollection(source)){
      }
    }
        set_Object_Value(self.__public_model__, path, value)
    // log(element.value, source)
    if(name);
  }
  function getFormElementProp(el){
    const name=el.localName;
    const type=el.type;
    if(_makeMap_('input,button')){
      if(type ==='checkbox') return 'checked';
      return 'value';
    }else if(name==='select'){
      return ''
    }
  }
  function defineInstanceModelDriver(self, bindings, props, hx_Element, metrics){
    const { vNode } = metrics;
    let { key, effect, value } = bindings;
    props[key ?? 'modelValue']=effect.value;
    const ev="update"+ (key ? ":"+key : "");
    const EVENTS=vNode.filesFilter.$$$Events;
    if(!hasOwn(EVENTS, ev)) EVENTS[ev]={
      callbacks:new Tuple,
      event:ev,
      effect:undefined
    }
    EVENTS[ev].callbacks.add((newValue)=>set_Object_Value(self.__public_model__, value, newValue));
    let oldValue=effect.value;
    const flush=createPriorityFlush(effect, function(observers){
      oldValue=__widget_props_effect(hx_Element.widget_instance, {
        effect,
        key: key ?? 'modelValue',
        value:oldValue
      }, observers);
    });
    hx_Element.VN_Tree.FLUSHS.add(flush);
  }
  const DirectiveMacros={
    bind:$$dir_BIND,
    html:$$dir_HTML,
    text:$$dir_HTML,
    scoped:$$dir_SCOPED,
    model:$$dir_MODEL,
    on:$$dir_ON,
    transite:$$dir_TRANSITE,
    animate:$$dir_ANIMATE,
    clone:$$dir_CLONE
  }
  function applyHouxitAnimation(node, animation, params = {}, options = {}) {
    if (!node) {
      return null;
    }
    const { mode, motion_object } = options;
    const ctx=createAminationCTX(motion_object.hooks.animation);
    let config = animation(node, ctx, params);
    const isvalid=validateMotionResponses(self, config, 'animation')
    if(isObject(isvalid)){
      config=isvalid;
    }else{
      return;
    }
    config=assign({
      delay:0,
      duration: 500,
      easing:easings.linear,
      iterations: Infinity,
      direction:'normal',
      fill:'both',
      autoplay:false
    }, config || {});
    const { duration, delay, easing, iterations, direction, fill, autoplay, /* WAAPI/CSS path*/ styles, keyframes, /* RAF path*/ frame } = config;
    if(!frame && isString(easing.css) && (keyframes && !isFunction(keyframes.keyframes))){
      return applyCSSBasedAnimation(node, config, params, options);
    }
    let player = null, raf = null, destroyed = false;
    function startRAF() {
      let raf = null, stopped = false, paused=false, start = null, started = false;
      function cancel() {
        stopped = true;
        if (raf) {
          cancelAnimationFrame(raf);
          raf=null;
        }
        raf = null;
        onCancel?.();
      }
      let totalPausedTime=0, pausedAt, finished=false;
      function frameDriver(now) {
        if ( destroyed || stopped) {
          return;
        }
        if (start === null) {
          start = now;
        }
        const rawElapsed = now - start - totalPausedTime;
        if (rawElapsed < delay ) {    // ⏱ delay gate
          raf = requestAnimationFrame(frameDriver);
          return;
        }
        const elapsed = rawElapsed - delay;
        const totalIterations = iterations === Infinity ? Infinity : iterations;
        const cycleTime = duration;
        const rawT = elapsed / cycleTime;
        let iterationIndex = Math.floor(rawT);    // 🧠 iteration tracking
        let iterationProgress = rawT - iterationIndex;
        if (!started) {
          started = true;
          onStart?.();
        }
        if (totalIterations !== Infinity && iterationIndex >= totalIterations) {     // clamp for finite iterations
          iterationIndex = totalIterations - 1;
          iterationProgress = 1;
        }
        let progress = iterationProgress;    // 🔁 direction handling
        if (direction === "reverse") {
          progress = 1 - iterationProgress;
        }
        if (direction === "alternate") {
          const isOdd = iterationIndex % 2 === 1;
          progress = isOdd ? 1 - iterationProgress : iterationProgress;
        }
        const eased = easing.fn(progress);    // 🎯 easing applied AFTER direction logic
        const finalProgress = Math.max(0, Math.min(1, eased));    // clamp safety
        createRAFInitialStyle(styles, frame, keyframes, node,  finalProgress, 1 - finalProgress );    // 🎬 render
        finished =totalIterations !== Infinity && elapsed >= duration * totalIterations;    // 🏁 completion
        if (!finished ) {
          raf = requestAnimationFrame(frameDriver);
        } else {
          raf = null;
          onFinish?.();
        }
      }
      return { 
        cancel,
        play(){
          if (finished) {
            return;
          }
          if (paused) {// resume
            paused = false;
            totalPausedTime += performance.now() - pausedAt;
          }
          raf = requestAnimationFrame(frameDriver);
        },
        pause(){
          if (paused) {
            return;
          }
          paused = true;
          pausedAt = performance.now();
          cancelAnimationFrame(raf);
        }
      };
    }
    function startWAAPI() {  // WAAPI ENGINE
      const kf=keyframes(1, 0, 'waapi');
      player =node.animate(kf, { 
        duration, 
        delay, 
        easing:easing.css, 
        iterations,
        direction,
        fill
      });
      player.onfinish = () => {
        if (!destroyed) {
          onfinish?.();
        }
      };
      player.oncancel = () => {
        if (!destroyed) {
          oncancel?.();
        }
      };
      onstart?.();
      if (!autoplay) {
        player.pause();
      }
      return player;
    }
    let controller = null;    // HYBRID DISPATCH
    if ((frame || (styles))) {
      controller = startRAF();
    }else if (keyframes) {
      startWAAPI();
    }
    return assign({    // PUBLIC API
      play() {
        if (player) {
          player.play();
        }
      },
      pause() {
        if (player) {
          player.pause();
        }
      },
      reverse() {
        if (player) {
          player.reverse();
        }
      },
      finish() {
        if (player) {
          player.finish();
        }
      },
      cancel() {
        if (player) {
          player.cancel();
        }
        if (raf) {
          cancelAnimationFrame(raf);
        }
        controller?.cancel?.();
      },
      destroy() {
        destroyed = true;
        this.cancel();
      }
    }, controller || {});
  }
  function serializeCSSFrames(styles, samples = 100) {
    let css = '';
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const u = 1 - t;
      css += `
        ${t * 100}% {
          ${styles(t, u)}
        }
      `;
    }
    return css;
  }
  function applyCSSBasedAnimation(node, config, params = {},  options = {}) {
    if (!node){
      return null;
    }
    let { duration, delay, easing, iterations, direction, fill, autoplay, /* WAAPI/CSS path*/ styles, keyframes, /* RAF path*/ onStart, onFinish, onCancel, timing, playState } = config;
    const name = `hx_animation_${Date.now()}`
    // CREATE STYLE TAG
    let t=1, u=0;
    const stylesP=isFunction(styles) ? styles(t, u) : styles;
    const style = document.createElement('style');
    let kf=keyframes(t, u, 'css', stylesP);
    style.textContent = `
      @keyframes ${name} {
        ${kf}
      }
    `;
    node.style.animationName = name;    // APPLY ANIMATION
    node.style.animationDuration =  `${duration}ms`;
    node.style.animationDelay = `${delay}ms`;
    node.style.animationTimingFunction = easing.css;
    node.style.animationIterationCount =isInfinity(iterations) ? 'infinite' : iteration;
    node.style.animationDirection = direction;
    node.style.animationFillMode =  fill;
    node.style.animationPlayState =  playState;
    document.head.appendChild(style);
    // EVENTS
    function handleStart(e) {
      if (e.target !== node) {
        return;
      }
      onstart?.();
    }
    function handleEnd(e) {
      if (e.target !== node) {
        return;
      }
      onfinish?.();
    }
    function handleCancel(e) {
      if (e.target !== node) {
        return;
      }
      oncancel?.();
    }
    node.addEventListener( 'animationstart', handleStart);
    node.addEventListener( 'animationend', handleEnd);
    node.addEventListener( 'animationcancel', handleCancel );
    // API
    return {
      play() {
        node.style.animationPlayState ='running';
      },
      pause() {
        node.style.animationPlayState = 'paused';
      },
      restart() {
        node.style.animation = 'none';
        node.offsetHeight;
        node.style.animationName = name;
      },
      cancel() {
        node.style.animation = 'none';
            oncancel?.();
      },
      destroy() {
        node.removeEventListener( 'animationstart', handleStart);
        node.removeEventListener( 'animationend', handleEnd );
        node.removeEventListener( 'animationcancel', handleCancel);
        node.style.animation = '';
        style.remove();
      }
    };
  }
  
  function serializeKeyframes(keyframes) { // Normalize to object format: { "0%": {...}, "100%": {...} }
    const normalized = normalizeKeyframes(keyframes);
    const rules = entries(normalized).map(([stop, styles]) => {
      const declarations = entries(styles).map(([prop, val]) => `  ${to_kebab_case(prop)}: ${val};`).join('\n');
      return `  ${stop} {\n${declarations}\n  }`;
    }).join('\n\n');
    return rules;
  }
  function generateOffsets(keyframes) {
    const size = len(keyframes);
    if (size === 1) {
      return [0];
    }
    const step = 100 / (size - 1);
    return keyframes.map((_, i) => +(i * step).toFixed(2));
  }
  function normalizeKeyframes(keyframes) { // Array format: [{ offset: 0, opacity: 0 }, { offset: 1, opacity: 1 }]
    if (isArray(keyframes)) {
      const perSet=generateOffsets(keyframes);
      let index=0;
      return keyframes.reduce((acc, frameDriver) => {
        const { offset, ...styles } = frameDriver;
        const stop = String(perSet[index])+'%';
        acc[stop] = styles;
        index++;
        return acc;
      }, {});
    }
    return Object.fromEntries( entries(keyframes).map(([stop, styles]) => [ normalizeStop(stop), styles ]));// Object format: { from: {...}, to: {...} } or { "0%": {...}, "100%": {...} }
  }
  function normalizeStop(stop) {
    if (stop === 'from') {
      return '0%';
    }
    if (stop === 'to') {
      return '100%';
    }
    if (!stop.includes('%') && !isNaN(Number(stop))) {// If it's a plain number like 0.5, treat as fraction
      return `${Number(stop) * 100}%`;
    }
    return stop;
  }
  function validateMotionResponses(self, config, type){
    const propsTypes={
      keyframes:[Function, Array, Object],
      easing:[String, Function, HouxitEasing],
      frame:Function,
      delay:Number,
      duration:Number,
      styles:[String, Function, Object],
      iterations:Number,
      fill:String,
      direction:String,
      playState:String,
      autoplay:Boolean,
      onStart:Function,
      onfinish:Function,
      onCancel:Function
    }
    let motionPtops=keys(propsTypes).join(',');
    if(type === 'transition'){
      motionPtops=keys(propsTypes).flatMap(t=>{
        if(_makeMap_("iterations,fill,direction,playState", t)){
          return [];
        }
        return t;
      }).join(',');
    }
    if(!isPObject(config)){
      debugHandler(`${type} function expects a plain object as a return value`, self, true);
      return false;
    }
    config=memMove(config, true);
    for(let [ key, value ] of entries(config)){
      if(!_makeMap_(motionPtops, key)){
        debugHandler(`"${key}" prop of custom ${type} Function is not recognised`, self, true);
        delete config[key];
        continue;
      }
      if(!validateType(value, propsTypes[key])){
        debugHandler(`"${key}"" return prop of ${type} custom function is of an invalid type`, self, true);
        return false;
      }
      if(key === 'keyframes'){
        config.keyframes=(t, u, engine)=>{
          let kf= isPFunction(value) ? value(t, u) : value;
          if(engine === 'css' ){
            return serializeKeyframes(kf);
          }
          kf= isPObject(kf) ? normalizeKeyframesObject(kf, engine) : normalizeOffsets(kf, engine);
          if(engine === 'waapi'){
            iterate(kf).each((item, index)=>{
              delete item.offset;
            });
          }
          return kf;
        }
        config.keyframes.keyframes=value;
      }else if(key === 'easing' && !isEasingObject(value)){
        config.easing=createEasing(value);
      }else if(key === 'direction' && !_makeMap_('alternate,reverse,normal')){
        debugHandler(`${type} "direction" option receives am invalid value "${value}" argument\n\ncan only be "alternate,reverse,normal"`, self, true);
        continue;
      }else if(key === 'fill' && !_makeMap_(`both,forwards,backwards`)){
        debugHandler(`${type} "fill" option receives am invalid value "${value}" argument\n\ncan only be "both,forwards,backwards"`, self, true);
        continue;
      }
    }
    return config;
  }
  function createElementTransition(self, hx_Element, metrics, el, motion){
    const motion_object=hx_Element.VNodeManager.motion_object;
    const transiteIn=[];
    iterate(motion_object.transite).each((transition)=>{
      const { element, fn, params, mode } = transition
      const response=applyHouxitTransition(element, fn, params, {
        mode,
        self
      });
      entries(response || {}).forEach(([ key, callback ])=>{
        motion_object.hooks.transition[key].add(callback);
        if(key === 'in'){
          transiteIn.push(callback);
        }
      });
    });
    if(len(transiteIn)){
      whenMounted(self, el, ()=>{
        transiteIn.forEach((fn)=>{
          fn();
        });
      });
    }
  }
  function createAminationCTX(animator){
    const { to, from } = animator;
    const ctx=createObj('Context', {
      to,
      from,
      delta : {
        x: from.left - to.left,
        y: from.top - to.top,
        width:
        from.width - to.width,
        height: from.height - to.height
      },
    });
    ctx.distance = Math.hypot(ctx.delta.x, ctx.delta.y);
    ctx.direction = {
      x: Math.sign(ctx.delta.x),
      y: Math.sign(ctx.delta.y)
    };//to, from, delta, distance, direction
    return ctx;
  }
  
  function createElementAnimation(self, hx_Element, metrics, el, motion){
    const motion_object=hx_Element.VNodeManager.motion_object;
    const animatePlay=[];
    motion_object.hooks.animation.to=el?.getBoundingClientRect();
    iterate(motion_object.animate).each((animation)=>{
      const { element, fn, params, mode } = animation;
      const response=applyHouxitAnimation(element, fn, params, {
        mode,
        self,
        motion_object
      });
      entries(response || {}).forEach(([ key, callback ])=>{
        motion_object.hooks.animation[key].add(callback);
        if(key === 'play'){
          animatePlay.push(callback);
        }
      });
    });
    tick(()=>{
      animatePlay.forEach((fn)=>{
        fn();
        
      });
    });
  }
  function createElementMotionEffect(self, hx_Element, metrics, element, motion){
    if(self[$$$operands].initializedRenderBuild){
      return;
    }
    createElementTransition(self, hx_Element, metrics, element);
    whenMounted(self, element, ()=>createElementAnimation(self, hx_Element, metrics, element));
  }
  const bezierRegexMatch =bezier=>bezier.match(/(cubic-bezier\s*\()?\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*,\s*([-\d.]+)\s*(\))?/);
  function cubicBezier(b1, b2, b3, b4){
    return __cubicBezier(isString(b1) ? b1 : [...arguments]);
  }
  function __cubicBezier(bezier) {
    const match=isArray(bezier) ? bezier : bezierRegexMatch(bezier);
    if (isString(bezier) && !match) {
      if(_makeMap_('linear,ease,ease-in,ease-out,ease-in-out,step-start,step-end', bezier.trim())){
        return easings[toCamelCase(bezier)].fn;
      }
      debugHandler(`Invalid cubic-bezier: ${bezier}`, self, true);
      return;
    }
    const stack=[]; 
    for (let i=0; i<=(isString(bezier) ? 5 : 3); i++){
      if(isArray(bezier) || (isString(bezier) && i >= 2)){
        stack.push(parseFloat(match[i]));
      }
    }
    const x1 = stack[0];
    const y1 = stack[1];
    const x2 = stack[2];
    const y2 = stack[3];
    // CUBIC HELPERS
    function A(a1, a2) {
      return 1 - 3 * a2 + 3 * a1;
    }
    function B(a1, a2) {
      return 3 * a2 - 6 * a1;
    }
    function C(a1) {
      return 3 * a1;
    }
    function calcBezier(t, a1, a2) {// cubic bezier polynomial
       return (((A(a1, a2) * t + B(a1, a2)) * t + C(a1)) * t);
    }
    function getSlope(t, a1, a2) {// derivative
      return (  3 * A(a1, a2) * t * t + 2 * B(a1, a2) * t +C(a1) );
    }
    function solveT(x) {    // SOLVE X → T
      let t = x;
      for (let i = 0; i < 8; i++) {  // Newton-Raphson iterations
        const currentSlope =getSlope(t, x1, x2);
        if (currentSlope === 0) {
          return t;
        }
        const currentX =calcBezier(t, x1, x2) - x;
        t -= currentX / currentSlope;
      }
      return t;
    }
    return function easing(t) {    // RAF USABLE EASING FUNCTION
      if (t <= 0) {
        return 0;
      }
      if (t >= 1) {
        return 1;
      }
      const bezierT = solveT(t);
      return calcBezier(bezierT, y1, y2);
    };
  }
  function createRAFInitialStyle(styles, frame, keyframes, node, progress, inverse){
    if (styles) {        // CSS TRANSITION PIPELINE
      const style =  styles(progress, inverse);
      if (style) {
        iterate(compileStyleProps(null, style)).each((style, prop)=>{
          node.style[prop]= style;
        });
      }
    }
    if(keyframes){
      const kf=keyframes(progress, inverse, 'raf');
      applyKeyframeStyles(node, kf, progress, inverse);
    }
    if (frame) {         // JS TRANSITION PIPELINE
      frame(progress, inverse);
    }
  }
  function normalizeOffsets(keyframes) {
    const count = keyframes.length - 1;
    return keyframes.map((frameDriver, i) => ({
      offset: (frameDriver.offset ?? i / count).toFixed(2),
      ...frameDriver
    }));
  }
  function normalizeKeyframesObject(obj) {
    const result = [];
    for (const selector in obj) {
      const style = obj[selector];
      const parts = selector.split(',');    // split: "0%, 100%"
      for (let part of parts) {
        part = part.trim();
        const offset = /* "50%" -> 0.5*/parseFloat(part) / 100;  
        if(isNaN(offset)){
          continue;
        }
        result.push({
          offset,
          ...style
        });
      }
    }
    result.sort((a, b) => a.offset - b.offset);  // sort offsets
    if(obj && !len(result)){
      result.push({
        offsets:0,
        ...obj
      });
    }
    return result;
  }
  function applyKeyframeStyles(node, keyframes, t, u) {
    let left;
    let right;
    for (let i = 0; i < keyframes.length - 1; i++) {    // find segment
      const a = keyframes[i];
      const b = keyframes[i + 1];
      if (t >= a.offset && t <= b.offset) {
        left = a;
        right = b;
        break;
      }
    }
    if (!left || !right) {
      return;
    }
    const range = right.offset - left.offset;  // local segment progress
    const localT = range === 0  ? 0 : (t - left.offset) / range;
    for (const prop in left) {  // interpolate styles
      if (prop === 'offset') {
        continue;
      }
      const from = left[prop];
      const to = right[prop];
      const value = interpolate(from, to, localT);
      node.style[prop] = value;
    }
  }
  function interpolate(a, b, t) {
    const na = parseFloat(a);
    const nb = parseFloat(b);
    const unit =String(b).replace(nb, '');
    if (!isNaN(na) && !isNaN(nb)) {
      return na + (nb - na) * t + unit;
    }
    return t < 1 ? a : b;
  }
  function createWAAPIBasedTransition(node, config = {}) {
    let animation = null;
    const { duration = 300, delay = 0,  easing = easings.linear,  keyframes } = config;
    function play(direction = 'in') {
      const dirIn=direction === 'in';
      const t1 = dirIn ? 0 : 1;    // 0 -> 1 for enter
      const t2 = dirIn ? 1 : 0;    // 1 -> 0 for leave
      const kf = keyframes(t1, t2, 'waapi');
      if(dirIn){
        animation?.cancel();
      }
      animation = node.animate(kf, {
        delay,
        duration,
        easing: easing.css,
        iterations: 1,
        fill: 'both',
        direction: direction === 'out' ? 'reverse' : 'normal'
      });
      return animation.finished;
    }
    return {
      in() {
        play('in');
      },
      async out() {
        play('out');
      },
      destroy() {
        animation?.cancel();
        animation = null;
      }
    };
  }
  function applyHouxitTransition(node, transition, params = {}, options ={}) {
    if (!node) {
      return;
    }
    let currentAnimation = null;
    const { mode, self } = options;
    let config = transition(node, params);
    const isvalid=validateMotionResponses(self, config, 'transition');
    if(isObject(isvalid)){
      config=isvalid;
    }else{
      return;
    }
    config=assign({
      delay:0,
      duration: 300,
      easing:easings.linear,
    }, config || {});
    let { delay, duration, easing, keyframes, frame, styles } = config;
    let disposed=false;
    if(!frame && isString(easing.css) && !keyframes && styles){
      return cssBasedTransitionEngine(node, config, params, options);
    }else if(!frame && !styles && isString(easing.css) && (keyframes && !isFunction(keyframes.keyframes))){
      return createWAAPIBasedTransition(node, {
        delay,
        duration,
        keyframes,
        easing: easing.css,
      });
    }else if(!frame && !keyframes && !styles){
      return;
    }
    function stop() {
      if (currentAnimation) {
        cancelAnimationFrame(currentAnimation);
        currentAnimation = null;
      }
    }
    function transite(direction = 'in') {
      stop();
      const start = performance.now();
      createRAFInitialStyle(styles, frame, keyframes, node, 0, 0);
      function frameDriver(now) {
        let elapsed = now - start;
        if (elapsed < delay) { // delay phase
          currentAnimation = requestAnimationFrame(frameDriver);
            return;
        }
        elapsed -= delay;
        let t =Math.min(elapsed / duration, 1);// normalized progress
        // easing
        const eased = easing?.fn  ? easing.fn(t) : easing ? easing(t) : t;
        const progress =direction === 'out'  ? 1 - eased : eased;// direction handling
        const inverse =  1 - progress;
        createRAFInitialStyle(styles, frame, keyframes, node, progress, inverse)
        if (t < 1) {        // CONTINUE / FINISH
          currentAnimation =requestAnimationFrame(frameDriver);
        } else {
          currentAnimation = null;
            // onfinish?.(
            //     direction
            // );
        }
      }
    // onstart?.(
    //     direction
    // );
    currentAnimation =requestAnimationFrame(frameDriver);
  }
    const response={
      destroy(){
        stop();
      },
      stop
    };
    if(mode === 'both' || mode === 'in'){
      response.in=function(){
        transite('in');
      }
    }
    if(mode === 'both' || mode === 'out'){
      response.out=async function(){
        transite('out');
      }
    }
    return response;
  }
  function cssBasedTransitionEngine(node, config, params = {}, options) {
    const { duration = 300, delay = 0, easing, styles, keyframes } = config;
    if (!styles) {
      return null;
    }
    const { mode } = options;
    let disposed = false;
    function run(direction = 'in') {
      if (disposed) {
        return;
      }
      const fromT = direction === 'in' ? 0 : 1;
      const toT =direction === 'in' ? 1 : 0;
      const fromU = 1 - fromT;
      const toU = 1 - toT;
      const startStyle =styles(fromT, fromU);
      const endStyle =styles(toT, toU);
      node.style.transition = 'none'; // Disable transition temporarily
      iterate(compileStyleProps(null, startStyle)).each((style, prop)=>{
        node.style.setProperty(prop, style);
      });// Apply initial state
      node.offsetHeight; // FORCE style recalculation only once
      node.style.transition = `all ${duration}ms ${easing.css} ${delay}ms`;// Activate transition
      iterate(compileStyleProps(null, endStyle)).each((style, prop)=>{
        node.style.setProperty(prop, style);
      });// Apply destination state
      const cleanup = () => {
        node.removeEventListener('transitionend', ()=>{
          cleanup()
        });
        if (disposed) {
          return;
        }
         node.style.transition = '';
      };
      node.addEventListener( 'transitionend', ()=>{
        cleanup();
      });
    }
    const response={
      destroy(){
        disposed=true;
      }
    };
    if(mode === 'both' || mode === 'in'){
      response.in=function(){
        run('in');
      }
    }else if(mode === 'both' || mode === 'out'){
      response.out=async function(){
        run('out');
      }
    }
    return response;
  }
  function get_Model_Event(element ){
    const tag=element.localName;
    const type=element.type;
    if(IS_ELEMENT_NODE(element) && Is_Form_Element(element)){
      if(tag === 'input') {
        return _makeMap_(['file'], type) ? 'change' : _makeMap_(['button','submit','reset'], type) ? 'click' : _makeMap_(['image','hidden'], type ) ? 'change' : 'input';
      }
      return tag === 'form' ? 'submit' : tag === 'select' ? 'change' : tag === 'textarea' ? 'input' : 'input';
    }
  }
  function _compileToStaticTemplateScaffold(self, render, recursive=false){
    const NodeList= isString(render) ? __HouxitHTMLParser__(render, [] ) : render;
    return len(NodeList) && len(NodeList) > 1 ? h(Fragment, NodeList) : len(NodeList) ? NodeList.pop() : [] ;
  }
  function scaffold(render, ctx){
    render=isPFunction(render) ? render() : render;
    if(!isChildrenNode(render)){
      debugHandler(`Illegal value type passed to scaffold `);
      return;
    }else if(isPrimitive(render) && !isNull(render)) {
      render=String(render);
    }
    return _compileToStaticTemplateScaffold(this, render);
  }
  function hyperscriptElArgumentsValidator(args){
    const [ type , propsOrChildren , childrenOrProps ] = args ;
    if(  len( args ) > 3 ) {
      debugHandler( `h render function cannot receive more than 3 arguments\n\n"...........${ len( args ) }" received" `  )
      return false ;
    }else if( !validateType( type , [ String , Number , Object , Function , ...( inBrowserCompiler ? [ HTMLElement ] : []) ] ) && !isHouxitBuiltinSymbolWidget(type) ) {
      debugHandler( `parameter 1 at h macro expects a native Element name or a widget options instance dataType `) ;
      return false ;
    }else if( isPObject( propsOrChildren ) && !isChildrenObj(propsOrChildren) && isPObject( childrenOrProps ) && !isChildrenObj(childrenOrProps) ) {
      debugHandler( `Unintended plain object parsed at parameter 2 and 3 of h render macro\n\nplain objects are considered as props and cannot be duplicated`) ;
      return false ;
    }else if( ( exists( propsOrChildren ) && isChildrenNode( propsOrChildren ) )  && ( exists( childrenOrProps ) && isChildrenNode( childrenOrProps ) ) ) {
      debugHandler( `arguments 2 and arguments 3 of h render receives duplicated identical Vnodes instance \n\nRenderable Vnodes cannot be duplicated` );
      return false ;
    }
    return true ;
  }
  function propsAndChildrenGetter( type , propsOrChildren , childrenOrProps ) {
    if(!hyperscriptElArgumentsValidator( [ ...arguments ] ))  {
      return {} ;
    }
    let props ;
    const lab = new Set() ;
    if( isPObject( propsOrChildren ) && !isChildrenNode( propsOrChildren ) ) { 
      props = propsOrChildren ;
      lab.add( 'propsOrChildren' ) ;
    }else if( isPObject( childrenOrProps ) && !isChildrenNode( childrenOrProps ) ) { 
      props = childrenOrProps ;
      lab.add( 'childrenOrProps' ) ;
    }
    if( !lab.has( 'propsOrChildren' ) && isChildrenNode( propsOrChildren ) ){
      childrenOrProps = propsOrChildren ;
    }
    lab.clear();
    return {
      type,
      props,
      children: childrenOrProps
    };
  }
  function _hyperscriptCompiler_() {
    return createVNode(propsAndChildrenGetter( ...arguments )) ;
  }
  function h(type, propsOrChildren, childrenOrProps){
    return _hyperscriptCompiler_(...arguments);
  }
  class BaseWidget {
    constructor(options){
      if(!options) {
        let model=new Model();
        this.model=model;
        define( this, 'model', { 
          get(){
            return model
          },
          set(modelX){
            if(!isPObject(modelX)){
              debugHandler(`Unexpected assignment to the model instance object\n\nassignment expects a plain object`);
              return false;
            }
            model=modelX;
            return true;
          }
        });
      }else if(isPObject(options)){
        for(const [key, value] of entries(options)){
          this[key]=value;
        }
      }else if(isPFunction(options)){
        this.build=options;
        if(opts && isPObject(opts)) {
          if(hasProp(opts, 'build')) {
            delete opts.build;
          }
          assign(this, opts);
        }
      }else if(isClass(options)){
        options=new options();
        if(!isBaseWidget(options)){
          debugHandler('class widget not an instance of the "Widget" base Widget');
        }else{
          for(let [key, value ] of entries(options)){
            this[key]=value;
          }
        }
      }
    }
    define(widget){
      return defineWidget(...arguments);
    }
  }
  class Widget extends BaseWidget{
    constructor(...args){
      super(...args);
    }
  }
  function animate(transition, params){
    return new Animation(transition, params);
  }
  function transite(animation, params, mode){
    return new Transition(animation, params, mode);
  }
  const garbageKey=Symbol();
  function _transformTheParamsInjectorHook(params){
    const self=getCurrentRunningEffect({
      name:'defineParams'
    });
    if(!self && !(validateCollectionArgs(arguments, {
      name:"defineParams",
      validators:[[Array, Object]],
      count:1
    } ))) {
      return generateBuildParams(self);
    }
    if(!params) return generateBuildParams(self);
    paramsManager(self, params, self.__public_model__.$attrs, true);
    return generateBuildParams(self);
  }
  function defineParams(params){
    return _transformTheParamsInjectorHook(...arguments)
  }
  function _composersSlotsMappingHook(slots){
    const self=getCurrentRunningEffect({
      name:'defineSlots'
    })
    if( !self && (!validateCollectionArgs(arguments, { 
      name: "defineSlots",
      count:1,
      validators:[Array]
    }))) {
      defineFallbackSlotsToken(self, {
        slots:[]
      }, self[$$$core].slots);
      return self[$$$core].slots;
    }
    for(const [index, sl ] of slots.entries()){
      if(!isString(sl)) {
        debugHandler(`defineSlots() adapter macro array value expects a String value\n\nat array index ..........${index}`, self, true);
        continue;
      }
    }
    defineFallbackSlotsToken(self, { 
      slots 
    }, [], self[$$$core].slots );
    return self[$$$core].slots;
  }
  function defineSlots(slots){
    return _composersSlotsMappingHook(...arguments);
  }
  function _defineSignalsEvents(signals){
    const self=getCurrentRunningEffect({
      name:'defineSignals'
    });
    if(!self && !(validateCollectionArgs(arguments, {
      name:"defineSignals",
      count:1,
      validators:[Array]
    }))) {
      return self.__public_model__.$signals;
    }
    $construct_With_Signals(self, { 
      signals 
    }, true);
    map_Events_Fall(self, self[$$$core].virtualNode, true);
    return self.__public_model__.$signals
  }
  function defineSignals(signals){
    return _defineSignalsEvents(...arguments);
  }
  function _compilerOptionsConfigHook(config){
    const self=getCurrentRunningEffect({
      name:'defineConfig'
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"defineConfig",
      count:1,
      validators:[Object]
    }))) {
      return;
    }
    setConfig(self, { 
      buildConfig: config 
    });
    return void 0
  }
  function defineConfig(config){
    return _compilerOptionsConfigHook(...arguments);
  }
  function useTransmit(transmit){
    const self=getCurrentRunningEffect({
      name:"useTransmit"
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"useTransmit",
      validators:[Function],
      count:1
    } ))) {
      return;
    }
    mapPublicationsTraverse(self, { transmit }, true);
  }
  function __useReceiver_(receive){
    const self=getCurrentRunningEffect({
      name:'useReceiver'
    });
    if(!self && !(validateCollectionArgs(arguments, {
      name:"useReceiver",
      validators:[[Array, Object]],
      count:1
    } ))) {
      return;
    }
    return receivePublicationPrefix(self, { 
      receive 
    }, true);
  }
  function useReceiver(){
    return __useReceiver_(...arguments);
  }
  function __useContext_Adapter(context){
    const self=getCurrentRunningEffect({
      name:'useContext'
    });
    if(!isHouxitBuild(self) && !(validateCollectionArgs(arguments, {
      name:"useContext",
      validators:[Function],
      count:1
    } ))) {
      return false;
    }
    if(!hasOwn(self[$$$core].opts, "context")){
      self[$$$core].opts.context=function(){
        return context.call(this, ...arguments);
      }
    }
    return true;
  }
  function useContext(callback){
    return __useContext_Adapter.call(this, ...arguments);
  }
  function runLifeCircleHooksAdapter(args, name){
    const self=getCurrentRunningEffect({ name });
    const response = validateCollectionArgs(args, {
      count:1,
      name,
      validators:[Function],
      required:[true]
    });
    if(!self && !response ) {
      return false;
    }
    self[$$$compiler][garbageKey][name].add([ ...args ][0]);
    return true;
  }
  function onSlotEffect(){
    
  }
  function onSlotRender(){
    
  }
  function postBuild(callback){
    return runLifeCircleHooksAdapter(arguments, 'postBuild');
  }
  function preMount(callback){
    return runLifeCircleHooksAdapter(arguments, 'preMount');
  }
  function postMount(callback){
    return runLifeCircleHooksAdapter(arguments, 'postMount');
  }
  function preUpdate(callback){
    return runLifeCircleHooksAdapter(arguments, 'preUpdate');
  }
  function onEffect(callback){
    return runLifeCircleHooksAdapter(arguments, 'onEffect');
  }
  function onCatch(callback){
    return runLifeCircleHooksAdapter(arguments, 'onCatch');
  }
  function onTracked(callback){
    return runLifeCircleHooksAdapter(arguments, 'onTracked');
  }
  function postUpdate(callback){
    return runLifeCircleHooksAdapter(arguments, 'postUpdate');
  }
  function preDestroy(callback){
    return runLifeCircleHooksAdapter(arguments, 'preDestroy');
  }
  function postDestroy(callback){
    return runLifeCircleHooksAdapter(arguments, 'postDestroy');
  }
  const resolvableMacros="postDestroy,preDestroy,postMount,preMount,preUpdate,postUpdate,postBuild,useAdapter,onEffect,onTracked,onCatch,onSlotRender,onSlotEffect";
  function useAdapter(widget){
    if(!self && !(validateCollectionArgs(arguments, {
      name:"useAdapter",
      validators:[[Object,Function]],
      count:1
    } ))) {
      return pass;
    }
    return Function('adapter', `
      return function ${widget.name || ""}(propsOrChildren, childrenOrProps){
        return adapter(...arguments)
      }
    `)((propsOrChildren, childrenOrProps)=>{
      return h(widget, propsOrChildren, childrenOrProps);
    });
  }
  async function _use(callback){
    const response = validateCollectionArgs(arguments, {
      count:1,
      name:'use',
      validators:[Function],
      required:[true]
    });
    if(!response) {
      return freeze();
    }
    installCurrentRunningEffect(this);
    let program;
    tick(()=>{
      program = callback();
    }).then(()=> reinstatePreviousRunningEffect());
    return await program;
  }
  async function use(callback){
    return await _use.call(this, ...arguments);
  }
  function useStyleSheet(styles, config){
    
  }
  function directiveKeyInfo(self, key , dirName){
    
  }
  function modelManager(self, opts){
    if(isNull(opts.model)) {
      return;
    }
    const modelData=isBaseWidget(opts) ? opts.model : new Model() ;
    if(hasOwn(opts, 'model') && isPFunction(opts.model)) {
      try{
        opts.model.call(modelData, generateBuildParams(self), self.__public_model__.$attrs) ;
      }catch(err){
        debugHandler(`There is an error when running the model method option\n\n${err}`, self, true);
      }
    }
    self.__public_model__=assign( self.__public_model__, modelData );
  }
  function widgetsSetup(opts, self, vnode){
    if(!isNull(opts.widgets)){
      const validNameRegex=/^[_A-Z0-9\-]+/;
      const FirstCharRegex=/^[a-zA-Z_]+/;
      entries(opts.widgets).forEach(([key, widget])=>{
        if(!FirstCharRegex.test(key.at(0)) && !validNameRegex.test(key)){
          debugHandler(`Widget registration failed,\nImproper widget namecasing found at "${key}"\n\nwidget names must atleast start with an uppercase letter or a multi-word string seperated by a hyphen or an underscore and not start with hyphen or a number`, self, true);
          return;
        }
        define(self[$$$register].widgets, key, {
          value:widget,
          enumerable
        });
      })
    }
  }
  const $$isHandler=Symbol()
  function methodsManager(opts, self, vnode){
    if(!opts.handlers) {
      return;
    }
    entries(opts.handlers).forEach(([ind, method])=>{
      if(!isPFunction(method)){
          debugHandler(`widget method option's values must be a method or a function\n\n type of "${getType(method)}" found`, self, true);
          return;
      }
      method[$$isHandler]=true;
      define(self[$$$register].handlers, ind, {
        value:method, 
        enumerable, 
        configurable
      })
    });
  }
  function inDomPropsFallback(self, props, params, garbage){
    const paramsKeys=isArray(params) ? params.values() : isObject(params) ? keys(params) : [];
    let index=0;
    paramsKeys.forEach((key)=>{
      index++;
      if(hasUpperCase(key)){
        const transpiled=to_kebab_case(key);
        if(_makeMap_(props, transpiled) && !_makeMap_(paramsKeys, transpiled)){
          if(isPObject(params)) {
            define(garbage, transpiled, { value:params[key], enumerable, configurable});
            delete props[transpiled];
          }
        }
      }
    })
  }
  function paramsKeysDefer(self, paramsSet, essenceTags, ){
    const [ props, ind , param ] = essenceTags;
    if(!_makeMap_(props || {}, ind)){
      paramsSet[ind]=undefined;
      return false;
    }else if(props ){
      const value=props[ind];
      if(validateType(value, param)) {
        paramsSet[ind]=value;
      }else{
        paramsSet[ind]=undefined;
        debugHandler(`[Params validation error] property validation for widget default value failed, property "${ind}" is of an invalid type\n\n typeof "${param.name}" required`, self, true);
        return false;
      }
    }
  }
  function arrayParamsResolver(self, paramsSet, metrics ){
    const [ props, param ] = metrics ;
    if(props && _makeMap_(props, param)){
      const value=!props[param] && !isBoolean(props[param]) ? undefined : props[param];
      paramsSet[param]=value;
    }else {
      paramsSet[param]=undefined; 
    }
  }
  function runObjectifiedParamsValidation(self, paramsSet, objMetrics, PN){
    const [ props, param, ind ] = objMetrics;
    let response = true;
    if(isTrue(param.required) && hasProp(param, 'default')){
      debugHandler(`validation error  .......\n\nthe required validator should not be truthy alongside a default value\nat at\n\n"${ind}" ${PN}`, self, true);
      response = false;
    }else if(hasProp(param, 'required') && !isBoolean(param.required)){
      debugHandler(`The "required" validation options receives an unresolvable value \nat at \n"${ind}" ${PN}\n requires a boolean value`, self, true);
      response = false;
    }else if(!hasProp(param, 'type')){
      debugHandler(`[Houxit Params validation Error] The type validator property is  required\n  Mising @ "${ind}" param`, self, true);
      response = false;
    }else if(!validateType(param.type, [Function, Array, Type]) ){
      debugHandler(`unexpected value passed as the type validator option\n expects a function or an Array of type function`, self, true);
      response = false;
    }else if(hasProp(param,'validator') && !isPFunction(param.validator)){
      debugHandler(`The "validator option must be a  function\n\nat ${ind} ${PN}`, self, true);
      response = false;
    }else if(isTrue(param.required) && !_makeMap_(props || {}, ind)){
      debugHandler(`Params validation error........\n\nThe ${PN+ ' of the '+'"'+self[$$$ownProperties].name+'"'+' widget' } params is required and seems not to  be provided "\nrequired ${PN} is missing\n\nat at\n  ....."${ind}"  param`, self, true);
      paramsSet[ind]=undefined;
      response = false;
    }
    return response;
  }
  function defaultParamBuffering(self, paramsSet, deferable){
    const [ props, param, ind ] = deferable ;
    if(hasOwn(param, 'default')){
      const defaultValue=()=> isFunction(param.default) ? param.default.call(self.__public_model__) : param.default;
      if(!hasOwn(props || {}, ind)){
        if(!validateType(defaultValue(), param.type)){
          paramsSet[ind]=undefined;
          debugHandler(`[Params validation error] ...property validation for widget default value failed, property "${ind}" is of an invalid type\n\n"${ isArray(param.type) ? '"Matches no type in the validation list' :  'typeof '+ param.type.name+" expected"}`, self, true); 
          return false;
        }else {
          paramsSet[ind]=defaultValue();
        }
      }
    }
    return true;
  }
  function paramsValidationCircle(self, paramsSet, deferable, pn){
    const [ props, param, ind] = deferable;
    const value=props ? props[ind] :  undefined;
    if(hasOwn(props, ind) && validateType(value, param.type)){
      if(hasOwn(param, 'validator')){
        let valRes=param.validator(value);
        if(!isBoolean(valRes)){
          debugHandler(`${pn} validator option method must return a Boolean value of true/false`, self, true);
          return false;
        }
        if(isFalse(valRes)){
          debugHandler(`Validation for ${pn} ${ind} returned false`, self, true);
          return false ;
        }
      }
      paramsSet[ind]=value
    }else if(hasOwn(props, ind) && !validateType(value, param.type)){
      paramsSet[ind]=undefined;
      debugHandler(`${pn} validation error .....\n\nproperty validation for ${ self ? 'widget' : 'object'} ${pn} value failed, property "${ind}" is of an invalid type\n\n${ isArray(param.type) ? "Matches no type in the required validation list" :  'typeof '+param.type.name+" expected" }`, self,  true);
      return false;
    }
    return true;
  }
  function resolveParamsPossibility(self, outlinedMetrics, in_build){
    let [ props, params ] = outlinedMetrics;
    if(isFunctionBasedBuild(self) && !in_build){
      entries(props).forEach(([ind, attr])=>{
        self.__public_model__.$attrs[ind]=attr;
      });
      return ;
    }
    let paramsSet={};
    let rv;
    if(params && len(params)){
      paramsSet=self[$$$ownProperties].$params;
      entries(params).forEach(([ind, param])=>{
        if(has$$_bind(ind)){
          debugHandler(`Params validation error "${ind}" passed to widget as a houxit directive binding
            \n\n
            The "$$" may not be appended or used on a params identifier key name`, 
            self, true);
          return;
        }
        param=transform_param_master(self, param);
        if(!validationCoreManager(self, params, paramsSet, {
          ind,
          props,
          param
        })) {
          return paramsSet;
        }
      });
    }
    return paramsSet;
  }
  function transform_param_master(self, param){
    const setup={}
    if(validateType(param, [Array, Function ]) || param instanceof Type) {
      setup.type=param;
    }else if(isString(param) || !param) {
      setup.type=Any;
    }else if(isPObject(param)) {
      return param;
    }
    return setup;
  }
  function validationCoreManager(self, params, paramsSet, metrics){
    const { ind , props, param } = metrics;
    // if(validateType(param, [Function, Array]) ){
    //   if(isFalse(paramsKeysDefer(self, paramsSet, [ props, ind, param ]))) return false;//Defer type, runs validation for tyoes in Array and JavaScript prototype Methods tyoes
    // }else if(isArray(params) && isString(param)) arrayParamsResolver(self, paramsSet, [props, param])//array and string based validation
    if(isPObject(param)){
      if(!runObjectifiedParamsValidation(self, paramsSet, [ props, param, ind ], 'params')) {
        return false;//params in object type
      }
      if(!defaultParamBuffering(self, paramsSet, [  props, param, ind ])) {
        return false;//validating defaut values
      }
      if(!paramsValidationCircle(self, paramsSet, [props, param, ind ], "params")) {
        return false;
      }
      if(!hasOwn(paramsSet, ind)) {
        paramsSet[ind]=undefined;
      }
    }
    return true;
  }
  function paramsManager(self, params, props, in_build=false){
    // if(in_build) vnode=opts;
    props=assign({}, props);
    const garbage={};
    if(!in_build) {
      defineGetter(self[$$$ownProperties], '$params', new Params());
    }
    if(params && !validateType(params, [ Object, Array ])){
      debugHandler(`param option type validation failed, \n\n
        unexpected data type of "${getType(params)}"`, self,  true);
      return;
    }
    const paramsSet=resolveParamsPossibility(self, [ props, params], in_build);
    if(!paramsSet) {
      return;
    }
    GarbagePropsPrefix(self, paramsSet, garbage, props);
    entries(props||{}).forEach(([ind, value])=>{
      if(!hasOwn(paramsSet||{}, ind)) {
        self.__public_model__.$attrs[ind]=value;
      }else if(hasOwn(paramsSet || {}, ind) && hasOwn(self.__public_model__.$attrs, ind)) {
        delete self.__public_model__.$attrs[ind];
      }
    });
    if(len(paramsSet)){
      for(const [key, value ] of entries(paramsSet)){
        defineGetter(paramsSet, key, shallow(value));
      }
    }
    if(!isStream(self.__public_model__.$attrs)){
      let $attrs=shallowReadonlyStream(self.__public_model__.$attrs);
      define(self.__public_model__, '$attrs', {
        get(){
          return $attrs;
        },
        // set(nvalue){
        //   if(!isReadonlyBypasser(nvalue)){
        //     debugHandler(`cant reset the builtin "$attrs" prop...`, self, true);
        //     return false;
        //   }
        //   $attrs=nvalue.value;
        //   return true;
        // }
      });
    }
    // inDomPropsFallback(self, props, params, garbage);
  }
  function GarbagePropsPrefix(self, paramsSet, garbage, props){
  
  }
  function _hydrate_props_fallthrough(opts, self, vnode, metrics){
    if(self[$$$operands].initializedRender) {
      return vnode;
    }
    const { forwardAttrs, forwardEvents }=self[$$$core].settings;
    const isSSR=isSSRCompiler(self);
    const { $attrs, $events } =self.__public_model__;
    let element=WidgetElementUnwrap(vnode).$element;
    if(!((forwardAttrs || forwardEvents) && !isNativeElement(element) && (len($attrs) || len($events) ))) {
      return vnode ;
    }
    const forwardProps=assign({}, $attrs);
    if(len($events) && forwardEvents) {
      forwardProps.attach=({on})=> {
        iterate($events).each((value, key)=> {
          if(!IS_VALID_EVENT_HANDLER(key)){
            // /try attaching to $events or signals in case of root widget elements
          }else{
            on(key, value);
          }
        })
      };
    }
    if(forwardAttrs && len($attrs)) {
      iterate(forwardProps).each((attr, key)=>{
        try{
          const getter=()=>$attrs[key];
          HTMLAttrsMagnifier(element, {
            key,
            value:attr,
            
          }, vnode, self, {
            is_hyperscript:self[$$$core].map.is_hyperscript,
            isRerender:self[$$$operands].initializedRender,
            vNode:vnode.VNodeManager.vNodeClass,
            forwardAttrs
          });
        }catch(err){
          debugHandler(`Encountered a road block during attributes fallthrough forwarding on element "<${vnode.$element[ isSSR ? 'type' : 'localName']} ... >"\n\n
            Check warning details info on attribute "${key}"`, self, true);
          return Break();
        }
      });
    }
    if(isHouxitWidgetElement(vnode)){//trying to forward fallthrough attrs and events
      
    }
    return vnode;
  }
  const isHouxitProp=prop=>_makeMap_('props,children', prop);
  const initBuildInstaceKey=Symbol("<<<!@---initBuild---@>>>");
  const widgetTypeKey=Symbol("[[[widget-typing-system]]]");
  function registerTemplateClasses(self, options, vnode){
    if(!hasOwn(options, 'templateClasses')) {
      return;
    }
    for(let [key, klass] of entries(options.templateClasses)){
      if(!(isPFunction(klass)|| isTemplateClass(klass))){
        debugHandler(`"${key}" templateClass property value expects a plain function`, self, true);
        return;
      }
      define(self.__public_model__, key, {
        value:isTemplateClass(klass) ? klass : createTemplateClass((...args)=>klass.call(self.__public_model__, ...args)),
        enumerable,
      });
    }
  }
  function recite_options_validation(self, opt, key){
    if(isHouxitProp(key)) {
      pass;
    }else if(isValidWidgetOption(key) && !isNodeJSOnlyOption(key) && !validateType(opt, widgetOptionType[key])){
      if(isClassBasedBuild(self) && key === 'model' && !isPObject(opt) || !isClassBasedBuild(self) ){
        debugHandler(`${key} option is of an invalid type, \n\n "${key}" option cannot be of a "${getType(opt)}" type`, self, true);
        return false;
      }
    }else if(isNodeJSOnlyOption(key) && inBrowserCompiler) {
      debugHandler(`"${key}" option is a nodejs only option, and cannot be used in houxit inbrowser compiler`, self, true);
    }else if(!isValidWidgetOption(key)) {
      self[$$$operands]._OPTIONS[key]=opt;
    }
    return true;
  }
  function sanitizedOptions(self, options, vnode){
    const argcount=len(options);
    if(vnode && hasOwn(vnode, initBuildInstaceKey)){
      self[$$$ownProperties].isInitialBuild = vnode[initBuildInstaceKey] ;
      delete vnode[initBuildInstaceKey];
    }
    if(vnode && hasOwn(vnode, widgetTypeKey)){
      self[$$$ownProperties].widgetType=vnode[widgetTypeKey];
      delete vnode[widgetTypeKey];
    }
    for(let [ key, opt] of entries(options)){
      if(!vnode){
        for(let v of opt.values()){
          const res=recite_options_validation(self, v, key);
          if(!res){
            return;
          }
        }
      }else{
        const res=recite_options_validation(self, opt, key);
        if(!res){
          return;
        }
      }
    }
    if(vnode && vnode.filesFilter.useSSRCompiler) {
      self[$$$compiler].useSSRCompiler=true;
    }
    if(vnode && vnode.filesFilter.isHydration) {
      self[$$$compiler].SSRHydrationFlag=true;
    }
    if(vnode){
      traverseMixins_Inheritance(self, options);
    }
  }
  function _hydrateHashToSelector(selector, $Data_Hash, setup){
    const trimmed = selector.trim();
    let modified=trimmed;
    const _Manage_Hash_Class=function(sel, sep){
      const splited=sel.split(sep);
      let fir=splited.shift();
      fir=`${fir}${$Data_Hash}`;
      splited.unshift(fir);
      return splited.join(sep);
    }
    const $make_Tape=function(sep){
      const split=trimmed.split(sep);
      for (let [key, sel] of entries(split)){
        sel=sel.trim();
        sel=_hydrateHashToSelector(sel, $Data_Hash, setup)
        split[key]=sel;
      }
      return split.join(` ${sep} `)
    }
    const globalMRegex=/\@ *g *\( *([ ]*.*?) *\)/
    if(globalMRegex.test(trimmed)) {
      const match=trimmed.match(globalMRegex);
      return match[1];
    }
    if(trimmed.includes(',')) {
      return $make_Tape(',');
    }
    if(trimmed.includes('+')) {
      return _Manage_Hash_Class(trimmed, '+');
    }
    if(trimmed.includes('~')) {
      return _Manage_Hash_Class(trimmed, '~');
    }
    if(trimmed.includes('>')) {
      return _Manage_Hash_Class(trimmed, '>');
    }
    if(trimmed.startsWith('@')){
      setup.ignore=true;
      return trimmed;
    }
    if(!trimmed.startsWith('@') && !trimmed.startsWith('body') && !trimmed.includes(':')  ) {
      return trimmed && !setup.ignore ? `${trimmed}${$Data_Hash}` : trimmed;
    }else if(trimmed.includes('::')) {
      return _Manage_Hash_Class(trimmed, '::');
    }else if(trimmed.includes(':') && !trimmed.startsWith('@') && !trimmed.startsWith(':')) {
      return _Manage_Hash_Class(trimmed, ':');
    }
    return modified;
  };
  const selectorPattern = /([^\r\n{]+)\s*{/g;
  function _stylesheet_hydration(self, styles){
    let setup={}
    return styles.replace(selectorPattern, (match, text)=>{
      return _hydrateHashToSelector(text, `[data-hx_build=${self[$$$ownProperties].hx_build}]`, setup)+'{';
    });
  }
  function _preCompile_StyleSheet(opts, self, vnode){
    const isSSR=isSSRCompiler(self);
    if(isHouxitTextElement(vnode)) {
      return vnode;
    }
    const scopedConfig=self[$$$core].settings.scopedStyle;
    const CssStylesheet=opts.styles ? opts.styles : null;
    if(CssStylesheet){
      let styleEl=h('style', {
        type:'text/css'
      });
      if(!isSSR){
        styleEl=generateTemplateElement(styleEl, self);
      }
      const ModifiedCssStylesheet=isTrue(scopedConfig) ? _stylesheet_hydration(self, CssStylesheet) : CssStylesheet ;
      if(isSSR) {
        styleEl.props.textContent=ModifiedCssStylesheet;
      } else {
        styleEl.textContent=ModifiedCssStylesheet;
      }
      if(vnode  && !isHouxitTextElement(vnode)) {
        if(isSSR) {
          if(!vnode.$element.children) {
            vnode.$element.children=[];
          }
          vnode.$element.children?.push(styleEl);
        }else {
          vnode.$element.append(styleEl);
        }
      }
    }
    return vnode;
  }
  function ssrSmartDefaultToggle(props, name){
    if(name==='default' && (props.name===name || isNull(props.name))){
      return true;
    }
    return false;
  }
  function isSSRCollection(vnode){
    return isSSRFragment(vnode) || isCollection(vnode);
  }
  function grabSSRVNodSlots(self, vnode, name){
    if(!isSSRCollection(vnode.$element) && isVNodeClass(vnode.$element) && vnode.$element.type === 'slot'){
      if(name === vnode.$element.props.name || ssrSmartDefaultToggle(vnode.$element.props, name)) {
        return vnode.$element;
      }
      return;
    }else if(!isSSRCollection(vnode)) {
      return;
    }
    for(let [ key, value] of vnode.$element.entries()){
      if(isVNodeClass(value) && value.type === 'slot'){
        if(name === value.props.name || ssrSmartDefaultToggle(value.props, name)) {
          return value;
        }
      }
    }
    return;
  }
  function assignSlot(self, slot, content, name, assynedSlots, renderedSlotsList, vnode){
    if(content && isHouxitElement(content) && !hasOwn(renderedSlotsList, name)){
      if(isSSRCompiler(self)){
        slot=grabSSRVNodSlots(self, vnode, name);
        if(isArray(vnode.$element) && slot){
          const slotIndex=vnode.$element.indexOf(slot);
          vnode.$element[slotIndex]=content.$element;
        }else if(slot) {
          vnode.$element=content.$element;
        }
      }else {
        slot.replaceWith(content.$element);
      }
      assynedSlots.add(name);
      renderedSlotsList[name]=content;
    }
  }
  function resolveSlotsFilter(self, vnode){
    const scopedList={};
    for(const [ key, slt] of entries(self[$$$compiler].scopeSlotsBindings) ){
      scopedList[key]=slt.element;
    }
    return scopedList;
  }
  const shouldForwwardSlots=(element, slots, self)=>{
    if(!len(slots)) {
      return false;
    }
    if(isSSRCompiler(self)) {
      return isString(element.type) && !len(element.children) && element?.type !== 'slot';
    }
    return IS_ELEMENT_NODE(element) && !element.innerHTML.trim() && element?.localName !== 'slot';
  }
  function _$slotHydrationRenderer(self, opts, vnode_build){
    const slots=self[$$$core].slots;
    if(!len(slots) || !vnode_build || !isHouxitElement(vnode_build) || isHouxitTextElement(vnode_build)) {
      return vnode_build ;
    }
    const renderedSlotsList={};
    const slot_elements=resolveSlotsFilter( self, vnode_build ) ;
    const assynedSlots=new Tuple();
    for(const [ slotN, slot_el ] of entries(slot_elements)){
      if(hasOwn(slots, slotN) && !assynedSlots.has(slotN)) {
        assignSlot(self, slot_el, slots[slotN]?.(self), slotN, assynedSlots, renderedSlotsList, vnode_build);
      }
    }
    if(shouldForwwardSlots(vnode_build?.$element, slot_elements, self) && !len(vnode_build.NodeList)){
      const forwardSlot=self[$$$core].settings.forwardSlot;
      if(forwardSlot) {
        const slotContent=hasOwn(slots, 'default') ? slots.default(self) : null;
        if(slotContent) {
          if(isSSRCompiler(self)) {
            vnode_build.$element.children.append(slotContent.$element);
          }else {
            vnode_build.$element.append(slotContent.$element);
          }
        }
        assynedSlots.add('default');
        renderedSlotsList['default']=slotContent;
      }
    }
    if(!len(renderedSlotsList)) {
      return vnode_build ;
    }
    for(const [name, content] of entries(renderedSlotsList) ){
      self[$$$core].slotsFactory.renderedSlotsList[name]=content;
    }
    return vnode_build;
  }
  function injectCustomDirective(self, options, vnode){//custom directives installer
    if(hasProp(options,'directives')){
      for(let [key, value] of entries(options.directives)){
        if(!validateType(value, [ Object, Function])){
          debugHandler(`a directive requires an object of directive hooks or a function to act as a "mounted" hook `, self, true); 
          return;
        }
        define(self[$$$register].directives, has$$_bind(key) ? key.slice(2) : key, {
          value, 
          enumerable, 
          configurable,
          writable
        });
      }
    }
  }
  function injectCustomAnimations_Transitions(self, options, vnode){//custom animations and transitions installer
    iterate(['transitions', 'animations']).each((optName)=>{
      if(hasProp(options, optName)){
        for(let [key, value] of entries(options[optName])){
          if(!isPFunction(value)){
            debugHandler(`An "${optName}" expects a plain function...`, self, true); 
            return;
          }
          define(self[$$$register][optName], key, {
            value, 
            enumerable, 
            configurable,
            writable
          });
        }
      }
    });
  }
  const configOptionsSettings = keys(ConfigValidator).join(',') ;
  function mapSettingCheck(self, key, setting){
    self=!isHouxitBuild(self) ? null : self
    if(!_makeMap_(configOptionsSettings, key)){
      debugHandler(`unrecognised settings option found in buildConfig defineConfig  at   at\n"${key} name property`,self, isHouxitBuild(self));
      return false;
    }else if(!validateType(setting, ConfigValidator[key])){
      debugHandler(`${key} config option of buildConfig receives an invalid type\n\nExpects a/an "${ConfigValidator[key].name.toLowerCase()}" type`, self, isHouxitBuild(self));
      return false;
    }
    if(key === 'delimiters'){
      let rv=validateDelimiterConstruct(self, setting);
      if(isFalse(rv)) {
        return false;
      }
    };
    return true;
  }
  function setConfig( self, opts ){
    if(!opts.buildConfig || !len(opts.buildConfig)) return false;
    entries(opts.buildConfig).forEach(([key, setting])=>{
      let rv= mapSettingCheck(self, key, setting);
      if(isFalse(rv)) return false;
      self[$$$core].settings[key]=setting;
    })
    return true
  }
  const globalProps="filters,widgets,directives,handlers,transmit,blocks,mixins";
  class Observer{
    flushType='post'
    oldValue=undefined
    constructor(self, deps, callback, options, EffectHook){
      const isEffectHook=isEffect(EffectHook);
      this.deps=deps;
      this.callback=callback;
      this.self=self
      this.options=options;
      if(hasOwn(options, 'flushType')){
        const flushType=options.flushType;
        if(!isString(flushType) && !_makeMap_('post,sync', flushType)){
          debugHandler(`unrecognised flushType options received\n\nvalue "${flushType}" is not a vailid flushType`, self, true);
        }else {
          this.flushType=flushType;
        }
      }
      this.effect=isEffectHook ? EffectHook : _createEffectBase(()=>{
        return getObsCurrentValue(self, deps, this.effect);
      }, self);
      const { value, dependencies } = isEffectHook ? EffectHook : effectRunner(this.effect);
      this.oldValue=value;
      let returnValue;
      this.effect.attachCallback(isEffectHook ? ()=>{
        returnValue=this.effect.runEffect(returnValue).value;
      } : ()=>{
        returnValue=this.callback.call(self?.__public_model__, ...this.wrapValueArgs());
        this.oldValue=this.effect.value;
      }, 'effect', this.flushType);
      if(!self){
        this.effect.flushType=this.flushType;
      }
      if(options.initial && !isEffectHook) {
        this.effect.schedule();
      }
    }
    wrapValueArgs(){
      const newValue=this.effect.runEffect().value;
      if(isCollection(this.deps)){
        const oldList=[];
        const newList=[];
        for (const [key, valueX] of this.oldValue.entries()){
          oldList.push(unwrap(valueX));
          newList.push(unwrap(arrSet(newValue)[key]));
        }
        return [ newList, oldList ];
      }
      return [ unwrap(newValue), unwrap(this.oldValue) ];
    }
    stopEffect(){
      this.effect.endLife();
    }
  }
  function Observer_Track(self, opts){
    entries(opts.observers||{}).forEach(([name, method])=>{
      EffectObserver.call(self, name, method);
    });
  }
  function _EffectDependencyNotifier(self){
    const postEffList=[];
    const observers =self[$$$operands]._OBSERVERS;
    for(const [obs, flush] of observers.values()){
      if(flush==='sync') {
        callbackHookWithCatch(self, obs, "Encountered an error during an effect flush call", true);
      }else if(flush==='post'){
        postEffList.push(obs);
      }
    };
    observers.clear();
    return function(){
      for(let hk of postEffList.values()){
        callbackHookWithCatch(self, hk, "Encountered an error during an effect flush call", true);
      }
    }
  }
  function RuntimeUtilitiesProvide( self , opts, vnode ) {
    defineGetter( self.__public_model__ , "$observe" , EffectObserver.bind( self ) ) ;
    defineGetter( self.__public_model__ , "$tick" , tick.bind( self ) ) ;
    defineGetter( self.__public_model__ , "$useAgent" , useAgent.bind( self ) ) ;
    defineGetter( self.__public_model__ , "$write", WRITE.bind( self ) ) ;
    defineGetter( self.__public_model__ , "$effectHook" , EffectAdapterHook.bind( self ) ) ;
    defineGetter( self.__public_model__ , "$pushEffect" , pushEffect.bind( self ) ) ;
  }
  function __useModelAdapter__( props ) {
    if(!validateCollectionArgs(arguments, {
      min:0,
      max:1,
      validators:[Object],
      required:[false],
      name:"useModel"
    })){
      return undefined;
    }
    let self = isHouxitBuild(this) ? this : getCurrentRunningEffect({
      name:"useModel",
      silently:isHouxitBuild(this) || isModelInstance(this)
    });
    let model;
    if(!self){
      model= isModelInstance(this) ? this : undefined;
      if(!model){
        return null;
      }
    }else{
      model=self.__public_model__;
    }
    if( !props || !len(props) ) {
      return self.__public_model__ ;
    }
    for( let [ key , value ] of entries( props ) ) {
      if(key === '__env__'){
        const __env__={};
        for(let [name, item] of entries(value)){
          if(isToken(item)){
            auto_unwrapTokenRegistery(__env__, name, item);
          }else{
            __env__[name]=item;
          }
        }
        self[$$$core].__env__=__env__;
        return model;
      }
      if(hasOwn(model, key)){
        debugHandler(`Error: Duplicate exposed property "${key}".\n
          Declared in:\n - model()\n - build() <useModel()>\nRename one of them. model <prop> retained...`, self, true);
        continue;
      }
      if(isToken(value)){
        auto_unwrapTokenRegistery(model, key, value);
      }else{
        model[key]=value;
      }
    }
    return model;
  }
  function useModel(){
    return __useModelAdapter__.call(this, ...arguments);
  }
  function checkObserversValidations(self, deps, callback){
    const errArgs=[ self, true, 'During the call of the "effect" macro'];
    if(!validateType(deps, [BaseToken, Function, String, Array, Tuple, Set, Dependency]) && !isStream(deps)){
      debugHandler(`error setting Effect observer for tracked dependency value "${deps}"\n\n invalid type\nexpects a getter or collections of getter functions`, ...errArgs);
      return false;
    }else if(!isPFunction(callback)){
      debugHandler(`effect observer callback expects a plain function method`);
      return false;
    } else if(isString(deps) && !object_Has_Path(self.__public_model__, deps)){
      debugHandler(`undefined property "${deps}" accessed in effect  macro "EffectObserver"`, ...errArgs);
      return false;
    }
    let rv;
    if(isArray(deps)){
      for( let value of deps.values()){
        const rv=checkObserversValidations(self, value, callback);
        if(!rv) {
          return false;
        }
      };
    }
    return true;
  }
  function getObsCurrentValue(self, deps, effect){
    let value = arrayInverter(deps).map((value)=> {
      if(isFunction(value) || isToken(value)){
        return read(value);
      }else if(isString(value)){
        if(!isHouxitBuild(self)){
          debugHandler(`[[Deps Tracker $warn]] Effect global tracking failed`);
          return value;
        }
        return get_Object_Value(self.__public_model__, deps);
      }else if(isCollection(value)){
        return getObsCurrentValue(self, arrSet(value), effect);
      }else if(isDependency(value)){
        effect.dependencies.add(value);
        return value.get_data();
      }
    });
    return !isArray(deps) ? value[0] : value;
  }
  function _observeAdapter_(deps, callback, options){
    const self=getCurrentRunningEffect({
      name:'observe'
    })
    if(!self && !(validateCollectionArgs(arguments, {
      name:"observe",
      validators:[[Function, Array, String, BaseToken], Function, Object],
      max:3,
      min:2,
      required:[true, true]
    } ))) {
      if(!self) {
        debugHandler(`You can't use the "$observe()" adapter within a widget public model instance`);
        return;
      }
    }
    return EffectObserver.call(self, ...arguments );
  }
  function _createObserverInstance(deps, fn, config){
    if(!validateCollectionArgs(arguments, {
      name:"scopeObserve",
      validators:[[Function, Array, String, BaseToken], Function, Object],
      min:2,
      max:3,
      required:[true, true]
    } )) {
      return;
    }
    return EffectObserver(deps, fn, config);
  }
  function _createEffectHookGlobal(fn, config){
    if(!validateCollectionArgs(arguments, {
      name:"scopeObserve",
      validators:[Function, Object],
      min:1,
      max:2,
      required:[true]
    } )) {
      return;
    }
    return EffectAdapterHook(fn, config);
  }
  function observe(deps, callback, options){
    return _observeAdapter_(...arguments);
  }
  function EffectObserver(deps, callback, options={}, EffectHook){
    if(len(arguments) === 3 && !isPObject(options)){
      debugHandler(`Invalid Argument Type: parameter 3 arguments of effect observer expects a plain object`, this, true);
      return ;
    }
    let rv=checkObserversValidations(this, deps, callback);
    if(!rv) {
      return;
    }
    const self=this;
    const observer=new Observer(self, deps, callback, options, EffectHook);
    function _stopEffect(callback){
      observer.stopEffect();
      if(len(arguments) && isPFunction(callback) ) {
        if(isHouxitBuild(self)){
          callback.call(self.__public_model__, observer.effect.value);
        }
        return true;
      }else if(len(arguments) && !isPFunction(callback)) {
        debugHandler(`unexpected args Type:: callback argument at effect stopper expects a plain function`, self, true);
        return false;
      }
    }
    return function stopEffect(callback){
      return _stopEffect(callback);
    }
  }
  function map_Events_Fall(self, vnode, in_build=false){
    const attrs=self.__public_model__.$attrs;
    if(!isAttrsInstance(attrs)){
      self.__public_model__.$attrs=new Attrs()//new readonlyBypasser(new Attrs());
    }
    if(!len(vnode.filesFilter.$$$Events)) {
      return;
    }
    for(let [ name, value ] of entries(vnode.filesFilter.$$$Events)){
      if(hasOwn(self.__public_model__.$signals, name)) {
        continue;
      }
      const transformKey=toCamelCase("on-"+name);
      self.__public_model__.$events[name]=function(){
        value.callbacks.forEach((callback)=>callback.call(this, ...arguments));
        // delete self.__public_model__.$attrs[transformKey];
      }
      
    }
  }
  function createSignalFromEventObject(self, event){
    function merger(){
      let res;
      try{
        event.callbacks.forEach((callback)=> callback.call(this, ...arguments));
      }catch(err){
        debugHandler(`Signal traceBack error:: prevíous call on Signal events failed with an error`, self, true);
        debugHandler(`${err}`, self);
        return;
      }
      return res;
    }
    return function HouxitSignal(){
      return merger.call(this, ...arguments);
    }
  }
  function $construct_With_Signals(self, options, in_build=false, vnode){
    if(!self.__public_model__.$events) {
      defineGetter(self.__public_model__, '$events', new Events());
    }
    if(in_build) {
      vnode = options;
    }
    const $$events=self[$$$core].virtualNode.filesFilter.$$$Events;
    const signals=new Tuple(...(options.signals || []));
    const $signals=self.__public_model__.$signals;
    for(const  [ key, event] of entries( $$events )){
        if(signals.has(key)) {
          $signals[key]=createSignalFromEventObject(self, event);
        }
    }
    for(const signal of signals.values()){
      if(!hasOwn($signals, signal)) {
        $signals[signal]=createSignalFromEventObject(self, {
          callbacks:[]
        });
      }
    };
  }
  function resolveCustomFiltersOrBlocks(self, options, optName, vnode){
    if(!hasOwn(options, optName) || !len(options[optName])) return;
    const sName=optName.slice(0, -1)
    for(const [name, filter] of entries(options[optName])){
      if(optName === 'blocks' ? isBuiltinBlocks(name) : _makeMap_(BUILT_IN_FILTERS, name)){
        debugHandler(`registration failure\nFailed to register the custom ${sName} with the name "${name}\n\n Which collides with a BUILT_IN_${sName.toUpperCase()} name\nregistration FAILED___`,self, true);
        continue;
      }else if(!validateType(filter, [ Function, Object] )) {
        debugHandler(`${sName.at(0).toUpperCase()+sName.slice(1)} must be a function or an object exposing a "${sName}" method option \n\nat        at\n "${name}" ${sName} registration`, self, true);
        continue;
      }
      if(isObject(filter) && (!hasOwn(filter, sName) || !isPFunction(filter[sName]))){
        debugHandler(`"${name}" ${sName} object must expose a ${sName} method\n\nregistration FAILED___`, self, true);
        continue
      }
      self[$$$register][optName][name]=filter;
    }
  }
  function __Ensure_Renderer(self, options, vnode){
    widgetsSetup(options, self, vnode);
    methodsManager(options, self, vnode);
    iterate(['filters', 'blocks']).each(bl=>resolveCustomFiltersOrBlocks(self, options, bl, vnode));
    RuntimeUtilitiesProvide(self, options, vnode);
    injectCustomDirective(self, options, vnode);
    injectCustomAnimations_Transitions(self, options, vnode);
    __Generate_Widget_Hash(self);
    RuntimeTokenDir(self, vnode);
    return options;
  }
  const alpha ='A,a,B,b,C,c,D,d,E,e,F,f,G,g,H,h,I,i,J,j,K,k,L,l,M,m,N,n,O,o,P,p,Q,q,R,r,S,s,T,t,U,u,V,v,W,w,X,x,Y,y,Z,z'
  const num='0,1,2,3,4,5,6,7,8,9';
  const alphaNum =alpha+','+num;
  const numRegex=/\d/;
  const alphaNumRegex=/\w/;
  const alphaRegex=/\b/;
  function generateUUID(length, type) {
    const isAlpha=type === 'alpha';
    const isNum=type === 'num';
    let letters=(isAlpha ? alpha : isNum ? num : alphaNum).split(',');
    let id = '';
    let stack=[];
    for(let i = 0; i < len(letters); i=i){
      const randomIndex = Math.floor(Math.random() * len(letters));
      stack.push(letters[randomIndex]);
      letters.splice(randomIndex, 1);
    }
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * len(stack));
      id += stack[randomIndex];
    }
    return isNum ? Number(id) : id;
  }
  function __Generate_Widget_Hash(self){
    self[$$$ownProperties]['hx_build']="_hx_"+generateUUID(10);
  }
  function Hydrate_Network_Prefixes(self, options){
    const vnode=self[$$$core].virtualNode;
    if(hasProp(options, 'buildConfig')) {
      setConfig(self, options);
    }
    paramsManager(self, options.params, vnode.props);
    modelManager(self, options);
    self.__public_model__=Setup_State_Effect(self);
    entries(self[$$$register].handlers).forEach(([key, handler])=>{
      define(self.__public_model__, key, { 
        value:handler.bind(self.__public_model__),
        enumerable
      });
    });
    define(self.__public_model__, "$refs", {
      value:new Refs,
      enumerable
    });
    const templateRefs=self[$$$operands].templateRefsInputs;
    for( const [ name, ref ] of entries(templateRefs)){
      auto_unwrapTokenRegistery(self.__public_model__.$refs, name, ref);
    }
    registerTemplateClasses(self, options, vnode);
    computedPropsCompiler(self, options)
    receivePublicationPrefix(self, options);
    Observer_Track(self, options);
  }
  class EffectFusion {
    callback=pass;
    constructor(self) {
      this.self=self;
      this.triggered=false;
    }
    trigger() {
      if(this.triggered){
        return;
      }
      deferEventCircleThread(this.self, this.callback());
    }
  }
  function defineProxyScopeProps(obj, config){
    const ReactiveEffect=assign(new ReactiveEffectObject(), {
      effectTrigger:pass,//the pass argument callbact, to be cslled on stream
      trackZoom:false,
      effectZoom:false,
      origin:obj,
      onEffectHook:()=>safeCall(config.onEffect),
      onTrackedHook:()=>safeCall(config.onTracked),
      readonly:false,
      shallow:false,
      thisArg:{},
      dependency:new WeakMap
    });
    return ReactiveEffect;
  }
  function auto_unwrapTokenRegistery(obj, key, value){
    define(obj, key, {
      get(){
        return unwrap(value);
      }, 
      set(newValue){
        if(isToken(newValue)){
          value=newValue;
          obj[key]=unwrap(newValue)
        }else{
          value[value[refInternalEffectKey].accessor]=newValue;
        }
        return true;
      }
    });
  }
  function proxyEffectDeepConversion(obj, ReactiveEffect, deep, config){
    for(let [key , value] of getIterator(obj)){
      if(isToken(value)){
        auto_unwrapTokenRegistery(obj, key, value);
      }else if(isProxySkipped(key) || _isProxyStream(value) || isRaw(value) || (isPFunction(value) && value[$$isHandler])){
        
      }else if(!isPrimitive(value)){ 
        obj[key]=_createStream(value, config);
      }
    }
  }
  function streamMutationTransform(args, object, effObj, name, config, dependency){
    const { readonly = false , shallow = false } = config;
    args = [ ...args ];
    let [ target, prop, valueX, receiver ] = args ;
    let value= name === "defineProperty" ? valueX.value : valueX;
    if(prop === $$$StreamProxyKey || !Reflect.has(target, prop)) {
      Reflect[name](...args);
      return true;
    }
    if(readonly && (name === 'deleteProperty' || !isReadonlyBypasser(value)) ){
      debugHandler(`Cannot reassign/mutate a "readonly" stream prop\n\n___MUTATION FAILED___\n........"{}.${prop}" property assignment/mutation using {##}.${name} method \n\n{##} object props are readonly \n.........>>>bypassKey verification failure`, );
      return false;
    }else if(readonly && (!name === 'deleteProperty' || ( (name === 'defineProperty'/* || name === 'set'*/) && isReadonlyBypasser(value)))){
      value =  value[bypassSymbol];
      valueX.value=value;
    }
    if( !isPrimitive(value) && !shallow && !isToken(value) && !isStream(value) ){
      value = _createStream(value, {
        ...config 
      } ) ;
      if(name === 'defineProperty') {
        valueX.value = value;
      }else {
        valueX = value ;
      }
    }
    if(name === 'set'){
      args[2]=value;
    }
    _notifyEffectSubs(dependency, prop, object)
    Reflect[name](...args);
    return true;
  }
  function createCollectionStream(obj, ReactiveEffect ){
    if(isMap(obj)) {
      return _createMapStream(obj, ReactiveEffect);
    }else if(isSet(obj)) {
      return _createSetStream(obj, ReactiveEffect);
    }else if(isTuple(obj)) {
      return _createTupleStream(obj, ReactiveEffect);
    }else if(isWeakSet(obj)){
      return _createWeakSetStream(obj, ReactiveEffect);
    }else if(isWeakMap(obj)){
      return _createWeakMapStream(obj, ReactiveEffect);
    }else if(isArray(obj)) {
      return _createArrayStream(obj, ReactiveEffect);
    }
    return obj;
  }
  function deepableObj(obj){
    if(isHouxitBuild(obj) || isHouxitElement(obj) || (inBrowserCompiler && obj instanceof HTMLElement)) {
      return false;
    }
    return true
  }
  function _createStream(obj, config){
    if(!isStreamable(obj) || isStream(obj) || isToken(obj) || isDomSpecialConstructor(obj)) {
      if(isToken(obj)){
        debugHandler(`[stream parsing warning] token instance cannot be passed to stream`);
      }
      return obj;
    }
    const response=validateCollectionArgs(arguments, {
      max:3,
      min:1,
      validators:[[Object, Array, Tuple, Set, Map], Object ],
      name:'stream'
    });
    if(!response) {
      return freeze();
    }
    config = isPObject(config) ? config : {};
    const { shallow=false, readonly=false } = config;
    const streamMap=new WeakMap();
    const useDeep= !shallow && isFalse(shallow);
    const ReactiveEffect = defineProxyScopeProps(obj, config);
    ReactiveEffect.shallow=shallow;
    ReactiveEffect.readonly=readonly;
    obj = createCollectionStream(obj, ReactiveEffect);
    if(useDeep && deepableObj(obj)) {
      proxyEffectDeepConversion(obj, ReactiveEffect, useDeep, config);
    }
    obj = transformProxyStream(obj, ReactiveEffect, config);
    obj[$$$StreamProxyKey]=streamMap;
    streamMap.set(obj, ReactiveEffect);
    ReactiveEffect.stream=obj;
    return obj;
  }
  function _subscribeToEffect(dependency, prop, reactive){
    if(!len(activeRunningEffects)){
      return;
    }
    const record=isToken(reactive) ? dependency : dependency.get(reactive);
    let subscriber;
    if(!record.has(prop)){
      subscriber=new Dependency(prop);
      record.set(prop, subscriber)
    }else{
      subscriber=record.get(prop);
    }
    subscriber.subscribe();
    return subscriber;
  }
  function _notifyEffectSubs(dependency, prop, reactive, value){
    const record=isToken(reactive) ? dependency : dependency.get(reactive);
    if(!record?.has(prop)){
      return;
    }
    record.get(prop)?.notifyEffects();
  }
  function collectionsPropAssertion(target, prop){
    let response=true;
    if(isSet(target) || isWeakSet(target)){
      if(_makeMap_(setMM, prop)){
        response=false
      }
    }else if(isMap(target) || isWeakMap(target)){
      if(_makeMap_(mapMM, prop)){
        response=false;
      }
    }else if(isTuple(target)){
      if(_makeMap_(tupleMM)){
        response=false
      }
    }else if(isArray(target)){
      if(_makeMap_(arrayMM)){
        response=false;
      }
    }else if(prop === $$$StreamProxyKey){
      response = false;
    }
    if(isCollection(target)){
      prop=target;
    }
    return [ response, prop ];
  }
  function isInternalKeys(key, obj){
    const NON_TRACK_KEYS = ["__proto__","prototype","constructor"];
    if(isArray(obj)){
      NON_TRACK_KEYS.push('length');
    }
    const NON_TRACK_SYMBOLS = [Symbol.toStringTag, Symbol.toPrimitive, Symbol.unscopables, Symbol.hasInstance, Symbol.isConcatSpreadable, Symbol.species, Symbol.match, Symbol.matchAll, Symbol.replace, Symbol.search, Symbol.split, Symbol.dispose,  Symbol.asyncDispose ];// Handle Symbol.iterator and Symbol.asyncIterator separately if they  establish iteration dependencies
    return _makeMap_(NON_TRACK_KEYS, key) || _makeMap_(NON_TRACK_SYMBOLS, key);
  }
  function isStreamable(v){
    return isPrimitive(v) || isCollection(v) || validateType(v, [Object, Map, WeakMap, WeakSet ]);
  }
  function transformProxyStream(obj, ReactiveEffect, config){
    const dependency=ReactiveEffect.dependency;
    const reactive= new Proxy(obj, {
      get(target, prop){
        const getter=()=> Reflect.get(...arguments);
        if(isInternalKeys(prop, target)){
          return getter();
        }
        const value=getter();
        let response=true;
        [ response, prop ] = collectionsPropAssertion(reactive, prop);
        if(response){
          const subscriber=_subscribeToEffect(dependency, prop, reactive, value);
          if(subscriber){
            subscriber.get_data=getter;
          }
        }
        return value;
      },
      set(target, prop, value, receiver){
        return streamMutationTransform(arguments, reactive, ReactiveEffect, 'set', config, dependency );
      },
      defineProperty(target, prop, value, receiver){
        return streamMutationTransform(arguments, reactive, ReactiveEffect, 'defineProperty', config, dependency );
      },
      deleteProperty(target, prop, value, receiver){
        return streamMutationTransform(arguments, reactive, ReactiveEffect, 'deleteProperty', config, dependency );
      },
      has(target, key){
        
        return Reflect.has(target, key);
      },
      ownKeys(target){
        return Reflect.ownKeys(target);
      },
      getOwnPropertyDescriptor(target, key){
        
        return Reflect.getOwnPropertyDescriptor(target, key);
      }
    });
    dependency.set(reactive, new Map());
    return reactive;
  }
  function hasPrototype(obj, prototype) {
    obj=obj.prototype;
    prototype=prototype.prototype;
    while (obj) {
      if (obj === prototype){ 
        return true;
      }
      obj = Object.getPrototypeOf(obj);
    }
    return false;
  }
  function streamReactiveHook(X, args, name, ReactiveEffect){
    const stream=ReactiveEffect.stream;
    const res = X.prototype[name].call(stream, ...args);
    _notifyEffectSubs(ReactiveEffect.dependency, validateType(stream, [Map, WeakMap]) ? args[0] : stream, stream);
    return res;
  }
  function CollectionsEffectMutationsTrap(BaseStream, ReactiveEffect){
    const mutators = hasPrototype(BaseStream, Set) || hasPrototype(BaseStream, WeakSet) ? setMM : hasPrototype(BaseStream, Array) ? arrayMM : hasPrototype(BaseStream, Tuple) ? tupleMM : hasPrototype(BaseStream, Map) || hasPrototype(BaseStream, WeakMap) ? mapMM : "";
    mutators.split(",").values().forEach((method)=>{
      if(!method) {
        return;
      }
      BaseStream.prototype[method]=(Function('streamReactiveHook', `
        return function ${ method === 'delete' ? 'del' : method }(){
          return streamReactiveHook(this, arguments);
        }`)(function(s, args){
          return streamReactiveHook.call(s, BaseStream.__proto__, args, method, ReactiveEffect);
        }));
    });
    return BaseStream;
  }
  function _createTupleStream(tuple, ReactiveEffect){
    class TupleStream extends BaseTupleStream{
      constructor(tuple){
        super(tuple);
      }
    }
    return new (CollectionsEffectMutationsTrap(TupleStream, ReactiveEffect))(tuple);
  }
  function _createArrayStream(array, ReactiveEffect){
    class ArrayStream extends BaseArrayStream{
      constructor(array){
        super(array);
      }
    }
    return new ( CollectionsEffectMutationsTrap(ArrayStream, ReactiveEffect))(array);
  }
  function _createSetStream(setArg, ReactiveEffect){
    class SetStream extends BaseSetStream{
      constructor(setArg){
        super(setArg);
      }
    }
    return new (CollectionsEffectMutationsTrap(SetStream, ReactiveEffect))(setArg);
  }
  function _createWeakSetStream(setArg, ReactiveEffect){
    class WeakSetStream extends BaseWeakSetStream{
      constructor(setArg){
        super(setArg);
      }
    }
    return new (CollectionsEffectMutationsTrap(WeakSetStream, ReactiveEffect))(setArg);
  }
  function _createMapStream(map, ReactiveEffect){
    class MapStream extends BaseMapStream{
      constructor(map){
        super(map);
      }
    }
    return new (CollectionsEffectMutationsTrap(MapStream, ReactiveEffect))(map);
  }
  function _createWeakMapStream(map, ReactiveEffect){
    class WeakMapStream extends BaseWeakMapStream{
      constructor(map){
        super(map);
      }
    }
    return new (CollectionsEffectMutationsTrap(WeakMapStream, ReactiveEffect))(map);
  }
  function stream(obj, config){
    return _createStream(...arguments)
  }
  function shallowStream(obj, config){
    return stream(obj, {
      shallow:true,
      ...( isObject(config) ? config :  {})
    })
  }
  function readonlyStream(obj, config){
    return stream(obj, {
      readonly:true, 
      ...( isPObject(config) ? config : {} )
    })
  }
  function shallowReadonlyStream(obj, config){
    return readonlyStream(obj, {
      shallow:true,
      ...( isObject(config) ? config :  {})
    } );
  }
  class SubscriptionEffectBoard{
    subtree=[];
    createWatch(){
      const index=len(this.subtree);
      this.subtree.push({
        subscritions:new Tuple(),
      });
      return index;
    }
    endWatch(patch){
      if(!len(this.subtree)) {
        return [];
      }
      const eff=this.subtree[patch];
      this.subtree.splice(patch, 1);
      return eff.subscritions.list();
    }
    subscribe(subs, patch){
      const index=isNaN(Number(patch)) ? len(this.subtree) : Number(patch);
      if(index < 1) {
        return;
      }
      for(let i=0; i < index; i++){
        this.subtree[i].subscritions.extend(arrayInverter(subs, true));
      }
      return true;
    }
  }
  function Setup_State_Effect(self){
    let obj=self.__public_model__;
    const dependency = new EffectFusion(self);
    self[$$$operands].dependency=dependency;
    for(let [key , value] of entries(self[$$$ownProperties].$params)){
      define(obj, key, {
        get(){
          return value.data;
        }
      });
    }
    obj=_createStream(obj, {});
    return obj;
  }
  function defineGetter(obj, prop, value, desc={}){
    const { enumerable=false, writable=false, debug=false }=desc;
    const descriptor={
      get (){
        return value;
      },
    }
    if(writable || debug ){
      descriptor.set=function(valueX){
        if(writable) {
          value=valueX;
        }else if(debug) {
          debugHandler(`"{}<${prop}>" not writable!!!`);
        }
      }
    }
    if(isTrue(enumerable)) {
      descriptor.enumerable=enumerable;
    }
    return define(obj, prop, descriptor);
  }
  function isSSRCompiler(self){
    return isHouxitBuild(self) && isTrue(self[$$$compiler].useSSRCompiler);
  }
  function isHydration(self){
    return isHouxitBuild(self) && isTrue(self[$$$compiler].SSRHydrationFlag);
  }
  const registra=()=> ({ 
    transitions:{}, 
    animations:{}, 
    directives:{}, 
    filters:{}, 
    widgets:{}, 
    handlers:{}, 
    agents:{}, 
    blocks:{},
    mixins:new Tuple,
    properties:{},
    templateClasses:{}
  });
  const HXBuildOwnPropertiesInitial=(opts, vNode)=>({ 
    name:opts?.name ? opts.name : isString(vNode.type) ? vNode.type : 'AnonymousWidget', 
    slot_name:undefined , 
    isInitialBuild:false ,
    widgetType:undefined,
    hx_Element:undefined,
    isSelfRecursive:false
  });
  const HXBuildCoreInitial= (opts, vnode)=> ({
    GeneticProvider:opts,
    virtualNode:vnode,
    utils:{}, 
    settings:Compiler_Config_Options, 
    slots: new Slots, 
    rootNodesList:[],
    map:{ 
      is_hyperscript:vnode.is_hyperscript
    }, 
    slotsFactory:{
      renderedSlotsList:{},
    }
  });
  function createPriorityFlush(effect, callback){
    if(!isEffect(effect)) {
      return pass;
    }
    effect.attachCallback(callback, 'priority');
    return function(){
      effect.endLife();
    }
  }
  const HXBuildCompilerInitial=()=>({
    whenMountedHooks:new Tuple,
    composedSlots:{},
    rawChildren:()=> undefined,
    VN_Tree:{
      KEYS_INDEXES:new Tuple,
      LEAGUE_TREE:{},
      priority:new Tuple
    },
    memoVault:new Tuple,
    template:undefined,
    scopeSlotsBindings:{},
    SSRHydrationFlag:false,
    useSSRCompiler:false
  })
  const HXBuildOperandInitial=()=>({
    installers_plugin:new Tuple,
    applied_mixins:new Tuple,
    _OBSERVERS:new Tuple, 
    _LIFECIRCLEHOOKS:{}, 
    _OPTIONS:{},  
    garbageWatch:false,
    awaitReady:null,
    initializedRender:false , 
    effectRerender:false,
    onRenderTracked:false,
    onEffectWatch:false, 
    modelMethods:{},
    templateRefsInputs:{},
  });
  function createCordinationProperties(self, vnode){
    self.__public_model__=new Model;
    let opts=vnode;
    if(isVNodeClass(vnode)) {
      opts= defineWidget(vnode.prototype_);
    }
    self[$$$ownProperties]= HXBuildOwnPropertiesInitial(opts, vnode);
    defineGetter(self, $$$register, registra() );
    defineGetter(self, $$$operands, HXBuildOperandInitial());
    defineGetter(self, $$$core , HXBuildCoreInitial(opts, vnode) );
    defineGetter(self[$$$core], '$globals', {
      register:registra(),
      setupOptions:{}, 
      transmited:{}, 
      legalOptions:{}, 
      controller:new Set(),
    });
    defineGetter(self, $$$compiler, HXBuildCompilerInitial());
    defineGetter(self.__public_model__, '$signals', new Signals);
    getHouxitBuildInstance(self, opts, vnode);
    return [ opts, vnode ];
  }
  function slotDebuger(self){
    return (slotName, slotContent)=>{
      debugHandler(`Problem when mapping slot element>>>\n\nMore than one vnode slot name seems to be pointing to the  same slot\nat at "${slotName}" slot Directive  of "${slotContent.$element.outerHTML}" \n\nmaybe you should wrap them within a single template wrapper`, self, true, "During the induction of slots contents");
      $warn(`Note: unnamed contents will be automatically weapped as "default" slot\nWon't conflict with other default contents`, self );
      return;
    }
  }
  function smartSlotMapping(self, slotContent, slotName, defaultSlotsRecord, slotsCore, patchFlags){
    if(slotName === 'default') {
      defaultSlotsRecord.push(slotContent);
    }else if(!hasOwn(slotsCore, slotName) ){
      slotsCore[slotName]=function slotRender() {
        return  new HouxitFragmentElement( arrayInverter( slotContent ), patchFlags);
      }
    }else {
      return slotDebuger(self)(slotName, slotContent);
    }
  }
  const shouldUnwrap = child=> isHouxitFragmentElement(child) && child.isLoopWrappRenderer;
  function unwrapLoopWrappers(children){
    const childrenRender=new Tuple();
    for(const child of children.values()){
      if(shouldUnwrap(child)){
        childrenRender.extend(unwrapLoopWrappers(child))
      }else {
        childrenRender.add(child);
      }
    }
    return childrenRender.list();
  }
  function _induceSlotContents(self, options, setData , renderedSlotsList){
    const isRerender=self[$$$operands].initializedRender;
    let [ children, patchFlags, Flaghx_Element ] = setData;
    const defaultSlotsRecord=[];
    const slotsCore=renderedSlotsList ? renderedSlotsList : self[$$$core].slots;
    if(!children || !len(children) ) {
      defineFallbackSlotsToken(self, options, defaultSlotsRecord, slotsCore);
      return renderedSlotsList;
    }
    children = unwrapLoopWrappers(children);
    const hx_Element=options.children?.hx_Element;
    const is_hyperscript= self[$$$core].map.is_hyperscript;
    for(let slotContent of (children || [])?.values() ){
      if(isHouxitElement(slotContent)){
        const slotName=slotContent.slot_name || 'default';
        smartSlotMapping(self, slotContent, slotName, defaultSlotsRecord, slotsCore, patchFlags);
      }
    }
    if(len(defaultSlotsRecord)) {
      slotsCore.default=function slotRender() {
        return _getNodeListResponse(defaultSlotsRecord, patchFlags);
      }
    }
    if(is_hyperscript ) {
      defineFallbackSlotsToken(self, options, defaultSlotsRecord, slotsCore);
    }
    return renderedSlotsList;
  }
  function defineFallbackSlotsToken(self, options, defaultSlotsRecord, slotsCore){
    function factory(name){
      return function slotRender(def){
        if(len(arguments) && def && !isChildrenNode(def) || (isArrowFunction(def) && !isChildrenNode(def()))){
          debugHandler(`Render functions default slot content must be a render function also`, self, true);
           return null;
        }else if(def && isChildrenNode(def)) {
          def=isPFunction(def) ? def(self) : def;
          return createVNode({
            type:"slot", 
            props:{ 
              name 
            },
            children:def 
          });
        }
        return createVNode({
          type:"slot", 
          props:{ 
            name 
          }
        });
      }
    }
    const o_slots=new Tuple(...(options.slots && len(options.slots) ? options.slots : [ "default" ]) );
    if(!o_slots.has("default")) {
      o_slots.add("default");
    }
    for(const sn of o_slots.values()){
      if(!hasOwn(self[$$$compiler].composedSlots, sn)){
        self[$$$compiler].composedSlots[sn]=factory(sn);
      }
    }
  }
  function $ensureLifeCircleHooks(self, options, vnode){
    const hooks="preBuild,postBuild,postMount,preMount,postUpdate,preUpdate,preDestroy,postDestroy,onTracked,onEffect,onCatch,onSlotEffect,onSlotRender";
    const dirHKAlibi={ 
      init_hook:'preBuild',
      mounted_hook:'postMount',
      created_hook:'postBuild',
      updated_hook:'postUpdate',
      destroyed_hook:'postDestroy'
    }
    let customDirHk={}
    if(vnode[$$$customDirs]){
      entries(vnode[$$$customDirs]).forEach(([key, dirhk])=>{
        if(len(dirhk)){
          customDirHk[dirHKAlibi[key]]=function(){
            callSetHooks(self, dirhk, null, self.__public_model__);
          }
        }
      })
      delete vnode[$$$customDirs];
    }
    hooks.split(',').forEach((hookN)=>{
      if(options[hookN] || len(customDirHk)){
        if( len( customDirHk) &&  hasOwn(customDirHk, hookN)){
          let thisHook=customDirHk[hookN];
          const user_defined_callback=vnode[hookN] || pass;
          options[hookN]=function(utils){
            if(isPFunction(thisHook)) {
              thisHook();
            }
            if(user_defined_callback) {
              user_defined_callback.call(self.__public_model__, utils);
            }
          }
        }
        self[$$$operands]._LIFECIRCLEHOOKS[hookN]=options[hookN]||pass;
      }else {
        self[$$$operands]._LIFECIRCLEHOOKS[hookN]=pass;
      }
    })
    if(isFalse(self[$$$operands].initializedRender)) {
      callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.preBuild,'preBuild');
    }
  }
  function callbackHookWithCatch(self, hook, name, special=false){//this function calls a lifecircle hook with a catch debugger
    if(isPass(hook)) {
      return;
    }
    try{
      hook.call(self.__public_model__);
    }catch(err){
      debugHandler(err)
      debugHandler(special ? name : `${name} hook \n\n`,self, true, `during the call of the "${name}" LifeCycle hook`, self, true);
      $warn(`${err}`);
    }
  }
  function RuntimeTokenDir(self, vnode){
    const templateRef=vnode.filesFilter.templateRef;
    safeCall(templateRef, self.__public_model__);
  }
  function normalizeHyperscriptSlotting(self, children, hx_Element, patchFlags, isRerender, config){
    const renderSlotList=[];
    const except=new Set();
    const slotBindings=self[$$$compiler]?.scopeSlotsBindings;
    const $$$context=()=>self[$$$core].map.$$$context;
    for(let [key, value] of children.entries()){
      if(isNull(value)) {
        continue;
      }
      const fn=value;
      const callback=()=>safeCall(fn, $$$context()?.value);
      value = callback();
      if(isSlotInstance(value)){
        for(let [slotN, slotRender] of entries(value.slots)){
          slotRender=slotRender.call(($$$context()?.value), slotBindings[slotN]?.bindings);
          if(!isChildrenNode(slotRender)){
            debugHandler(`Element Recognition Error: unrecognised element/value passed to render`, self, true);
            return;
          }
          installSuspense(slotRender, getBoundary(hx_Element));
          slotRender=arrayInverter(_HouxitCoreRenderer(arrayInverter( slotRender ), patchFlags, null, hx_Element, null, config));
          if(slotN !=='default' && except.has(slotN) ){
            debugHandler(`Duplicate Slot Error: slot content with the name mapping "${slotN}" has already be defined\n\nUntraced slotting mapping\n"${slotN}" slot Duplicate found`, self, true);
            return;
          }else{
            except.add(slotN);
            slotRender.forEach((hx_el)=> {
              hx_el.slot_name=slotN;
              renderSlotList.push(hx_el);
            });
          }
        }
      }else{
        except.add("default");
        if(isPrimitive(value)){
          value=callback;
        }
        installSuspense(value, getBoundary(hx_Element));
        const slotRender=_HouxitCoreRenderer(value, patchFlags, null, hx_Element, null, config);
        arrayInverter(slotRender).forEach((hx_el)=> {
          hx_el.slot_name="default";
          renderSlotList.push(hx_el);
        });
      }
    }
    except.clear();
    return renderSlotList;
  }
  function arrayInverter(value, useCollections=true){
    if(!isArray(value) && isCollection(value) && useCollections){
      return arrSet(value);
    }
    if(!isNull(value) && (useCollections ? !isCollection(value) : !isArray(value))){
      const array=[];
      array.push(value);
      return array;
    }else if(isNull(value)) {
      return [];
    }
    return value;
  }
  function collectCompiler_Args(self, ){
    
  }
  function slotsGeneticProvider(self, options, vnode, isRerender){
    if(!vnode.children) {
      return;
    }
    let children =vnode.children;
    const slotsCompilerArgs= isInitialBuild(self) ? {
      self,
      hx_Element:vnode?.hx_Element,
      config:{}
    } : vnode.filesFilter?.slotsCompilerArgs;
    let { hx_Element, self:patchFlags, fall, config } =  slotsCompilerArgs;
    const is_hyperscript=vnode.is_hyperscript;
    if(!config) {
      config={};
    }
    config.patchFlags=self;
    let context=()=>self[$$$core].map.$$$context?.value || {};
    let childrenRender;
    config.slotTap={
      parent:slotsCompilerArgs.hx_Element
    }
    config.topLevelSlotContext=true;
    if(is_hyperscript) {
      childrenRender=normalizeHyperscriptSlotting(self, children, hx_Element, patchFlags, isRerender, config);
    }else {
      context=self[$$$core].context;
      installSuspense(children, getBoundary(vnode));
      childrenRender= _HouxitCoreRenderer(children, patchFlags, null, hx_Element, context?.(), config );
    }
    return [ arrayInverter(childrenRender), patchFlags, hx_Element, {
      hx_Element,
      patchFlags
    }] ;
  }
  function createContext_Parameters(self, options, vnode){
    if(!options.context) {
      return;
    }
    const effect=_createEffectBase(function(){
      return options.context.call(self.__public_model__);
    }, self);
    try{
      effectRunner(effect);
    }catch(err){
      debugHandler(`Provider Method Error: Encountered an error while trying to run the context >> provider option method`, self, true);
      debugHandler(`${err}`, self);
      return;
    }
    if(!isPObject(effect.value)){
      debugHandler(`Context Return Error: The context option return value expects a plain object\nReturning a non plain object is invalid `, self, true);
      return;
    }
    const value=token(effect.value);
    self[$$$core].map.$$$context={
      get value(){
        return value.data;
      }
    };
    effect.attachCallback(()=>{
      assign(value.data, effect.runEffect().value);
    });
  }
  function runtimeSlotsContext_Manager(self, options, patch, vnode ){
    const context=vnode.hx_Element?.VNodeManager[$$$context];
    if(!(context && context.prop )) {
      return;
    }
    const value =()=>self[$$$core].map?.$$$context.value;
    const prop=context?.prop;
    if(!hasOwn(self[$$$core].map, '$$$context')) {
      return;
    }
    const { hx_Element, self:patchFlags } = vnode.filesFilter.slotsCompilerArgs;
    function contextPropsProvider(){
      if(!destructWarn(prop, value(), self)) {
        return {};
      }
      if(isDestructureSyntax(prop)){
        const contextProps = {
          [$$dexTransformKey]:{ 
            sourcesArray:[ value() ], 
            syntaxArray:[ prop ]
          }
        };
        return contextProps;
      }else {
        return { [prop]:value()};
      }
    }
    self[$$$core].context=contextPropsProvider;
  }
  function defineLateGlobalProps(self, build){
    if(isHouxitElement(build)) {
      useModel.call(self, { 
        $element:build.$element
      });
    }
  }
  function isInitialBuild(self){
    return isHouxitBuild(self) && isTrue(self[$$$ownProperties].isInitialBuild)
  }
  function mapPublicationsTraverse(self, opts, adapter){
    if(!hasOwn(opts, 'transmit')) {
      return;
    }
    const effect=_createEffectBase(()=>{
      return opts.transmit.call(self.__public_model__)
    }, self);
    if(!isPObject(effect.value)) {
      debugHandler(`${ adapter ? 'useTransmit method argument' : 'transmit method option'} expects a plain object as a return value`, self, true);
      return;
    }
    const globalBoard= isInitialBuild(self) ? self[$$$core].$globals.transmited : self[$$$core].$root[$$$core].$globals.transmited;
    for(const [key, valueX] of entries(effect.value)){
      globalBoard[key]=valueX;
    }
    effect.endLife();
  }
  function receivePublicationPrefix(self, opts, in_build=false){
    if(!hasOwn(opts, 'receive')) {
      return;
    }
    const globalBoard= isInitialBuild(self) ? self[$$$core]?.$globals.transmited : (self[$$$core].$root||{})[$$$core]?.$globals.transmited;
    for(let [ key, valueX] of getIterator(opts.receive)){
      let keyName = isArray(opts.receive) ? valueX : key ;
      if( !validateType(keyName, [String, Symbol])){
        debugHandler(`Arrays value of receive option expects a string / Symbol values of transmited property names\n\n
          ........"${keyName}"`, self, true);
        return
      }
      let defaultValue;
      if(!hasOwn(globalBoard, keyName)){
        if(isPObject(valueX) && hasProp(valueX, 'default')){
          if(!isPFunction(valueX.default)) {
            defaultValue=valueX.default
          }else{
            defaultValue = !isArrowFunction(valueX.default) ? valueX.default.call(self.__public_model__) : valueX.default()
          }
        }else{ 
          debugHandler(`No transmited props with the provided receive key "${keyName}"\n\n
            Unrecognized receive property`, self, true);
          return;
        }
      }
      let received= get_Object_Value( globalBoard , keyName );
      if(isPObject(valueX) && hasOwn(valueX, 'receive')){
        if(!isPFunction(valueX.receive)){
          debugHandler(`receive option of "${key}" receive property expects a function`, self, true);
          return 
        }
        received = !isArrowFunction(valueX.receive) ? valueX.receive.call(self.__public_model__, received ) : valueX.receive(received);
      }
      if(!hasOwn(globalBoard, keyName) && !exists(received) && hasProp(valueX, 'default') && exists(defaultValue)) received=defaultValue ;
      let aliasKey=keyName;
      if(isPObject(valueX)){
        if(!hasOwn(valueX, 'alias')){
          debugHandler(`receive prop "${keyName}" object expects an "alias" property`, self, true);
          return;
        }else if(!validateType(valueX.alias, [ String, Symbol])){
          debugHandler(`"${keyName}" receive alias property expects a String or a Symbol`, self, true);
          return;
        }else if(!exists(valueX.alias)){
          debugHandler(`alias property of "${keyName}" receive property is an empty string or undefined prop naming`, self, true);
          return
        }else if(validateType(valueX, [String, Symbol])){
          valueX={ alias:valueX };
        }
        aliasKey = valueX.alias;
      }
      if(object_Has_Path(self.__public_model__, aliasKey)){
        debugHandler(`"${aliasKey}" property of receive conflicts with an existing model property\n\n
          Try configuring an alias property instead\n\n............at "${keyName}"`, self, true);
        return;
      }
      if(!in_build) {
        define( self.__public_model__ , aliasKey , { 
          value : received  ,
          enumerable , 
          configurable 
        } ) ;
      }else {
        return received;
      }
    }
  }
  function traverseMixins_Inheritance(self, options){
    const globalmixins=getGlobalRegistery(self).register.mixins.list();
    const mixins=new Tuple(...[...globalmixins, ...(options.mixins || [])]).list();
    if(!len(mixins)) {
      return;
    }
    applyMixinMergeStrategy(self, options, mixins);
  }
  function applyMixinMergeStrategy(self, options, mixins){
    const applied_mixins=self[$$$operands].applied_mixins;
    const store={};
    for(const mx of mixins.toReversed().values()){
      if(!validateType(mx, [Function, Object])){
        debugHandler(`[Houxit Mixin Merge Warn] Mixins expects a plain fuction/object instance/valid Houxit widget instance`, self, true);
        return
      }else if(applied_mixins.has(mx)){
        continue;
      }
      applied_mixins.prepend(mx);
      defineMixinStrategy(self, options, mx, store);
    }
    sanitizedOptions(self, store)
    makeMerge(self, store, options);
  }
  function defineMixinStrategy(self, options, mixin, store){
    for(let [ name, value ] of entries(isPFunction(mixin) ? { build:mixin } : mixin)){
      if(isInvalidMixinOption(name)){ 
        $warn(`[Mixin Strategy Mismatch] Ignored "${isPFunction(mixin) ? 'Functional mixin as [build]' : name}" in mixin. UI-defining options are only allowed on widgets. \nSee [Mixins] guide and merge strategy reference.`, self, true);
        continue;
      }
      if(!store[name] || !isTuple(store[name])){ 
        const inn=store[name];
        store[name]=new Tuple
        if(inn && !isTuple(inn)){
          store[name].add(inn);
        }
      }
      store[name].add(value);
    }
  }
  function makeMerge(self, store, options){
    for(let [name, values ] of entries(store)){
      if(isMergeableArrays_Objects(name)){
        const mxStore={};
        values.forEach(vl=>{
          smartArrayObjMerger(name, vl, mxStore);
        });
        options[name]=smartArrayObjMerger(name, options[name] || {}, mxStore);
      }else if(isMergableMethods(name)){
        const insider=options[name];
        options[name]=function(...args){
          values.list().toReversed().forEach(fn=> fn.call(this, ...args));
          return insider?.call?.(this, ...args);
        }
      }else if(isMergableObjects(name)){
        let pack={};
        values.list().toReversed().forEach(obj=>{
          assign(pack, obj);
        });
        options[name]=assign(options[name] || {}, pack);
      }else if(isMergeableArrays(name)){
        options[name]=[...(options[name] || [] ), ...values ];
      }else{
        if(!hasOwn(options, name)){
          options[name]=values.at(0);
        }
      }
    }
  }
  function smartArrayObjMerger(name, values, compose={}){
    for(let [key, item ] of getIterator(values)){
      if(isArray(values)){
        if(name==='params'){
          compose[item]={
            type:Any
          }
        }else if(name==='receive'){
          compose[item]={}
        }
      }else{
        compose[key]=item;
      }
    }
    return compose;
  }
  function getHouxitBuildInstance(self, options, vnode){
    if(hasOwn(vnode, factoryHXSelfInstance)){
      self[$$$ownProperties].isSelfRecursive=true;
      delete vnode[factoryHXSelfInstance];
    }
    if(!hasOwn(options, 'hx_Element') || !isHouxitElement(options['hx_Element'])) {
      return;
    }
    self[$$$ownProperties].hx_Element=options['hx_Element'];
  }
  function hydrateModelBinding(self, opts){
    if(!hasOwn(opts, 'bindDrivers') || !len(opts.bindDrivers)) return;
    const drivers=opts.bindDrivers;
    if(!hasOwn(opts, 'params')) opts.params={};
    else if(isArray(opts.params) && isPObject(drivers)){
      const params=opts.params;
      opts.params={};
      for(let p of params.values()){ 
        opts.params[p]=Any;
      }
    }
    if(!hasOwn(opts, 'signals')) opts.signals=[];
    for(let [ key, item ] of getIterator(drivers) ){
      if(isArray(drivers)){
        key=item;
        item=Any;
      }
      const signalKey='update'+(key!=='modelValue' ? ':'+key : "" );
      if(!hasOwn(opts.params, key)) opts.params[key]=item;
      if(!opts.signals.includes(signalKey)) opts.signals.push(signalKey);
    }
  }
  function HouxitBuild( options ) {
    const [ opts, vnode ] = createCordinationProperties( this , options ) ; //create properties;
    this[$$$compiler].initialization=()=>{
      sanitizedOptions( this , opts, vnode ) ;//sanitize received options
      validateRegistryProvider( this ) ;
      $ensureLifeCircleHooks( this , opts, vnode ) ;
      setConfig(this, opts, vnode );
      hydrateModelBinding(this, opts);
      $construct_With_Signals(this, opts, false, vnode);
      map_Events_Fall(this , vnode);
      __Ensure_Renderer(this, opts, vnode);
    }
    this[$$$compiler].templateProcessor = function (self, build, buildFacade, slotter ){
      if(!self[$$$operands].initializedRender){
        if(!(isPromise(buildFacade) && isTrue(slotter))){
          build=_$slotHydrationRenderer(self, opts, build);
        }
      }
      build =  _hydrate_props_fallthrough(opts, self, build);
      build=_preCompile_StyleSheet(opts, self, build);
      defineLateGlobalProps(self, build);
      return build;
    }
    resolveBuildLab(this, opts, vnode);
  }
  function resolveBuildLab(self, options){
    self[$$$core].build=options.build || options.template || options.markdown ;
    self[$$$core].opts=options;
  }
  function isRender(build){
    return isPFunction(build) && build.name === 'render';
  }
  function $$houxitPower(){
    
  }
  function getComposersContext(self, ){
    const adapters={
      signals:self.__public_model__.$signals,
      attrs:self.__public_model__.$attrs,
      slots:self[$$$compiler].composedSlots,
      events:self.__public_model__.$events,
      use:use.bind(self)
    };
    for(const [key, macro] of entries(assign( adapters, self[$$$core].utils))){
      define(adapters, key, { 
        value:macro, 
        enumerable 
      });
    }
    return adapters;
  }
  function trackTemplateSource(self, selector, fall, hx_Element, ssc){
    fall = fall || {};
    if(ssc) {
      fall= smartDextCtxMerging(fall, ssc);
    }
    let render = pass;
    inDomCaveatRemodeling(self);
    const isRerender=()=>self[$$$operands].initializedRender;
    const starter=()=>self[$$$compiler].StarterTemplate;
    const temp_build=()=> isRerender() ? memMove(starter(), true ) : self[$$$core].build;
    self[$$$core].map.is_hyperscript=false;
    if(!temp_build() && selector && isInitialBuild(self) && !isSSRCompiler(self) && inBrowserCompiler){
      self[$$$core].build=escapeReverseDecoder(_GenerateRoot(selector, self)?.innerHTML || '');
    }
    const temp=temp_build();
    if(isString(temp) || isCollection(temp)){
      render = (instance)=> {
        return _HouxitCoreRenderer(temp_build(), instance, false, hx_Element, fall, {
          official:true,
          self
        });
      }
      self[$$$core].render=render;
    }
    return render;
  }
  function createGarbageCollector(self){
    self[$$$compiler][garbageKey]={
      postBuild:new Tuple(),
      postUpdate:new Tuple(),
      postMount:new Tuple(),
      postDestroy:new Tuple(),
      preDestroy:new Tuple(),
      preUpdate:new Tuple(),
      preMount:new Tuple(),
      onEffect:new Tuple(),
      onTracked:new Tuple(),
      onCatch:new Tuple()
    }
  }
  function mapGarbargeHooks(self){
    for(const [name, tuple] of entries(self[$$$compiler][garbageKey])){
      if(!len(tuple)) {
        continue;
      }
      function hook(){
        tuple.list().forEach(function(fn){
          callbackHookWithCatch(self, fn, name );
        });
      }
      const joinder=self[$$$operands]._LIFECIRCLEHOOKS[name];
      if(isPass(joinder)) {
        self[$$$operands]._LIFECIRCLEHOOKS[name]=hook;
      }else {
        self[$$$operands]._LIFECIRCLEHOOKS[name]=function(){
          hook();
          callbackHookWithCatch(self, joinder, name );
        }
      }
    }
    delete self[$$$compiler][garbageKey];
  }
  function validateMemoContent(self, children){
    self=self[$$$core].$owner;
    if(len(children) > 1 || (!len(children) || !validHouxitWidget(children[0].prototype_))){
      debugHandler(`"<Memo>" expects only one child component instance`, self, true );
      return false;
    }
    return true;
  }
  function generateBuildParams(self){
    const params=self[$$$ownProperties].$params;
    const obj=new Params();
    for(let [key, value] of entries(params)){
      define(obj, key, {
        get(){
          return value.data;
        }
      });
    }
    return obj;
  }
  function handleBuildGenerator(self, selector){
    let context, render, parent;
    let widgetBuild=self[$$$core].build;
    const isRerender=self[$$$operands].initializedRender;
    const $parent=self[$$$core].$parent;
    if(isFunction(widgetBuild)){
      if(!isRerender && isAsyncFunction(widgetBuild)){
        self[$$$core].build=()=>[];
       return (async function(){
          installCurrentRunningEffect(self);
          const builder= await widgetBuild.call(undefined, generateBuildParams(self), getComposersContext(self), $$houxitPower );
          reinstatePreviousRunningEffect();
          self[$$$core].build=function(){
            return builder;
          }
          handleBuildGenerator(self, selector);
          self[$$$ownProperties].asyncBuildCache
       })();
      }
      let responseRender, renderer;
      createGarbageCollector(self);
      const useState=!isArrowFunction(widgetBuild);
      try{
        if(useState) {
          installCurrentRunningEffect(self);
        }
        renderer = widgetBuild.call(undefined, generateBuildParams(self), getComposersContext(self), $$houxitPower );
        if(useState) {
          reinstatePreviousRunningEffect();
        }
        responseRender=renderer;
        if(isArrowFunction(widgetBuild) && !isPFunction(renderer) ) {
          responseRender=()=>renderer;
        }
      }catch(err){
        debugHandler(`Error during the call of the build function`,self, true, DebugFlags.build);
        debugHandler(err)
        if(isXtruct(widgetBuild)){
          debugHandler(`build options method seems to be a constructor function`, self);
        }else {
          debugHandler(`${err}`, self);
        }
        return ;
      }
      mapGarbargeHooks(self);
      if(isModelInstance(renderer) && (!isFunctionBasedBuild(self) || isInitialBuild(self))) {
        const options = self[$$$core].opts;
        if(hasOwn(options, 'render')) {
          responseRender=()=>options.render.call(self.__public_model__);
        }else{
          self[$$$core].build=hasOwn(options, "template") ? options.template : null ;
          const templateRender= trackTemplateSource(parent || self, selector, null, context?.hx_Element, context?.props || undefined );
          return templateRender;
        }
      }
      if(!isPFunction(responseRender) && !isArrowFunction(widgetBuild) ){
        debugHandler(`Error during the call of ${ !isFunctionBasedBuild(self) ? 'the build function' : 'functional widget' } context\n\nfailed to return a render function when returning the build method::\nCross-Check your returned build Data as This may lead to unexpected results during Houxit element nodes Compilation`, self, true, DebugFlags.build);
        return;
      }else if(!isChildrenNode(responseRender())){
        debugHandler(`value not a valid Houxit Element instance`, self, true);
        return;
      }
      self[$$$core].map.is_hyperscript=true;
      self[$$$core].render= function factoryRender(instance, update=false){
        let response=responseRender();
        return !isArray(response) && isChildrenNode(response) ? arrayInverter(response) : isChildrenNode(response) ? response : [] ;
      };
      return self[$$$core].render;
    }else if(hasOwn(self[$$$core].opts, 'render')){
      self[$$$core].map.is_hyperscript=true;
      self[$$$core].render= function factoryRender(instance, update=false){
        let response=responseRender.call(self.__public_model__);
        return !isArray(response) && isChildrenNode(response) ? arrayInverter(response) : isChildrenNode(response) ? response : [] ;
      };
      return self[$$$core].render;
    }else {
      return trackTemplateSource(parent || self, selector, context?.hx_Element, context?.props );
    }
    render= (sf, update)=>self[$$$core].render(context?.self || sf, update);
    self[$$$core].render=render
    return render;
  }
  function inDomCaveatRemodeling(self){
    for(const [ name, item] of entries(self[$$$register].widgets)){
      if(hasUpperCase(name)) {
        self[$$$register].widgets[to_kebab_case(name)]=item;
      }
    }
    for(const [ name, item] of entries(self[$$$register].directives)){
      if(hasUpperCase(name)) {
        self[$$$register].directives[to_kebab_case(name)]=item;
      }
    }
  }
  function _GenerateRoot(nodeSelector, self){
    if(isNull(nodeSelector)){
      debugHandler(`No node model or selector value passed for deployment`, self, true);
      return;
    }
    let domRoot;
    if(isString(nodeSelector)){
      domRoot=document.querySelector(nodeSelector);
      if(!isNativeElement(domRoot)){
        debugHandler(`Error generating element, target not a valid native element instance`, self, true);
        return;
      }
    }else if(isNativeElement(nodeSelector) || nodeSelector.isHouxit_Fragment || nodeSelector === document){
      domRoot=nodeSelector;
    }
    return domRoot
  }
  function getGlobalRegistery(self){
    return self[$$$core].$globals ;
  }
  function mergeRegisteries(self){
    entries(self[$$$core].$globals.register).forEach(([name, value])=>{
      for(let [key, content] of entries(value)){
        if(!hasProp(self[$$$register][name], key) && key !== "$root"){
          self[$$$register][name][key]=content
        }
      }
    });
    assign(self.__public_model__, self[$$$register].properties);
  }
  function validateRegistryProvider(self){
    const gR=getGlobalRegistery(self);
    const registeredOpts=gR.legalOptions;
    const _opts=self[$$$operands]._OPTIONS;
    for(let [ key, opt] of entries(_opts)){
      if(!_makeMap_(registeredOpts, key)){
        debugHandler(`Unrecognised option found\n\n
          "${key}" option is not a valid widget option or not registered,
          \n\n
          You can register this option by passing an "optionRegistry" object prop to "build.controller({})" method as an object argument method`, self, true);
        return;
      }else if(!validateType(opt, registeredOpts[key])){
        debugHandler(`The provided "${key}" option validation failed on the required type\n\n
          Type of "${getType(opt)}"" found`,self, true );
        return;
      }
      gR.setupOptions[key]?.();
    }
  }
  function widgetSlotsManager(self, options, vnode){
    createContext_Parameters(self, options, vnode);
    runtimeSlotsContext_Manager( self , options, null, vnode ) ;
    const setData = slotsGeneticProvider( self , options, vnode, self[$$$operands].initializedRender);
    _induceSlotContents( self , options , setData || [] ) ;
    for(const [key, content] of entries(self[$$$core].slots)){
      self[$$$compiler].composedSlots[key]=function slotRender(){
        return h('slot', {
          name:key
        });
      }
    }
  }
  function activateTemplateTokenizedOptions(self, options){
    if(!options.refs || !len(options.refs)) {
      return;
    }
    const instanceTemplateTokens=self[$$$operands].templateRefsInputs;
    iterate(options.refs).each((keyName, index)=> {
      _AnchorRefAdapter_(self, keyName)
    });
  }
  function _AnchorRefAdapter_(self, ref, ad=false){
    if(!ad && !isString(ref)){
      debugHandler(`[Template Ref  Registration] refs option expects a string value`, self, true);
      return
    }
    const tokenized=new Token(undefined, {
      shallow:true
    });
    if(ad || isString(ref)){
      const t_ref=self[$$$operands].templateRefsInputs;
      if(!hasOwn(t_ref, ref)){
        t_ref[ref]=tokenized;
      }
    }
    return tokenized;
  }
  function _useRef(ref){
    const self= getCurrentRunningEffect({
      name:'useRef'
    });
    if(!isHouxitBuild(self) && !validateCollectionArgs(arguments, {
      validators:[String],
      max:1
    })) {
      return freeze();
    }
    return _AnchorRefAdapter_(self, ref, true);
  }
  function useRef(ref){
    return _useRef(...arguments);
  }
  function prefixManagement( self ) {
    const options = self[$$$core].opts ;
    mapPublicationsTraverse(self, options) ;
    mergeRegisteries( self ) ;
  }
  const isGettersObject=computed=>isPObject(computed) && ( isPFunction(computed.get) && ( !hasOwn(computed, 'set') ? false : isPFunction(computed.set) ) );
  function _computed_(callback, config){
    const res=validateCollectionArgs(arguments, {
      min:1,
      max:2,
      name:'computed',
      validators:[[Function, Object], Object ]
    })
    if(!res && !isPFunction(callback) && !isGettersObject(callback)){
      debugHandler(`computed macro at Parameter 1 expects a getter function or a descriptor object of a required "get" and an optional "set" property methods`, self, true);
      return;
    }
    const computed=hydrateComputedTokenTransform(undefined, callback, true, config || {});
    return computed;
  }
  function computed(callback, config){
    return _computed_.call(this, ...arguments);
  }
  function composedTokenHydration(self, computed, config){
    return factoryToken(function(track, effect){
      function getter(){
        track();
        const internals=config.internals;
        if(internals.Initial){
          if(internals.updateFlags){
            const returnValue= internals.effect.runEffect().value;
            internals.updateFlags=0;
            internals.cache=returnValue;
            return returnValue;
          }
          return internals.cache;
        }
        const eff=()=> (isGettersObject(computed) ? computed?.get : computed).call(self?.__public_model__, ...arguments);
        internals.effect.effect=eff;
        internals.Initial=true
        const returnValue= effectRunner(internals.effect).value;
        internals.effect.attachCallback(()=>{
          internals.updateFlags++;
          effect();
        });
        internals.cache=returnValue;
        return returnValue;
      }
      const descriptor={
        get(){
          return getter();
        },
        computed:true,
        ...( config || {} )
      }
      if(isGettersObject(computed) && hasOwn(computed, 'set') && isPFunction(computed.set)){ 
        descriptor.set=function(){
          effect();
          return computed?.set?.call(self?.__public_model__, ...arguments);
        }
        if(hasOwn(descriptor, 'readonly')) {
          delete descriptor.readonly;
        }
      }else {
        descriptor.readonly=true;
      }
      return descriptor;
    });;
  }
  function hydrateComputedTokenTransform(self, computed, composed, config={}){
    config=assign({}, config);
    const computed__Token=composedTokenHydration(self, computed, config);
    const internals=computed__Token[refInternalEffectKey];
    const effect=_createEffectBase();
    effect.flushType='sync';
    internals.cache=effect.values;
    internals.effect=effect;
    config.internals=internals;
    return computed__Token;
  }
  function computedPropsCompiler(self, opts){
    if(!opts.computed || !len(opts.computed)) {
      return;
    }
    const model=self.__public_model__;
    for(let [key, computed] of entries(opts.computed)){
      if(!isPFunction(computed) && !isGettersObject(computed)){
        debugHandler(`computed option  at "${key}" property expects a getter function method option or a descriptor object of a "get" and an optional "set" property methods`, self, true);
        return;
      }
      const computedToken = hydrateComputedTokenTransform(self, computed);
      define(model, key, {
        get(){
          return unwrap(computedToken);
        }
      });
    }
  }
  function callUpdatedHook(self, obs, ){
    for( let fn of obs.updated_hooks.values()){
      fn();
    }
    obs.updated_hooks.clear();
    callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.postUpdate, 'postUpdate');
  }
  function finisherLazyRender(self, nodeSelector, domRoot, wait=false){
    const isSSR=isSSRCompiler(self);
    activateWatchObserverPlugin(self, nodeSelector, domRoot, wait);
    if(IS_ELEMENT_NODE(domRoot) && isInitialBuild(self) && !isSSR ) domRoot.innerHTML="";
    if(!isSSR && isInitialBuild(self) && !IS_ELEMENT_NODE(domRoot)){
      debugHandler('Initial entry Point mount root expects an element node', self, true);
      return ;
    }
    if(!isSSR && isInitialBuild(self) && isTrue(domRoot.IS_HOUXIT_MOUNTROOT)){
      debugHandler(`A Houxit widget has already been mounted on self element, cannot mount more than one Widget on a single root element`, self, true, `When trying to mount this initialBuild instance to the target DOM`);
      return ;
    }
    adapterDOMMountingProduction(self, domRoot)
  }
  function mount(nodeSelector, config, HydrationFlag){
    this[$$$compiler].initialization();
    const isSSR=isSSRCompiler(this);
    if(isSSR && HydrationFlag === SSRHydrationSymbol) {
      this[$$$compiler].SSRHydrationFlag=true;
    }
    if(!isSSR && !inBrowserCompiler){
      debugHandler(`Houxit failed to load Dom specific API(s) as it seems you are running Houxit from a server environment.....\nuse "initSSRBuild" App builder instead.`, self, true);
      return this;
    }
    let domRoot=(isHydration(this) || !isSSR) && inBrowserCompiler ? _GenerateRoot(nodeSelector, this) : null;
    pre_build_facading(this);
    let buildFacade=handleBuildGenerator(this, nodeSelector);
    this.$build=isPromise(buildFacade) ? new HouxitFragmentElement([], self) : Render_Template(this, this[$$$core].render, buildFacade, true);
    if(isPromise(buildFacade)){
      const boundary=getBoundary(this[$$$core].virtualNode);
      this[$$$operands].awaitReady=buildFacade;
      buildFacade=buildFacade.then(()=>{
        const toggler=smart_render_toggler(this);
        const toggleParent=smart_render_toggler(this[$$$core].$owner)
        const lazyBuild=Render_Template(this, this[$$$core].render, buildFacade);
        toggleParent();
        const posix=resolveTargetElement(this.$build);
        posix.before(lazyBuild.$element);
        unMountVNode(this.$build);
        this.$build=lazyBuild;
        finisherLazyRender(this, nodeSelector, domRoot, true );
        toggler();
      }).catch((e)=>{
        boundary?.errorCaptured(pass, {
          message:"<async build>() process has failed to resolve..."
        });
      });
      if(boundary){
        boundary.activeAwaits++;
        boundary.loadChain.add(buildFacade);
      }
    }else {
      finisherLazyRender(this, nodeSelector, domRoot);
    }
    return this;
  }
  function shouldInstallRenderEffect(self){
    return !isSSRCompiler(self);
  }
  function ignoreHydrationMismatchError(self){
    return false;
  }
  function misMatchError(self, msg){
    if(!ignoreHydrationMismatchError(self)) {
      debugHandler(`(((Hydration Mis-Match Error)))....\n\n${msg}`, self, true);
    }
  }
  function hydration_match(self, el, vNode){
    if((IS_ELEMENT_NODE(el) && isSSRText(vNode)) || (isVNodeClass(vNode) && IS_TEXT_NODE(el))){
      misMatchError(self, `adjacent elements mismatches during "HydrationTypeMatch" ....of (${IS_ELEMENT_NODE(el) ? "<"+el.localName+">" : '"'+el.textContent+'"'} ... ${isVNodeClass(vNode) ? "<"+vNode.type+">" : '"'+vNode.content+'"'})`);
    }else if(IS_ELEMENT_NODE(el) && isVNodeClass(vNode)){
      if(el.localName !== vNode.type) {
        misMatchError(self, 'tagnames do not match ....of (<'+el.localName+'> ... <'+vNode.type+'>)');
        return false;
      }
      return true;
    }else if(IS_TEXT_NODE(el) && isSSRText(vNode)){
      if(el.textContent !== vNode.content){
        misMatchError(self, `textContent does not match with hydration target----of(<"${el.textContent}"> ... <"${vNode.content}">)`);
        return false;
      }
      return true;
    }else if(isSSRFragment(vNode)){
    
    }
    return false;
  }
  function perfomSSRHydration(self, domRoot, vNodeList, iter_tools){
    let [ generator, parentVnode, metrics, trucker ] = iter_tools || [];
    const childList=generator || domRoot.childNodes.values();
    const RawVnode=vNodeList;
    vNodeList=isSSRFragment(vNodeList) ? vNodeList.fragment : vNodeList;
    const ignoreWarn=ignoreHydrationMismatchError(self);
    const flushs=new Tuple();
    trucker=trucker || new Tuple();
    if(generator) {
      trucker.add({});
    }
    for(let [index, vNode] of vNodeList.entries()){
      let el;
      if(isVNodeClass(vNode) || isSSRText(vNode)){
        el=childList.next().value;
        if(!hydration_match(self, el, vNode)){
          if(ignoreWarn) {
            continue;
          }else {
            break;
          }
        }
        if(metrics){
          if(!metrics?.first) {
            metrics.first=el;
          }
          metrics.last=el;
        }
        if(generator){
          trucker.forEach(truck=>{
            if(!truck.first) {
              truck.first=el;
            }
            truck.last=el;
          });
        }
        if(!IS_HTML_VOID_TAG(vNode.type) && !isSSRText(vNode) && (vNode.children)) {
          perfomSSRHydration(self, el, vNode.children || []);
        }
      }else if(isSSRFragment(vNode) || isCollection(vNode)){
        perfomSSRHydration(self, null, vNode, [ childList, RawVnode.hx_Element, metrics, trucker ]);
      }
      if(isSSRText(vNode) || isSSRFragment(vNode) || isVNodeClass(vNode)){
        (isSSRText(vNode) || isSSRFragment(vNode) ? vNode : vNode.filesFilter.$ssr_kit).hydrationFlushs.forEach(fn=> fn(isSSRFragment(vNode) ? null : el));
      }
    }
    flushs.forEach(fn=>fn());
    if(generator) {
      installPosixComments(RawVnode.hx_Element, trucker.pop());
    }else if(metrics && isInitialBuild(self)) {
      installPosixComments(parentVnode, metrics);
    }
  }
  function installPosixComments(hx_Element, metrics){
    let { first, last } = metrics;
    const start=document.createComment(c_str);
    const end=document.createComment(c_str);
    first.before(start);
    last.after(end);
    if(isHouxitElement(hx_Element)) {
      hx_Element.VNodeManager.posix=[start, end];
    }
  }
  function pre_build_facading(self){
    const opts=self[$$$core].opts;
    activateTemplateTokenizedOptions(self, opts);
    Hydrate_Network_Prefixes(self, opts);
    prefixManagement(self);
  }
  function activateWatchObserverPlugin(self, nodeSelector, domRoot, wait){
    let initialBuild=self[$$$core].render;
    before_render_semantics(self);
    if(isHydration(self)) {
      perfomSSRHydration(self, domRoot, self.$build.$element, [ null, self.$build, {}]);
    }
    _Reactive_Adapter_Plugin( self.__public_model__ ,()=>tick(async function(){
      if(isHydration(self)){
        self[$$$compiler].useSSRCompiler=false;
        self[$$$compiler].SSRHydrationFlag=false;
      }
      const postEffCall=_EffectDependencyNotifier(self);
      if(shouldInstallRenderEffect(self)) {
        _ReconciliationTransformTrigger(self,  nodeSelector );
      }
      tick(postEffCall);
    }), self, true);
    callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.onTracked, 'onTracked');
    callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.postBuild, 'postBuild');
    tick(()=>{
      self[$$$operands].onRenderTracked=true
    });
    self[$$$operands].initializedRender = true ;
    self[$$$operands].effectRerender=true;
  }
  function isEffRerender(self){
    return self[$$$operands].effectRerender;
  }
  function before_render_semantics(self){
    const installers=self[$$$operands].installers_plugin;
    if(len(installers)){
      self.install(function(build){
        for(const installer of installers.values()){
          installer(...arguments);
        }
      })
    }
  }
  function adapterDOMMountingProduction(self, domRoot){
    const MoutRootToken={
      IS_HOUXIT_MOUNTROOT:true,
      __mountRootToken:'hx__'+generateUUID(5),
    }
    callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.preMount, 'preMount');
    domRoot = activateBuildMount(self, domRoot, MoutRootToken);
    if(!isSSRCompiler(self)) {
      whenMounted(self, self.$build, ()=>{
        for(const fn of self[$$$compiler].whenMountedHooks.values()){
          callbackHookWithCatch(self, fn, '')
        }
        callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.postMount, 'postMount');
      });
    }
    self[$$$operands].hasMountProto=true;
  }
  function activateBuildMount(self, domRoot, MoutRootToken){
    if(isInDomNode(domRoot) && IS_ELEMENT_NODE(domRoot) && isInitialBuild(self) && !isSSRCompiler(self)) {
      domRoot.innerHTML='';
      domRoot.append(self.$build?.$element || '');
      self.property('$root', self.$build);
      domRoot.IS_HOUXIT_MOUNTROOT=true;
      tick(()=>{
        if(domRoot.hasAttribute('hx-cloak')) {
          domRoot.removeAttribute('hx-cloak');
        }
      });
    }else {
      domRoot=self.$build?.$element;
    }
    return domRoot;
  }
  function createCloakDirectiveHydrator(){
    if(!inBrowserCompiler) {
      return;
    }
    const styleEl=document.createElement('style');
    styleEl.append(`[hx-cloak]{ display:none;} `);
    document.head.appendChild(styleEl);
  }
  createCloakDirectiveHydrator();
  function widget(name, widget){
    if(!validateCollectionArgs(arguments, {
      name:"initBuild().widget()",
      validators:[String, [Function, Object, Class]],
      count:2,
      required:[true, true]
    })) {
      return;
    }
    if(len(new Set(arguments)) === 2) {
      this[$$$core].$globals.register.widgets[name]= widget;
    }
    return this;
  }
  function install(plugin, options){
    if(!validateType(plugin, [ Object, Function ])){ 
      debugHandler(`plugin installation Error::\n\n install argument must be an object value with  an exposed plugin installation method or a function which acts as the plugin method itself`, this, true);
      return this;
    }else if(isPObject(plugin) && !isPFunction(plugin.plugin)){
      debugHandler(`plugin installation Error::\n\n plugin object did not expose a plugin installation method`, this, true);
      return this;
    };
    (isPObject(plugin) ? plugin.plugin : plugin)?.(this, options);
    return this;
  }
  function handler(name, handler){
    if(!validateCollectionArgs(arguments, {
      name:"initBuild().handler()",
      validators:[String, Function],
      count:2,
      required:[true, true]
    })) {
      return;
    }
    if(len(arguments) === 2) {
      this[$$$core].$globals.register.handlers[name]=handler;
    }
    return this;
  }
  function directive(name, directive){
    if(!validateCollectionArgs(arguments, {
      name:"initBuild().directive()",
      validators:[String, [Function, Object]],
      count:2,
      required:[true, true]
    })) {
      return;
    }
    if(len(arguments) === 2) {
      this[$$$core].$globals.register.directives[name]=directive;
    }
    return this;
  }
  function mixin(mx){
    if(!validateType(mx, [Object, Function])){
      debugHandler(`unrecognised global mixin registration for\n ${compileToRenderable(mx)}`, this, true);
      return this;
    }else if(len(arguments) !== 1){
      debugHandler(`.mixin() expects not more than one formal argument`, this);
      return this;
    }
    this[$$$core].$globals.register.mixins.add(mx);
    return this ;
  }
  function filter(name, filter){
    if(!validateCollectionArgs(arguments, {
      name:"initBuild().filter()",
      validators:[String, [Function, Object]],
      count:2,
      required:[true, true]
    })) {
      return;
    }
    if(len(arguments) === 2) {
      this[$$$core].$globals.register.filters[name]=filter;
    }
    return this ;
  }
  function block(name, block){
    if(!validateCollectionArgs(arguments, {
      name:"initBuild().block()",
      validators:[String, [Function, Object]],
      count:2,
      required:[true, true]
    })) {
      return;
    }
    if(len(arguments) === 2) {
      this[$$$core].$globals.register.blocks[name]=block;
    }
    return this ;
  }
  
  function property(name, value){
     if(!validateCollectionArgs(arguments, {
      name:"initBuild().property()",
      validators:[String, Any],
      count:2,
      required:[true, true]
    })) {
      return;
    }
    if(len(arguments) === 2) {
      this[$$$core].$globals.register.properties[name]=value;
    }
    return this
  }
  function templateClass(name, value){
    if(!validateCollectionArgs(arguments, {
      name:"initBuild().templateClass()",
      validators:[String, Any],
      count:2,
      required:[true, true]
    })) {
      return;
    }
    if(len(arguments) === 2) {
      this[$$$core].$globals.register.templateClasses[name]=value;
    }
    return this
  }
  function transition(name, value){
    if(!validateCollectionArgs(arguments, {
      name:"initBuild().transition()",
      validators:[String, Any],
      count:2,
      required:[true, true]
    })) {
      return;
    }
    if(len(arguments) === 2) {
      this[$$$core].$globals.register.transitions[name]=value;
    }
    return this
  }
  function animation(name, value){
    if(!validateCollectionArgs(arguments, {
      name:"initBuild().animation()",
      validators:[String, Any],
      count:2,
      required:[true, true]
    })) {
      return;
    }
    if(len(arguments) === 2) {
      this[$$$core].$globals.register.animations[name]=value;
    }
    return this
  }
  function _Build_destroy(){
    if(len(arguments)){
      debugHandler(`.destroy() method of initBuild accepts no formal parameters`, this);
    }else if(!this[$$$operands].hasMountProto){
      debugHandler(`instance of widget not yet mounted\n\nwidget unmounting failure`);
      return false
    }
    try{
      // use unMountVNode vnofe macro hete
      unMountVNode(this.$build)
      /*
      delete this[$$$operands];
      delete this[$$$core];
      delete this[$$$compiler];
      delete this[$$$ownProperties];
      delete this.__public_model__;
      delete this.$build;
      // Object.setProtypeOf(this, null)
      */
    }catch(err){
      debugHandler(`widget instance destroy failed`, this, true);
      debugHandler(err);
      return false;
    }
    return freeze(this);
  }
  function destroy(){
    return _Build_destroy.call(this, ...arguments);
  }
  function createConfig_Constraint(name, ...args){
    const [ argument ] = args;
    if(isFalse(mapSettingCheck(this, name, argument ))) {
      return this;
    }
    this[$$$core].settings[name]=argument;
    return this;
  }
  function configDelimiters(delimiters){
    return createConfig_Constraint.call(this, "delimiters", ...arguments);
  }
  function configDebug(debug){
    return createConfig_Constraint.call(this, "debug", ...arguments);
  }
  function configForwardAttrs(forwardAttrs){
    return createConfig_Constraint.call(this, "forwardAttrs", ...arguments);
  }
  function configForwardEvents(forwardEvents){
    return createConfig_Constraint.call(this, "forwardEvents", ...arguments);
  }
  function configFlushType(flushType){
    return createConfig_Constraint.call(this, "flushType", ...arguments);
  }
  function configForwardSlot(forwardSlot){
    return createConfig_Constraint.call(this, "forwardSlot", ...arguments);
  }
  function configScopedStyle(scopedStyle){
    return createConfig_Constraint.call(this, "scopedStyle", ...arguments);
  }
  function runOptionHookValidation(hookName, callback){
    if(!validateCollectionArgs(arguments, {
      count:2,
      required:[true, true],
      validators:[String, Function],
      name:"app.controller.optionsHook()"
    })){
      return;
    }else if(!hasOwn(getGlobalRegistery(this).legalOptions, hookName)){
      debugHandler(`optionsHook plugin method called on an undefined/unregistered option...\n\n"${hookName}"`, this, true);
      return;
    }
  }
  function _applyAdapterMixin(mixin, options){
    if(!isPObject(mixin)){
      debugHandler(`[Custom Option-Hook mixin] "applyMixin" callback expects a plain object`, this, true);
      return;
    }
    applyMixinMergeStrategy(this, options, [mixin]);
  }
  function _optionsHookTransform(hookName, callback){
    if(isInitialBuild(this)) {
      runOptionHookValidation.call(this, ...arguments);
    }
    const _OPTIONS=this[$$$operands]._OPTIONS;
    if(!hasOwn(this[$$$core].opts, hookName)){
      return;
    }
    const gR=getGlobalRegistery(this);
    const self=this;
    gR.setupOptions[hookName]=function(){
      callback?.(self.__public_model__, _OPTIONS[hookName], function applyMixin(mixin){
        _applyAdapterMixin.call(self, mixin, self[$$$core].opts);
      });
    }
  }
  function _controller_Adapter(options){
    if(!isPObject(options)){
      debugHandler(`argument at position 1 expects a plain object\n\nType unaccepted`, this, true);
      return;
    }
    const controllers=this[$$$core].$globals.controller
    if(controllers.has(options)){
      return this;
    }
    controllers.add(options);
    optionsRegistery(this, options);
    let { setup , setupAdapter } = options;
    if(hasOwn(options, 'setupAdapter') && !isPFunction(setupAdapter)) {
      debugHandler(`setupAdapter option of .controller({}) method expects a function/method type`, this, true);
      return this;
    }
    if(!exists(setupAdapter) && !isPFunction(setupAdapter)){
      setupAdapter = pass;
    }
    const app=this;
    function optionsHook(optionsName, callback){
      return _optionsHookTransform.call(app, optionsName, callback);
    }
    setupAdapter( this , optionsHook);
    return this
  }
  function controller(options){
    return _controller_Adapter.call(this, ...arguments);
  }
  function configOptions(buildConfig={}){
    setConfig(this, { buildConfig });
    return this
  }
  function optionsRegistery(self, options){
    if(!hasProp(options, 'optionsRegistery')) {
      return;
    }else if(!isPObject(options.optionsRegistery)){
      debugHandler(`The "optionsRegistery" property argument of controller expects a plain object\n\nType Unexpected`, self, true);
      return;
    }
    const registered=options.optionsRegistery;
    const globals=getGlobalRegistery(self);
    entries(options.optionsRegistery).forEach(([key, validator])=>{
      if(_makeMap_(globals.legalOptions, key)){
        debugHandler(`${key} custom optionsRegistery already exists in the registery record`, self, true);
        return;
      }
      define(globals.legalOptions, key, {
        value: validator, 
        enumerable
      });
    })
  }
  function mountedWarning(self, name){
    if(isTrue(self[$$$operands].hasMountProto)){
      if(!self[$$$core].map.mountWarn) {
        debugHandler(`This "mount" method has been called\n\ncalling of methods after the widget is mounted is prohibited\n\n call to ('.${name}') method is considered an invalid houxit syntax`, self, true);
        self[$$$core].map.mountWarn=true;
      }
      return false;
    }
    return true;
  }
  function transmit(prop, value){
    if(!validateType(prop, [ String, Symbol ])){
      debugHandler(`Parameter 1 on .transmit() expects a string or a Symbol `, this, true);
      return this;
    }
    const globalBoard= isInitialBuild(this) ? this[$$$core].$globals.transmited : this[$$$core].$root[$$$core].$globals.transmited;
    define(globalBoard, prop, { 
      value: value, 
      enumerable 
    });
    return this;
  }
  function hydrate(nodeSelector){
    if(!isSSRCompiler(this)){
      debugHandler("Incompatibility when trying to call the .hydrate on a non SSR App build");
      return this;
    }
    this.mount(nodeSelector, null, SSRHydrationSymbol);
    return this
  }
  function buildMethods(){
    return { 
      mount,
      widget, 
      mixin,
      install, 
      handler, 
      directive,
      property,
      filter,
      animation,
      transition,
      block,
      templateClass,
      configDelimiters,
      configForwardSlot, 
      configScopedStyle,
      controller,
      configForwardAttrs,
      hydrate,
      configOptions,
      destroy,
      transmit
    };
  }
  for(let [ key, fn ] of entries( buildMethods() )){
    fn=new Proxy(fn, {
      apply(target, self, args){
        const res = key === 'destroy' ? true :  mountedWarning(self, key ) ;
        if(isTrue(res)) {
          Reflect.apply(...arguments);
        }
        return self;
      }
    })
    HouxitBuild.prototype[key]=fn;
  }
  function openTaskPrefix(self){
    self[$$$core].depsQueue.vibrate();
  }
  async function deferEventCircleThread(self, fn, persist=false){
    if(isHouxitBuild(self)){
      if(!self[$$$operands].garbageWatch){
        self[$$$operands].garbageWatch=true;
        await queueMicrotask(()=>{
          fn?.call(self.__public_model__);
          self[$$$operands].garbageWatch=false;
        });
      }
      if(persist) {
        await new Promise((resolve)=> resolve(queueMicrotask(fn)));
      }
    }else {
      await queueMicrotask(fn);
    }
  }
  function whenMounted(self, build, callback) {
    return new Promise((resolve, reject) => {
      const el = isHouxitElement(build) ? resolveTargetElement(build) : build;
      if (document.body.contains(el)) {     // Check if it's already in the DOM
        resolve(el);
        return;
      }
      const observer = new MutationObserver((mutations, obs) => {
        if (document.body.contains(el)) {
          obs.disconnect(); // Stop observing once mounted
          resolve(el);
        }
      });
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    }).then(() => callback()).catch((err) => {
      debugHandler(err)
      debugHandler(`${err}`, self, true)
    });
  }
  function whenUnMounted(self, build, callback){
    
  }
  function useMountWatcher(self, build, config){
    
  }
  function Render_Template( self , initBuild, buildFacade, slotter ) {
    let instance=self;
    const isRerender=self[$$$operands].initializedRender;
    if(isPFunction(initBuild)) {
      initBuild = initBuild( instance );
    }
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    if(is_hyperscript) {
      initBuild=_HouxitCoreRenderer(arrayInverter(initBuild), instance, null, null, null, {
        official:true,
      });
    }
    if(isArray(initBuild) || !initBuild) {
      initBuild= new HouxitFragmentElement(initBuild || [], instance, null);
    }
    self[$$$compiler].template=initBuild;
    if(!isRerender) {
      if(!(isPromise(buildFacade) && isTrue(slotter))){
        widgetSlotsManager(self, self[$$$core].opts, self[$$$core].virtualNode);
      }
    }
    initBuild = self[$$$compiler].templateProcessor( self , initBuild, buildFacade, slotter) ;
    return initBuild ;
  }
  function _tick( fn, wait ) {
    const response = validateCollectionArgs(arguments, {
      min:0,
      max:2,
      validators:[Function, Number],
      name:"tick()"
    });
    if(!response) {
      return freeze();
    }
    const self= this && isHouxitBuild( this ) ? this : null;
    return new Promise( ( resolve , reject ) => {
      if(wait){
        setTimeout(pass, wait);
      }
      if(fn) resolve( deferEventCircleThread( self , fn , isHouxitBuild( self ) ) ) ;
    } ) ;
  }
  function tick( fn, wait ){
    return _tick( ...arguments );
  }
  async function _Reactive_Adapter_Plugin(data, callback, self, deep=false){
    function flush(){
      try{
        callback();
      }catch(err){
        debugHandler(`Encountered a Problem during DOM effect trigger phase\n\n>>>>>`, self, true);
        $warn(`${err}`, self);
        return;
      }
    }
    self[$$$operands].dependency.callback=flush;
  }
  function preUpdateHookFlush(self){
    
  }
  function _ReconciliationTransformTrigger(self, selector){
    const observer={ 
      updated_hooks:new Tuple(), 
      active:false , 
      willMutate:false,
      effectFlush:new Tuple()
    };
    triggerHydrationCompile(self, observer);
  }
  function triggerHydrationCompile(self, observer){
    callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.onEffect, 'onEffect');
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    self.__public_model__.$tick(()=> Render_Effect_Reactive_Transform(self, observer)).then(function(){
      if(len(observer.effectFlush)){
        callbackHookWithCatch(self, self[$$$operands]._LIFECIRCLEHOOKS.preUpdate, 'preUpdate');
      }
    }).then(()=>callSetHooks(self, observer.effectFlush )).then(function(){
      if(len(observer.effectFlush) ){
        callUpdatedHook( self , observer ) ;
        observer.updated_hooks.clear();
      }
    }) ;
  }
  function RenderEffect_$Warn(self, err){
    debugHandler(`----unable to complete the rerender effect circle patch\n\nthis is likely a probable bug/error in the houxit's compiler level;\nplease report any problem —— and open an issue on our github repo issue page`, self, true);
    debugHandler(`${err}`, self)
    console.error(err);
  }
  function Render_Effect_Reactive_Transform(self, observer){
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    const isRerender=self[$$$operands].initializedRender;
    try{
      let EffectVNode;
      Promise.try(()=> {
        priority_rerender_patch(self, {
          isRerender,
          is_hyperscript,
          observer
        });
      }).catch((e)=> debugHandler(e))
    }catch(e){
      RenderEffect_$Warn(self, e);
    }
  }
  function priority_rerender_patch(self, metrics){
    const priorities=self[$$$compiler].VN_Tree.priority;
    if(!len(priorities)){
      return;
    }
    priorities.forEach(effect => effect());
    priorities.clear();
  }
  function patchRenderNormalizerCall(self, build, EffectVNode, observer, config){
    if(isSameHouxitElementType(build, EffectVNode) ){
      if(isHouxitFragmentElement(build)) {
        resolvePatchAlgorithm(self, build, EffectVNode, observer, config);
      }else {
        renderVnodeDiffSequence(self, build, EffectVNode, observer, null, {
          config
        });
      }
      return;
    }else if(isHouxitFragmentElement(EffectVNode)) {
      build=new HouxitFragmentElement(self, [ build ], null);
    }
    resolvePatchAlgorithm(self, build, EffectVNode, observer, config);
  }
  function resolvePatchAlgorithm(self, Template, EffectVNode, observer, config={}){ 
    const { KEYS_INDEXES:tempIndexes, LEAGUE_TREE:tempLeagues } = Template.VN_Tree;
    const { KEYS_INDEXES, LEAGUE_TREE } = EffectVNode.VN_Tree;
    const forAppending=[];
    const forInsertion=[];
    const forRemovals=[];
    const exchangeRecorder=[];
    tempIndexes.forEach((key, index)=>{
      if(!KEYS_INDEXES.has(key)) {
        forRemovals.push([key, tempLeagues[key], index]);
      }
    });
    const NodeList=new Tuple();
    for(const [index, key ] of KEYS_INDEXES.entries()){
      let tempK=tempIndexes.at(index);
      if(key === tempK){ //run effect renderPatches if keys matches on the same index position
        const tempEl=tempLeagues[key]?.[0];
        const effectEl=LEAGUE_TREE[tempK]?.[0];
        renderVnodeDiffSequence(self, tempEl, effectEl, observer, Template, {
          index,
          key,
          config
        });
      }else if(key !== tempK ){//if render no more at this index
        if(tempIndexes.has(key)){//but still exists in new vNodes listings
          const vnodeTM=tempLeagues[tempK];
          let targetElem= tempK ? resolveTargetElement(vnodeTM[0], null, true) : undefined;
          const posixElem=document.createComment(c_str);
          if(tempK && targetElem ) {
            targetElem.after(posixElem);
          }
          exchangeRecorder.push({
            elements:[tempLeagues[key], vnodeTM],//the position the current element is destinated
            keys:[key, tempK],
            index:[tempIndexes.indexOf(key), index],
            parent:targetElem?.parentNode,
            posixElem
          });
        }else{
          const effectEl=LEAGUE_TREE[key][0];
          let useMemoCache=config.memoVault ? installMemoInstance(self, null, effectEl, config) : undefined;
          const Rerender_Element= useMemoCache ? useMemoCache.hx_Element : __createRerenderBlock(self, effectEl);
          config.list?.add(Rerender_Element);
          if(index >= len(tempIndexes)) {
            forAppending.push([Rerender_Element, key, index, Template, useMemoCache]);
          }else{
            const [ targetBox, targetInd]=tempLeagues[tempK];
            const targetElem=resolveTargetElement(targetBox, null, );
            const posixElem=document.createComment(c_str);
            targetElem.before(posixElem);
            forInsertion.push({
              elements:[Rerender_Element, targetBox],
              posixElem,
              parent:targetElem.parentNode,
              index:[undefined, index],
              keys:[key, tempK],
            });
            stabilizeMemo(config);
          }
        }
      }
    }
    fractional_diffing_transform(self, exchangeRecorder, Template, EffectVNode, tempIndexes, tempLeagues, LEAGUE_TREE, KEYS_INDEXES, observer, forAppending, forInsertion, forRemovals, config);
    tempIndexes.arrange(KEYS_INDEXES.list());
    keys(tempLeagues).forEach(key=>{
      if(!tempIndexes.has(isNaN(Number(key)) ? key : Number(key))) {
        delete tempLeagues[key];
      }
    });
  }
  function stabilizeMemo(config){
    if(config.memoVault){
      config.memoVault?.stabilityChecker();
    }
  }
  function fractional_diffing_transform(self, exchangeRecorder, Template, EffectVNode, tempIndexes, tempLeagues, LEAGUE_TREE, KEYS_INDEXES, observer, forAppending, forInsertion, forRemovals, config){
    const waitForAddBeforMove=[];
    const cleanup_zip=new Tuple();
    for(const { elements, index, keys, parent, posixElem } of exchangeRecorder.values()){
      const [ element, target ] = elements;
      let [ key, tempK ] = keys;
      let [ ind, tempInd ] = index;
      if(!tempK){
        if(tempInd >= len(tempIndexes)) {
          waitForAddBeforMove.push({
            elements,
            index,
            keys,
            posixElem
          });
        }
      }else{
        generateWrapElementAction(element[0], (el)=> smartMoveElement(self, parent, el, posixElem))
        cleanup_zip.add(function(){
          tempLeagues[key][1]=tempInd;
          posixElem.remove();
        });
        renderVnodeDiffSequence(self, element[0], LEAGUE_TREE[key][0], observer, Template, {
          index,
          key,
          config
        });
      }
    }
    cleanup_zip.forEach((cleanup)=> cleanup());
    cleanup_zip.clear();
    for(const { elements, index, keys, parent, posixElem } of forInsertion.values()){
      const [ Element, Target ]=elements;
      const [ ind, tempInd ] = index;
      const [key, tempK] = keys;
      tempLeagues[key]=[Element, tempInd ];
      posixElem.after(Element.$element);
      Template.NodeList.splice(EffectVNode.NodeList.indexOf(Target), 0,
      Element);
      cleanup_zip.add(()=> posixElem.remove());
    }
    forInsertion.splice(0);
    cleanup_zip.forEach((cleanup)=> cleanup());
    cleanup_zip.clear();
    exchangeRecorder.splice(0);
    for(const [ Element, key, index, Template, useMemoCache] of forAppending.values()){
      const adjKey=KEYS_INDEXES.at(index-1);
      const [ targetBox, targetInd ]=tempLeagues[adjKey] || [];
      tempLeagues[key]=[Element, index ];
      const targetElem=resolveTargetElement(targetBox || Template , null, true);
      Template.NodeList.add(Element);
      if(useMemoCache) {
        useMemoCache.record.forEach(el=> targetElem.before(el));
      } else {
        targetElem?.after(Element.$element);
      }
      stabilizeMemo(config);
    }
    forAppending.splice(0);
    for(const { elements, index, keys } of waitForAddBeforMove.values()){
      const [ element, ] = elements;
      const [ ind, tempInd ] = index;
      const [ key, targekey ]=keys;
      const tempK=KEYS_INDEXES.at(tempInd-1);
      const [ targetBox, targetInd ] = tempLeagues[tempK];
      const targetElem=resolveTargetElement(targetBox, null, true);
      const parent=targetElem.parentNode;
      const posixElem=document.createComment(c_str);
      targetElem.after(posixElem);
      generateWrapElementAction(element[0], (el)=> smartMoveElement(self, parent, el, posixElem));
      cleanup_zip.add(function(){
        tempLeagues[key][1]=tempInd;
        posixElem.remove();
      });
      renderVnodeDiffSequence(self, element[0], LEAGUE_TREE[key][0], observer, Template, {
        index,
        key,
        config
      });
    }
    for(const [ key, Element, index ] of forRemovals.values()){
      if(isMemoElement(Element[0]) || config.memoVault){
        installMemoInstance(self, Element[0], null, config);
        generateWrapElementAction(Element[0], el=>{
          beforeUnMountDelay(el, ()=>{;
            el.remove();
          });
        });
      }
      Template.NodeList.delete(Element[0]);
      delete tempLeagues[key];
      if(!(isMemoElement(Element[0]) || config.memoVault)){
        unMountVNode(Element[0]);
      }
      stabilizeMemo(config);
    }
    waitForAddBeforMove.splice(0);
    cleanup_zip.forEach((cleanup)=> cleanup());
    cleanup_zip.clear();
  }
  function smartMoveElement(self, parent, mover, target){
    try{
      parent.moveBefore(mover, target);
    }catch(err){
      if(err.name === "HierarchyRequestError") {
        parent.insertBefore(mover, target);
      }else {
        debugHandler(`${err}`, self, true);
        console.error(err)
      }
    }
  }
  function effectiveElement_REUSE_PATCH(self, hx_Element, vNode, observer, parent, ignore){
    if(isHouxitTextElement(hx_Element) ) {
      RerenderTextElements(self, hx_Element, vNode, observer, parent);
      return;
    }else if(isHouxitWidgetElement(hx_Element) || isRenderlessElement(hx_Element)) {
      return;
    } //below, there is no point in tracking node positions under a loop or conditiinal priority, property level priority should handle that granularly
    if(isHouxitFragmentElement(hx_Element) || (isHouxitNativeElement(hx_Element) && !IS_HTML_VOID_TAG(hx_Element.prototype_))) {
      resolvePatchAlgorithm(self, hx_Element, vNode, observer);
    }
    if(isHouxitNativeElement(hx_Element)){
      const attrs=hx_Element.$element.attributes;
      const shapeProps=vNode.VNodeManager.patchFlags.shapeProps;
      const s_a={};
      for(let { name, value } of values(attrs)){
        if(name === 'data-hx_build'){
          continue;
        }
        if(!hasOwn(shapeProps, name)){
          _createElementPropsEffectBlock_(self, {
            value,
            element:hx_Element.$element,
            mode:getPropMode(name.trim()),
            key:name,
          });
        }else{
          s_a[name]=value
        }
      }
      for(let [ name, value ] of entries(shapeProps)){
        _createElementPropsEffectBlock_(self, {
          value:s_a[name],
          element:hx_Element.$element,
          mode:getPropMode(name.trim()),
          key:name,
        });
      }
    }
  }
  function __createRerenderBlock(self, vnode, ...args){
    if(isRenderlessElement(vnode)) {
      return vnode;
    }
    const toggler=smart_render_toggler(self);
    const NewNode=vnode.compiler_options.createElement(...args);
    toggler();
    return NewNode;
  }
  function renderVnodeDiffSequence(self, hx_Element, vNode, observer, parent, metrics){
    let { index, key, config, args=[] } = metrics || {};
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    if(isSuspenseElement(hx_Element) && isSuspenseElement(vNode)){
      const suspense=vNode.VNodeManager[$suspenseElement];
      if(suspense.state.resolved){
        patchRenderNormalizerCall(self, hx_Element, vNode, observer, config);
      }else{
        assign(suspense.rerenderObj, {
          activeElement:hx_Element,
          Rerender_Element:vNode,
          parent,
          observer
        });
      }
      return;
    }
    if(config?.FORCE || !HouxitElementDiffingCheck(hx_Element, vNode)) {
      const isRenderless=isRenderlessElement(vNode);
      const useMemoCache=installMemoInstance(self, hx_Element, vNode, config);
      const NewNode= useMemoCache?.hx_Element || ( isRenderless ? vNode : __createRerenderBlock(self, vNode, ...args));
      if(config.memoVault && !useMemoCache?.hx_Element){
        NewNode.compiler_options.createElement=hx_Element.compiler_options.createElement;
        if(!isMemoElement(NewNode)){
          if(!checkMemoContentValidity(self, NewNode)){
            return;
          }
          NewNode.VNodeManager.isMemoChild=hx_Element.VNodeManager.isMemoChild;
        }
      }
      const posixElem=document.createComment(c_str);
      const targetElem=resolveTargetElement(hx_Element, null, true);
      targetElem.after(posixElem);
      if(parent) {
        const index=parent.NodeList.indexOf(hx_Element);
        const key=parent.VN_Tree.KEYS_INDEXES.at(index);
        parent.VN_Tree.LEAGUE_TREE[key]=[NewNode, index];
        parent?.NodeList.replace(hx_Element, NewNode);
      }else {
        self.$build=NewNode;
      }
      if(isMemoElement(hx_Element) || config.memoVault) {
        generateWrapElementAction(hx_Element, el=>{
          beforeUnMountDelay(el, ()=>{;
            el.remove();
          });
        });
      } else {
        unMountVNode(hx_Element);
      }
      if(useMemoCache) {
        useMemoCache.record.forEach(el=> posixElem.before(el));
      } else {
        posixElem.before(NewNode.$element);
      }
      posixElem.remove();
      config?.list?.add(NewNode);
      stabilizeMemo(config);
      return NewNode;
    }
    // else {
    //   effectiveElement_REUSE_PATCH(self, hx_Element, vNode, observer, parent );//effectiveElement_REUSE_PATCH will be facing a depreciation witb the emergence of fine-grained reactivity in the compiler
    // }
  }
  function installMemoInstance(self, hx_Element, EffectVNode, config){
    if(!(isMemoElement(hx_Element) || config.memoVault)) {
      return;
    }
    const vault=hx_Element?.VNodeManager?.isMemoChild?.vault || config?.memoVault;
    const { storage, state, caches, keys }=vault;
    const hx_Key=hx_Element?.prototype_;
    const Eff_Key=EffectVNode?.prototype_;
    if(hx_Element){
      addMEMOState(self, hx_Element, keys.has(hx_Key), vault);
    }
    if(EffectVNode && keys.has(Eff_Key)) {
      return getMEMOState(self, EffectVNode, vault);
    }
  }
  function addMEMOState(self, hx_Element, update=false, vault){
    const { storage, caches, keys, max, test }=vault;
    const hx_Key=hx_Element.prototype_;
    update = keys.has(hx_Key) && update;
    if(!update) {
      if(test && !test()) {
        return;
      }
      if(!isInfinity(max) && !isNaN(Number(max)) && keys.size === max){
        const leastKey=keys.shift();
        unMountVNode(storage.get(leastKey).hx_Element);
        storage.delete(leastKey);
      }
      keys.add(hx_Key);
    }
    const record=new Tuple();
    generateWrapElementAction(hx_Element, (el)=>{
      record.add(el);
    });
    if(update) {
      storage.get(hx_Key).record=record;
    }else {
      storage.set(hx_Key, {
        hx_Element,
        record
      });
    }
  }
  function getMEMOState(self, EffectVNode, vault){
    const { storage, caches, keys }=vault;
    const Eff_Key=EffectVNode.prototype_;
    if(!keys.has(Eff_Key)) {
      return;
    }
    const state=storage.get(Eff_Key);
    if(len(keys) < 2) {
      return state;
    }
    keys.delete(Eff_Key);
    keys.add(Eff_Key);
    return state;
  }
  function deleteMEMOState(self, hx_Element, vault){
    const { storage, caches, keys }=vault;
    const hx_Key=hx_Element.prototype_;
    if(!keys.has(hx_Key)) {
      return false;
    }
    keys.delete(hx_Key);
    storage.delete(hx_Key);
    return true;
  }
  function resolveTargetElement(target, fallback, last=false){
    let targetElem;
    if(isTextOrNativeElement(target)) {
      targetElem = target.$element;
    }else{
      if(isHouxitWidgetElement(target)) {
        target=WidgetElementUnwrap(target);
      }
      if(isHouxitFragmentElement(target)) {
        targetElem=target.VNodeManager?.posix[ last ? 1 : 0 ];
      }else if(isTextOrNativeElement(target)) {
        targetElem=target.$element;
      }
    }
    return IS_ELEMENT_NODE(targetElem) || IS_TEXT_NODE(targetElem) || IS_COMMENT_NODE(targetElem) ? targetElem : fallback;
  }
  function unMountVNode(vnode){
    if(isHouxitWidgetElement(vnode)) {
      vnode.widget_instance.destroy();
    }else if(isHouxitFragmentElement(vnode)) {
      vnode.upload(el=> beforeUnMountDelay(el, ()=>{
        callFlushs(el._hx_Element?.hx_Element);
        el.remove();
      }));
      vnode.NodeList.forEach(el=> unMountVNode(el));
    }else if(!isRenderlessElement(vnode)) {
      beforeUnMountDelay(vnode, ()=>{
        callFlushs(vnode);
        vnode?.$element?.remove();
      });
      vnode.NodeList.forEach(el=> unMountVNode(el));
    }
  }
  function callFlushs(vnode){
    if(!isHouxitElement(vnode)){
      return;
    }
    const fl=vnode.VN_Tree.FLUSHS;
    fl.forEach(f=>safeCall(f));
    fl.clear();
  }
  function generateWrapElementAction(vnode, callback){
    if(isHouxitWidgetElement(vnode)) {
      vnode=WidgetElementUnwrap(vnode);
    }
    if(isHouxitFragmentElement(vnode)) {
      vnode.upload(callback);
    }else if(!isRenderlessElement(vnode)) {
      callback(vnode.$element);
    }
  }
  function callArrGetters(depsArray){
    return depsArray.map( getter => getter?.() );
  }
  function primate_check(node, vNode){
    if(!isPrimitive(node.prototype_) ) {
      return isS(node.prototype_, vNode.prototype_);
    }
    return isPrimitive(node.prototype_);
  }
  function keying_check(node, vnode){
    return deepEqualityCheck(node._vnode_key, vnode._vnode_key);
  }
  function HouxitElementDiffingCheck(node, vNode){
    if((isHouxitTextElement(node) && isHouxitTextElement(vNode)) || keying_check(node, vNode) && isSameHouxitElementType(node, vNode) && deepEqualityCheck(node.prototype_, vNode.prototype_) && primate_check(node, vNode)) {
      return true;
    }
    return false;
  }
  function RerenderTextElements(self, node, vNode, observer, parent){
    const value=node.compiler_options.value;
    if(node?.prototype_ !== vNode?.prototype_) {
      const update=()=>{
        node.$element.textContent=vNode?.prototype_;
        node.prototype_=vNode.prototype_;
      }
      vNode.VNodeManager.awaitTextReady?.then(update) || update();
      if(parent) {
        linkUpdateHook(self, parent, observer);
      }
    }
  }
  function WidgetElementUnwrap(vnode){
    if(isHouxitWidgetElement(vnode)) {
      vnode=vnode?.widget_instance?.$build;
      vnode=WidgetElementUnwrap(vnode);
    }
    return vnode;
  }
  const isTextOrNativeElement=vnode=>isHouxitTextElement(vnode) || isHouxitNativeElement(vnode);
  function linkUpdateHook(self, vnode, observer){
    if(!isPass(vnode.updated_hook)){
      observer.updated_hooks.add(vnode.updated_hook);
    }
  }
  class houxitSignal{
    constructor(signal, func, options){
      this.signal=signal
      this.callback=func
      this.options=options
    }
    signal=undefined
    callback=undefined
    options=undefined
  }
  function _Resolve_Directives_Hydration(self, bindings, virtualNode, hx_Element, metrics){
    const { isRerender, is_hyperscript, vNode, config } = metrics;
    let { directive, value, key } = bindings;
    const isSSR=isSSRCompiler(self);
    if(!isSSR && !isHouxitDirective(directive)) {
      return _With_Custom_Directives(self, bindings, vNode, hx_Element, metrics );
    }
    if(directive === "provide"){
      if(!validHouxitWidget(vNode?.GeneticProvider)) {
        debugHandler(`Illegal Provide Use: "$$provide" directive is only scoped to widget instances vnode only\n\n found on "${(isSSR ? isString(virtualNode.type) : isNativeElement(virtualNode)) ? virtualNode.outerHTML+" element" : ""}"`, self, true);
        return ;
      }
      if(_makeMap_([Suspense, For], vNode.prototype_)){
        vNode.filesFilter.$$dir_PROVIDE_bindings=bindings;
      }else{
        $$dir_PROVIDE(self, bindings, vNode, hx_Element, metrics);
      }
    }
    if( hasOwn(DirectiveMacros, directive) && (isRerender ? _makeMap_('bind', directive) : true)) {
      DirectiveMacros[directive](self, bindings, virtualNode, hx_Element, metrics, directive === "text");
    }
  }
  function dynamicPropRemover(obj, propName){
    for(let [key, value ] of entries(obj)){
      if(!key.includes(propName)) {
        continue;
      }
      let keyCache;
      if(key.startsWith('$$bind') || key.startsWith('$$slot') ) {
        keyCache=key.slice(6);
      }else if(key.startsWith('$$on')) {
        keyCache=key.slice(4);
      }
      keyCache=fall_AttrName(key);
      if(key.includes("|")) {
        keyCache=keyCache.split('|').shift();
      }
      if(propName === keyCache){
        delete obj[key];
        break;
      }
    }
    return obj;
  }
  function _Houxit_token_GENERATOR_(config, FN, frkey){
    if(!isFRKey(frkey) && !validateCollectionArgs(arguments,  {
      validators:[Object, Function, Symbol],
      max:3,
      min:1,
      name:'tokenGENERATOR'
    })) {
      return  undefined;
    }
    if(!isFRKey(frkey)) {
      config = assign({
        size:10,
        type:'alpha'
      }, config );
    }
    let uuid=generateUUID(config.size, config.type);
    if(!FN(uuid)) {
      uuid=_Houxit_token_GENERATOR_(config,  FN, $factoryTokenKey);
    }
    return uuid;
  }
  function tokenGENERATOR(config, Test_Callback){
    return _Houxit_token_GENERATOR_( config, Test_Callback );//type,size,
  }
  const builtInWidgetTypes="Build,Self,Motion,Provider,Suspense,Portal,Fragment,Memo";
  const blockTagRegex=/::@_\(([\w$.\-!:\#.%?&]+)\)_/;
  function isBlockTag(tagName){
    return blockTagRegex.test(tagName);
  }
  function getBlockTagName(block){
    return isBlockTag(block) ? block.match(blockTagRegex)[1] : undefined;
  }
  function installTransformersArgumentations(self, child, hx_Element, vNode){
    const root= isInitialBuild(self) ? self : self[$$$core].$root;
    define(child[$$$core], '$root', { 
      value:root
    });
    define(child[$$$core], '$parent', {
      value:hx_Element.compiler_options.parent
    }) ;
    define(child[$$$core], '$owner', {
      value:self
    });
    for(let [ prop, content] of entries(root[$$$core].$globals.register)){
      child[$$$core].$globals.register[prop] = assign(child[$$$core].$globals.register[prop], content);
    }
  }
  function resolveInstanceWidgetNormalizer(self, vNode){
    const tagname=isBlockTag(vNode.type) ? getBlockTagName(vNode.type) : vNode.type;
    let widget;
    if(!isBlockTag(vNode.type) && !isDynamicPropTag(vNode.type) && !instance_Has_Widget( self , tagname ) && !(inBrowserCompiler ? customElements.get(tagname) : false )){
      debugHandler(`Template Compilation Error::\n\nUnresolved tagname "<${tagname}>"\n\n   ...if this is a Houxit widget, make sure its registered through the "widgets" option or defined through the CustomElementsInstance.define() method if it's a customElement `, self, true);
      return false;
    }else if(isBlockTag(vNode.type)){
      if(isBuiltinBlocks(tagname)) {
        return true;
      }
      if(!instance_Has_Block(self, tagname)){
        debugHandler(`((Block Resolver Error))\n\n"${tagname}" block is not a registered block element`, self, true);
        return false;
      }else {
        vNode.GeneticProvider=normalize_Block(self, tagname);
      }
      return true;
    }else if(_makeMap_(BUILT_IN_WIDGETS, tagname)) {
      widget=BUILT_IN_WIDGETS[tagname];
    }
    widget=normalize_Widget(self, tagname);
    if(!isDynamicPropTag(tagname) && !validHouxitWidget(widget) && !customElements.get(tagname)){
      debugHandler(`>>>> "${tagname}\n\nCannot compile value as a Houxit widget\nMaybe an invalid houxit widget value type`, self, true);
      return false;
    }
    if(validHouxitWidget(widget)) {
      vNode.GeneticProvider=widget;
    }
    vNode.prototype_=validHouxitWidget(widget) ? widget : tagname;
    return true;
  }
  function get_$name(self){
    return self[$$$ownProperties].name;
  }
  function runSlotDirectiveCompile(self, config, props, virtualNode, hx_Element, metrics, isWidget){
    const { is_hyperscript } = metrics;
    const { hasDir:hasSlot, getKey:getSlot, getDir:getSlotValue } = is_hyperscript ? {} : dirExistenceCheck(props || {}, "$$slot");
    if(hasSlot) {
      if(config.topLevelSlotContext || config.suspenseFlag){
        const bindings=validateIncomingPropsKeys(self, {
          key:getSlot,
          attr:getSlotValue
        }, is_hyperscript, hx_Element, {
          isRerender
        });
        $$dir_SLOT(self, bindings, virtualNode, hx_Element, {
          config,
          ...metrics
        });
        delete config.topLevelSlotContext;
      }else{
        debugHandler(`$$slot directive definitions are only allowed on a widgets top-level consumer scope instances\n\n"slot' directive on ... <${isWidget ? get_$name(self) : virtualNode.type}> has failed to compile away...cross-check element render positioning`, self, true);
      }
    }
  }
  function $compilerEngine ( self , virtualNode , hx_Element, slotsCompilerArgs, config ) {
    let { rawChildren, GeneticProvider:widget, props } =virtualNode
    const is_hyperscript= self ? self[$$$core]?.map.is_hyperscript : virtualNode.is_hyperscript;
    const isRerender=self ? self[$$$operands].initializedRender : null;
    const propsElements={};
    runSlotDirectiveCompile(self, config, props, virtualNode, hx_Element, {
      isRerender,
      is_hyperscript
    }, true);
    if(config.suspenseFlag){
      return
    }
    if(len(props) && self) {
      Props_dilation_compile(virtualNode, self, hx_Element, {
        is_hyperscript
      }, propsElements, config);
      virtualNode.props=propsElements;
    }
    if(!validHouxitWidget(widget)) {
      return;
    }
    virtualNode[widgetTypeKey]=widget[widgetTypeKey];
    virtualNode.widget_instance=widget;
    virtualNode.filesFilter.slotsCompilerArgs=slotsCompilerArgs;
    if(isHouxitElement(hx_Element)) {
      virtualNode[$buildHx_ElementKey]=hx_Element ;
    }
    if(isRerender) {
      return undefined;
    }
    if(isSSRCompiler(self)) {
      virtualNode.filesFilter.useSSRCompiler=true;
      if(isHydration(self)) {
        virtualNode.filesFilter.isHydration=true;
      }
    }
    const child=initializedRenderBuild(self, hx_Element, virtualNode);
    return child.mount( _createFragment() ) ;//mounts the build to a houxit fragment
  }
  function initializedRenderBuild(self, hx_Element, virtualNode){
    const child = new HouxitBuild( virtualNode ) ;
    integrateUseInstallProto(child);
    if(hx_Element) {
      hx_Element.widget_instance=child;
    }
    if( self ) {
      controllerHydration( self , child, hx_Element, virtualNode) ;
      child.install( controllerGlobalPlugin, { self } ) ;//build the widget and other installations
    }
    return child;
  }
  function integrateUseInstallProto(self){
    if(hasOwn(self[$$$core].opts, 'install')){
      self.install(self[$$$core].opts.install);
    }
  }
  function controllerHydration( self, build, hx_Element, vNode ) {
    const globals=getGlobalRegistery(self)
    installTransformersArgumentations(self, build, hx_Element, vNode )
    if( !len( globals.controller ) ) {
      return build ;
    }
    for( let genre of globals.controller.values() ) {
      build.controller( genre ) ;
    }
    return build;
  }
  function controllerGlobalPlugin ( build , options ) {
    const registries= getGlobalRegistery(options.self).register;
    for ( const [ key , value ] of entries( registries ) ) {
      const macroAdapter=key === "properties" ? "property" : key === "transmited" ? "transmit" : key ==='templateClasses' ? 'templateClass' : key.slice(0, -1);
      for ( const [ name, data ] of entries( value ) ) {
        const args=key==='mixins' ? [ data ] : [ name, data ];
        build[macroAdapter]( ...args );//in the root, uses the build.macroAdapter> prototype to define global instances
      }
    }
  }
  function _createFragment(){
    return inBrowserCompiler ? assign(new DocumentFragment(), {
      isHouxit_Fragment:true,
      NodeList:[],
      PATCH_FLAGS:new Tuple()
    }) : new Tuple();
  }
  const instance_Has_TemplateClass=(self, name)=> _makeMap_(self[$$$register].templateClass, name) || _wufHas_instance(self, name);
  const normalize_TemplateClass=(self, name)=>self[$$$register].templateClasses[name] || normalizeWUFBuildScope(self, name);
  const devInfo="You're running the development version of houxit "+get_version().slice(7)+", make sure you switched to the minified  version with the (*.min.js) file extension when deploying to production";//development information
  function _isWUFBuild(self){
    return hasOwn(self[$$$core], '__env__');
  }
  function _wufHas_instance(self, key){
    return _isWUFBuild(self) && hasOwn(self[$$$core].__env__, key);
  }
  function normalizeWUFBuildScope(self, key){
    if(!_isWUFBuild(self) || !hasOwn(self[$$$core].__env__, key)) return;
    return self[$$$core].__env__[key];
  }
  const global_const={
    widget:{
      has:instance_Has_Widget,
      get:normalize_Widget,
    },
    block:{
      has:instance_Has_Block,
      get:normalize_Block
    },
    filter:{
      has:hasFilterInstance,
      get:normalize_Filter
    },
    animation:{
      has:(self, name)=> hasMotionInstance(self, name, 'animation'),
      get:(self, name)=> normalize_Motion(self, name, 'animation')
    },
    transition:{
      has:(self, name)=> hasMotionInstance(self, name, 'transition'),
      get:(self, name)=> normalize_Motion(self, name, 'transition')
    },
    directive:{
      has:instance_Has_Directive,
      get:normalize_Directives,
    },
    templateClass:{
      has:instance_Has_TemplateClass,
      get:normalize_TemplateClass
    },
  }
  function __traverseRESOLVER(name, type){//dynamically resolving widget name
    const self=getCurrentRunningEffect({
      name:'resolve.'+type+'()'
    });
    if(!validateCollectionArgs(arguments, {
      validators:[String],
      max:1,
      name:'resolve.'+type+'()'
    })) {
      return;
    }
    let instance;
    if(!isHouxitBuild(self)) {
      return;
    }
    if (global_const[type].has(self, name) ){
      instance=global_const[type](self, name);
    }else{
      debugHandler(`"resolve.${type}()" macro was unable to find a widget with the provided name "${name}"\n\n are you sure this is a builtIn/globaly/localy registered ${type}`, self, true);
      return;
    }
    return instance;
  }
  function __resolve(name){
    const self=getCurrentRunningEffect({
      name:'resolve.()'
    });
    if(!validateCollectionArgs(arguments, {
      validators:[String],
      max:1,
      name:'resolve.()'
    })) {
      return;
    }
    let instance;
    if(!isHouxitBuild(self)) {
      return;
    }
    const model=useModel();
    return hasOwn(model, name) ? model[name] : undefined;//procure realtime resolving of prop names, falling to 1st occurance in model-handlers-widgets-directives;
  }
  function resolve(name){
    return __resolve(...arguments);
  }
  iterate('widget,directive,filter,templateClass,block,animation,transition'.split(',')).each(type=>{
    resolve[type]=Function('__traverseRESOLVER', 'type',`
      return function resolve${ToPascalCase(type)}(name){
        return __traverseRESOLVER(name, type)
      }
    `)(__traverseRESOLVER, type);
  });
  function $$(){
    return
  }
  function PropsParserContainment(setup, props){
    let value = setup.propValue.join("");
    let key = setup.openPropName.join("");
    if(!len(setup.propValue)) {
      value = isString(value) ? value : null;
    }
    if(hasOwn(props, key)) {
      props['__hx_keys__'].push([key, value ]);
    }else {
      props[key]=value;
    }
    setup.openPropName=[];
    setup.openPropQuote=null;
    setup.isPropValue=false;
    setup.isPropName=true;
    setup.propValue=[];
    setup.namingSpace=false;
  }
  const QuoteRegex=/(['"`])/;
  function __HTMLPropsParser__(attrs, config, self){
    attrs=(attrs || "").trim()
    if(!attrs) {
      return {};
    }
    const props={
      ['__hx_keys__']:[]
    };
    const setup={
      openPropName:[],
      openPropQuote:null,
      propValue:[],
      isPropValue:false,
      isPropName:true,
      prev:null,
      next:null,
      namingSpace:false
    }
    for(let [index, str ] of entries(attrs)){
      index=Number(index);
      setup.next=attrs[index+1];
      const closure=()=> setup.prev=str;
      if(setup.isPropName){
        if(setup.namingSpace && (/\S/.test(str) || setup.next+1 == null || index+1 > len(attrs) )){
          if(!/=/.test(str) || setup.next == null || index+1 > len(attrs)) {
            PropsParserContainment( setup, props );
            if(!/[=]/.test(str) || /\S/.test(str) ) {
              setup.openPropName.push(str);
            }
            closure();
            continue;
          }else {
            setup.namingSpace=false;
          }
        }
        if(/=/.test(str) && !setup.namingSpace){
          setup.isPropName=false;
          setup.isPropValue=true;
        }else if( len(setup.openPropName) < 1 && /\s/.test(str)){ 
          closure();
          continue;
        }
        if(len(setup.openPropName) && /\s/.test(str) ) {
          setup.namingSpace=true;
        }else if(setup.isPropName && ( setup.next == null || index+1 > len(attrs)) ){ 
          setup.openPropName.push(str);
          PropsParserContainment( setup, props );
          closure();
          continue;
        }else if(!setup.namingSpace && setup.isPropName) setup.openPropName.push(str);
      }else if(setup.isPropValue){
        if((/\s/.test(str) && len(setup.propValue) < 1)) {
          closure();
          continue;
        }
        if(len(setup.propValue) < 1 && QuoteRegex.test(str) && !setup.openPropQuote){ 
          setup.openPropQuote=str;
          closure();
          continue;
        }else if(setup.openPropQuote && QuoteRegex.test(str) && str !== setup.openPropQuote ){
          setup.propValue.push(str);
          closure();
          continue;
        }
        if((setup.openPropQuote && QuoteRegex.test(str) && str=== setup.openPropQuote) || (!setup.openPropQuote && (/(\s$)/.test(str) || /(\s$)/.test(setup.next) || ( index+1 === len(attrs) || setup.next == null) ))){
          if( (/(\s$)/.test(setup.next) || index+1 === len(attrs) || setup.next == null) && !(setup.openPropQuote && QuoteRegex.test(str) && str=== setup.openPropQuote) ) {
            setup.propValue.push(str);
          }
          PropsParserContainment( setup, props );
          closure();
          continue;
        }else {
          setup.propValue.push(str);
        }
      }else if(len(setup.openPropName)) {
        PropsParserContainment( setup, props );
      }
      closure();
    }
    if(len(setup.openPropName)) {
      PropsParserContainment( setup, props );
    }
    if(!len(props['__hx_keys__'])) {
      delete props['__hx_keys__'];
    }
    return props;
  }
  function HTMLPropsParser(attrs){
    return __HTMLPropsParser__(attrs);
  }
  const isPlainTextChildrenTagElements=(txt)=> new Set("script,style,title,textarea,code,noscript,iframe,xmp".split(',')).has(txt);
  class comment{
    constructor(value){
      if(value && isString(value)){
        this.content=value;
      }
    }
    content="";
  }
  const isHtmlComment=(value) => value instanceof comment;
  function generateBlockTagRegex(delimiters){
    let [ open, close ] = !delimiters ? [ "{{", "}}"] : delimiters;
    open = hasSpecialCharacters(open) ? escapeDecoder(open) : open;
    close = hasSpecialCharacters(close) ? escapeDecoder(close) : close;
    return new RegExp(`(${open} *(\\/|@)([\\w\\-$:]+)(.*?)(\\/*)? *${close})`,'mg');
  }
  const dynamicPropTagRegex=/::([\w-$:\-!\#\@.()[\]%?&]+)/;
  function isDynamicPropTag(tag){
    return /^::([\w-$:\-!\#\@.()[\]%?&]+)/.test(tag)
  }
  const emptyTagRegex=/\<[\/]?[ ]*\>/;
  const isEmptyTag=(tag)=>emptyTagRegex.test(tag);
  const isOpenEmptyTag=(tag)=>/(\<[ ]*\>)/.test(tag);
  const isCloseEmptyTag=tag=>/(\<\/[ ]*\>)/.test(tag);
  // const openingTagsRegex = /(\<[ ]*\>|\<\/[ ]*\>)|(<(\/)?([\w\-\$!:\#\@.()[\]%?\/&]+)(\s+[^>]*?(?:(?:[\w]+[_!@#$'"%^&*()+\-\[\]{};:\\|,.<\/?~`]*)|(?:'[^']*')|(?:"[^"]*")))*\s*(\/)?>)|([\w \s!@#$'"%^&*()+\-\[\]{};:\\|,.\/?`~]+)/mg;//old and original regex
  const openingTagsRegex = /(\<[ ]*\>|\<\/[ ]*\>)|(<(\/)?([\w\-\$!:\#\@.()[\]%?\/&]+)(\s+[^>]*?(?:(?:[\w]+[_!@#$'"%^&*()+\-\[\]{};:\\|,.<\/?~`]*)|(?:'[^']*'[^>\s]*)|(?:"[^"]*"[^>\s]*)))*\s*(\/)?>)|([\w \s!@#$'"%^&*()+\-\[\]{};:\\|,.>=\/?`~]+)/mg;

  const openingTagRegex=/<([\w\-\$!:\#\@.()[\]%?&]+)(\s+[^>]*?(?:(?:[\w]+[_!@#$'"%^&*()+\-\[\]{};:\\|,.<\/?>=`~]*)|(?:'[^']*'[^>\s]*)|(?:"[^"]*"[^>\s]*)))*\s*(\/)?>/m;
  const isOpeningTag = (source)=> openingTagRegex.test(source);
  const closingTagRegex= /<[\/]([\w$.:\-\@()[\]%&?\\\/]+)[ ]*>/;
  const isClosingTag=(source)=> closingTagRegex.test(source);
  const isText=(text)=> !openingTagRegex.test(text) && /([\w \s!@#$'"%^&*()+\-\[\]{};:\\|,.\/?`~]+)/m.test(text);
  const openingTagAttrRegex=/^<[\w\-\$!\@:.()[\]%?&]+([\s\S]*[^\/>])?\s*(\/)?>\s*$/m;
  const JSXParserRegex=/hx:\(\(__(\d)__\)\)/;
  const isOpeningCommentTag=(tag)=> /<!-->/.test(tag);
  const isClosingCommentTag=(tag)=> /<\/-->/.test(tag);
  const commentRegex=/((<!--)|(-->))/g;
  function compelToResolveTagname(self, vNode, config={}){
    if((isHouxitBuild(self) && isString(vNode.type) && !IS_VALID_TAGNAME(vNode.type))){
      resolveInstanceWidgetNormalizer(self, vNode);
    }else if(config.JSXParser && isString(vNode.type) && JSXParserRegex.test(vNode.type)){
      const instance=normalizeJSXPropValue(config, vNode.type);
      vNode.type=instance;
      if(validHouxitWidget(instance)){
        vNode.GeneticProvider=instance;
        vNode.prototype_=instance;
      }
    }
  }
  function createDynamicPropLoader(self, Vnode, config){
    if((isBlockTag(Vnode.type)) || !isString(Vnode.type) || !isDynamicPropTag(Vnode.type) || !isHouxitBuild(self) || config.JSXParser ) {
      return;
    }
    const dTAG=Vnode.type;
    Vnode.type=Build;
    if(!Vnode.props) {
      Vnode.props={
        '$$bind:self':dTAG.slice(2)
      }
    }else {
      Vnode.props['$$bind:self']=dTAG.slice(2);
    }
    Vnode.prototype_=Build;
    Vnode.GeneticProvider=Build;
  }
  function finishTagLoader(tagName, setup, NodeList, self, config, tagMatch){
    let { loaderList, trackNodes, child_src } = setup;
    let activeObj=loaderList[0][1];
    activeObj.rawChildren=child_src || "";
    if(isPlainTextChildrenTagElements(tagName)) {
      activeObj.children=child_src;
    }
    else if(child_src?.trim() && config.deep){
      activeObj.children=__HouxitHTMLParser__(child_src, [], config, self);
      if(JSXParserRegex.test(activeObj.rawChildren)){ 
        activeObj.rawChildren=activeObj.rawChildren.replace(JSXParserRegex, (match, num)=>{
          const instance=config.JSXParser.sources[Number(num)];
          if(canRender(instance)) {
            return instance;
          }
          return match;
        });
      }
    }else if(tagMatch.trim()) {
      activeObj.rawChildren=activeObj.rawChildren+tagMatch;
    }
    compelToResolveTagname(self, activeObj, config);
    createDynamicPropLoader(self, activeObj, config);
    NodeList.push(activeObj);
    loaderList.splice(0);
    trackNodes.splice(0);
    return "";
  }
  function normalizeJSXPropValue(config, value){
    const index=Number(value.match(JSXParserRegex)[1]);
    return config.JSXParser.sources[index];
  }
  function normalize_Props_State(vnode, self){
    const props=vnode.props;
    return props;
  }
  function normalize_jsx_props(vnode, config){
    for(let [key, value] of entries(vnode.props)){
      if(JSXParserRegex.test(value)) {
        vnode.props[key]=normalizeJSXPropValue(config, value);
      }else if(JSXParserRegex.test(value)){
        const instance=normalizeJSXPropValue(config, key);
        if(!isString(instance)) {
          debugHandler(`property key value passed to the "html" macro is not a valid prop name\n\ntype of "${typeof instance}" found >>>> Expects a "string" value`);
          return;
        }
        vnode.props[instance]=vnode.props[key];
        delete vnode.props[key];
      }
    }
  }
  function openingTagHydrate(tagMatch, NodeList, setup, metrics){
    const { config, self } = metrics;
    let { loaderList, trackNodes, child_src, isComment } = setup;
    const is_hyperscript=config.is_hyperscript;
    let [ match, tagName ] =isOpeningTag(tagMatch) ? tagMatch.match(openingTagRegex) : [];
    let vnode= new vNodeClass(tagName);
    if(isOpeningCommentTag(tagMatch)){
      vnode= new comment();
      if(isComment){
        child_src+=tagMatch.slice(0, -1);
      }else{
        isComment=true;
        loaderList.push(['comment', vnode]);
      }
    }
    tagMatch=isOpeningCommentTag(tagMatch) ? tagMatch.slice(0, -1) : tagMatch;
    if(isComment) {
      isComment=true;
      child_src+=tagMatch;
      return {
        child_src,
        isComment,
        response:true
      };
    }
    const [ attrsMatch, attrs, selfClosed ] = tagMatch.match(openingTagAttrRegex) || [];
    vnode.props=__HTMLPropsParser__(attrs, null, self);
    if(config.JSXParser && vnode.props) {
      normalize_jsx_props(vnode, config);
    }
    if(!isHouxitBuild(self) || config.jsx) {
      vnode.is_hyperscript=true;
    }
    if(!is_hyperscript && isHouxitBuild(self)) {
      vnode.props=normalize_Props_State(vnode, self);
    }
    if(hasOwn(vnode.props, 'key')){
      vnode.key=vnode.props.key;
      delete vnode.props.key;
    }
    if(attrs && isBlockTag(tagName)){
      if(!hasOwn(vnode.props, 'exp')  || len(vnode.props) > 1 ) {
        vnode.props={
          exp:attrs
        }
      }
      vnode.props.exp=escapeReverseDecoder(vnode.props.exp || "");
    }
    if(len(vnode.props) < 1) {
      vnode.props = null;
    }
    const isSelfClosed= selfClosed?.trim() == "/";
    if( !(len(loaderList)) && ((isBlockTag(tagName) && isBuiltinVoidBlocks(getBlockTagName(tagName))) || (IS_HTML_VOID_TAG(tagName) || isSelfClosed))){
      vnode.children=null;
      vnode.rawChildren=null
      compelToResolveTagname(self, vnode, config);
      createDynamicPropLoader(self, vnode, config);
      NodeList.push(vnode);
      return  {
        child_src,
        isComment:false,
        response:false
      };
    }
    if(len(loaderList)) {
      child_src+=tagMatch;
      trackNodes.push(tagName);
      return  {
        child_src,
        isComment:false,
        response:false
      };
    }
    loaderList.push([tagName, vnode]);
    return  {
      child_src,
      isComment:false,
      response:true
    };
  }
  function parserSourceInitializer(source, self){
    return source.replace(generateBlockTagRegex(isHouxitBuild(self) ? self[$$$core].settings.delimiters : undefined), (match, timing, ClosingTag, name, value, selfClosed)=>{
      return `<${ClosingTag==="/" ? "/" : "" }::@_(${name})_ ${ ClosingTag==="@" ? "exp="+'"'+escapeDecoder(value)+'"' : "" } ${selfClosed ? "/" : ""}>`;
    }).replace(commentRegex, (match, path, r)=> /<!--/.test(match) ? "<!-->" : /-->/.test(match) ? "</-->" : match );
  }
  function __HouxitHTMLParser__(source, NodeList=[], config={}, self){
    if(!isString(source) && !source.trim()) {
      return !isArray(NodeList) ? [] : NodeList;
    }
    config=assign({
      deep: true,
      trim:true
    }, config);
    source=parserSourceInitializer(source, self);
    let tag_matches=source.match(openingTagsRegex);
    let child_src="";
    let skipComment=false;
    let loaderList=[];
    let trackNodes=[];
    let isComment=false;
    NodeList = NodeList || [];
    for(let [ index, tagMatch ] of (tag_matches || []).entries()){
      if(config.trim && !(len(loaderList) && isPlainTextChildrenTagElements(loaderList[0][0]) )){ 
        tagMatch = tagMatch.trim();
        if(tagMatch == "") {
          continue;
        }
      }else if(!config.trim && !(len(loaderList) && isPlainTextChildrenTagElements(loaderList[0][0]) )) {
        tagMatch=tagMatch.trim();
      }
      tagMatch = isOpenEmptyTag(tagMatch) ? "<hx:fragment>" : isCloseEmptyTag(tagMatch) ? "</hx:fragment>" : tagMatch ;
      if(isOpeningCommentTag(tagMatch) || isOpeningTag(tagMatch) ) {
        if(isOpeningCommentTag(tagMatch) && len(loaderList)) {
          child_src+=tagMatch.slice(0, -1);
          skipComment=true;
          continue;
        }
        let response=openingTagHydrate(tagMatch, NodeList, {
          loaderList,
          trackNodes,
          child_src,
          isComment
        }, {
          config,
          self
        });
        child_src=response.child_src;
        isComment=response.isComment;
        if(!response.response) {
          continue;
        }
      }else if(isClosingCommentTag(tagMatch) || isClosingTag(tagMatch) ){
        if(isClosingCommentTag(tagMatch) ){
          if(skipComment){
            child_src+=tagMatch.slice(2);
            skipComment=false;
            continue;
          }
          if(isComment){
            const comment=loaderList[0][1];
            if(isHtmlComment(comment)) {
              comment.content=child_src+tagMatch.slice(2);
            }
            child_src="";
            loaderList.splice(0);
            isComment=false;
            NodeList.push(comment);
          }
          continue;
        }else if(isComment){
          child_src+=tagMatch;
          continue;
        }
        let [ match, tagName ]=tagMatch.match(closingTagRegex);
        let lastLoader=trackNodes[len(trackNodes)-1];
        if(len(loaderList)){
          if(config.JSXParser && tagName === "/") {
            child_src= finishTagLoader(tagName, {
              loaderList,
              trackNodes,
              child_src
            }, NodeList, self, config, tagMatch);
          }else if(len(trackNodes) && new Set(trackNodes).has(tagName) ){
            child_src+=tagMatch;
            let mIndex=trackNodes.findLastIndex((f)=> f == tagName);
            if(mIndex > -1) {
              trackNodes.splice(mIndex, 1);
            }
            continue;
          }else if(tagName === loaderList[0][0]){
            child_src=finishTagLoader(tagName, {
              loaderList,
              trackNodes,
              child_src
            }, NodeList, self, config, "");
          }else {
            child_src+=tagMatch;
          }
        }
      }else if(isText(tagMatch)){
        let useObjChild=undefined;
        if(JSXParserRegex.test(tagMatch)) {
          tagMatch=tagMatch.replace(JSXParserRegex, (match, num)=>{
            const srcValue=config.JSXParser.sources[Number(num)];
            if(canRender(srcValue)) {
              return srcValue;
            }
            useObjChild={
              srcValue
            }
            return match;
          });
        }
        if(len(loaderList)) {
          child_src+=tagMatch;
        }else {
          NodeList.push(useObjChild ? useObjChild.srcValue : tagMatch);
        }
      }
    }
    if(len(loaderList)){
      if(isComment){
        const comment=loaderList[0][1];
        if(isHtmlComment(comment)) {
          comment.content=child_src;
        }
        child_src="";
        loaderList=[];
        isComment=false;
        trackNodes=[];
        NodeList.push(comment);
      }else {
        child_src = finishTagLoader(loaderList[0][0], {
          loaderList,
          trackNodes,
          child_src
        }, NodeList, self, config, "");
      }
    }
    return NodeList;
  }
  function HTMLParser(html, NodeList, config, self ){
    return __HouxitHTMLParser__(...arguments);
  }
  function negotiateRawDirective(self, node){
    if(!node.props) {
      return;
    }
   const { hasDir, getDir, getKey } = dirExistenceCheck(node.props, "$$raw");
    if((hasDir) && isHouxitBuild(self) )  {
      node.filesFilter['dir--raw']=getDir;
    }
  }
  function specializedTemplateProductionProcessor(self, attributes, node, metrics, config ){
    let [ hx_Element, NodeList , tagName, fall ]=metrics;
    let Vnode;
    config=assign({}, config);
    const isRerender=()=>self[$$$operands].initializedRender;
    if(config.if_Block && !config.props?.status) {
      return
    }
    if(isHouxitBuild(self)){
      negotiateRawDirective(self, node);
      let re=assign({},node.props || {});
      const createElement=(conf)=>{
        if(isRerender()){
          node.props=assign({}, re);
        }
        return createHouxitElement(node, self, false, assign({}, hx_Element?.LabContext), NodeList, assign({}, fall),  hx_Element, config );
      }
      Vnode=createElement();
      if(!isPFunction(Vnode?.compiler_options?.createElement)){
        Vnode.compiler_options.createElement=createElement;
      }
    }else{
      let children=null;
      if(node.children){
        children = isPlainTextChildrenTagElements(tagName) ? node.children : _HouxitCoreRenderer(node.rawChildren, null, true, null, null, );
      }
      Vnode=createVNode({
        type:tagName, 
        props:len(attributes) ? attributes : null,
        children
      });
    }
    NodeList.add(Vnode);
    return Vnode;
  }
  const validAttrNameRegex= /[\w\$]+/;
  function transcript_to_VNodeClass(){
    
  }
  function templateElementNodeCompiler(self, vNode, hx_Element, config, NodeList, fall){
    config=assign({}, config);
    let { type:tagName, props, children, rawChildren, key } = vNode;
    let attributes=props;
    let context=smartDextCtxMerging(hx_Element?.LabContext || {}, fall);
    vNode.hx_Element=hx_Element;
    vNode.ctx=context;
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    const args=()=> [ hx_Element, NodeList, tagName, context, fall ];
    if(!is_hyperscript && isString(tagName) && isBlockTag(tagName)) {
      if(!isHouxitBuild(self)) {
        debugHandler(`block tags Cannot be used in build/static templates mode`, self, true);
      }else {
        return blockElementsPreProcessors(self, vNode, args(), config );
      }
    }else {
      return specializedTemplateProductionProcessor(self, attributes, vNode, args(), config);
    }
  }
  function templateTextNodeCompiler(self, node, hx_Element, config,  NodeList, fall){
    config=assign({}, config);
    const isRerender=self[$$$operands].initializedRender;
    if(node){
      let LabContext;
      if(len(config.ctx)) {
        fall=smartDextCtxMerging(fall||{}, config.ctx||{});
      }
      if(fall) {
        LabContext=smartDextCtxMerging(hx_Element?.LabContext || {} , fall );
        if(hx_Element) {
          hx_Element.LabContext=LabContext
          LabContext=null
        }
      }
      let value = node;
      if(isHouxitBuild(self)){ 
        const args= [ value, self, hx_Element, LabContext, config];
        const createElement=()=>new HouxitTextElement(...args);
        node=createElement();
        node.compiler_options.createElement=createElement;
      }else {
        node=value;
      }
      NodeList.add(node);
      return node;
    }
  }
  function createElementRenderBlock(self, node, hx_Element, config, NodeList, fall){
    let childNodes;
    if(isPrimitive(node) && String(node).trim()) {
      const createElement=()=>templateTextNodeCompiler(self, String(node), hx_Element, config,  NodeList, fall);
      childNodes=createElement();
      childNodes.compiler_options.createElement=createElement
    }else if(isHtmlComment(node)){
      /*Ignore comment nodes*/pass;
    }else if(isVNodeClass(node)) {
      node.filesFilter.parent=config?.slotTap?.parent || hx_Element || self;
      const createElement=()=>templateElementNodeCompiler(self, node, hx_Element, config, NodeList, fall );
      childNodes=createElement();
    }else if(isTemplateClass(node)){
      const childNodes=node[TemplateClassKey](self, null, hx_Element, fall, config);
      NodeList[isArray(childNodes) ? 'extend' : 'add' ](childNodes);
    }else if(isCollection(node)){
      const FragmentNodes=new Tuple();
      renderTemplateClasses(self, arrSet(node), hx_Element, config, FragmentNodes, fall);

      childNodes=new HouxitFragmentElement(FragmentNodes.list(), self, null)
      NodeList.add(childNodes);
    }
    return childNodes;
  }
  function renderTemplateClasses(self, parser, hx_Element, config, NodeList, fall ){
    fall=assign({}, fall);
    config=assign({}, config);
    const isRerender=self[$$$operands].initializedRender;
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    for (let [ index, node ] of parser.entries()){
      const next=parser[index+1];
      if(isHouxitElement(node)){
        NodeList.add(node)
      }else if(isPrimitive(node) ? String(node).trim() : node || isFunction(node)){
        if(is_hyperscript && isFunction(node)){
          const fn=node;
          const effect=_createEffectBase( ()=>{
            return unwrap(fn());
          }, self);
          let value=effectRunner(effect).value;
          if(!isPrimitive(value)){
            debugHandler(`lazy callback effect expects only a primitive node\n\n${typeof value} render not supported\nat ...."${fn.toString()}"`, self, true);
            return;
          }
          config.lazy_effect=effect;
          node=value;
        }
        const childNodes=createElementRenderBlock(self, node, hx_Element, config, NodeList, fall);
        delete config.lazy_effect;
      }
    }
  }
  function _HouxitCoreRenderer(html, self, parent, hx_Element, fall, config={}){
    if(!html && !validateType(html, [String, Array, Object])) {
      return null;
    }
    config=assign({}, config);
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    const isRerender=self[$$$operands]?.initializedRender;
    let templateRender= isString(html) ? __HouxitHTMLParser__(html, [], {
      trim:true,
      is_hyperscript:isHouxitBuild(self) && config.is_hyperscript
    }, self) : arrayInverter(html);
    templateRender=(new Tuple(...arrayInverter(templateRender))).list();
    if(config.official && !isRerender) {
      const boundary=getBoundary(self);
      if(boundary){
        iterate(arrayInverter(templateRender)).each((node)=>{
          if(isVNodeClass(node)) node.filesFilter.suspense=boundary;
        });
      }
    }
    const NodeList=new Tuple();
    renderTemplateClasses(self, templateRender, hx_Element, config, NodeList, fall);
    return len(NodeList) > 1 ? NodeList.list() : len(NodeList) === 1 ? NodeList.shift() : null ;
  }
  function SSRNodesCollectionStrategy(self, NodeList){
    const isSSR=isSSRCompiler(self);
    if(!isSSR) {
      return NodeList;
    }
    const ssr_list=new Tuple();
    for(let [ index, vNode] of NodeList.entries()){
      if(!isTextOrNativeElement(vNode) && !isHouxitFragmentElement(vNode)) {
        continue;
      }
      ssr_list.add(vNode.VNodeManager.SSRVnode);
    }
    return ssr_list;
  }
  function controlBuiltInBlocks(self, node, blockN,  metrics, config){
    const [ hx_Element, NodeList, tagName, context, fall ] = metrics ;
    const args=()=>[ self, node, blockN, metrics ];
    const children=node.children;
    const exp=node.props.exp;
    let template=[];
    let subscribers=[];
    let data;
    const ctx=[children, exp ];
    if(blockN === 'if') {
      const createElement = ()=> blockIFPreprocessor(...args(), ctx, config);
      config.createElement=createElement;
      const { eff_pack, flush, eff_place }=createElement();
      const ELEMENT=new HouxitFragmentElement(eff_pack?.[eff_place]?.tuple.list() || [], self);
      ELEMENT.compiler_options.createElement=createElement;
      ELEMENT.VN_Tree.FLUSHS.add(flush);
      config.ELEMENT=ELEMENT;
      NodeList.add(ELEMENT);
    }else if(blockN === 'else' || blockN === "else-if") {
      blockElseIfPreprocessor(self, node, config, blockN);
    }else if(blockN === 'for') {
      const createElement=()=>blockForProcessor(...args(), ctx, false, config);
      template = createElement();
      template.compiler_options.createElement=createElement;
    }else if(blockN === 'const') {
      blockConstPreprocessor(...args(), ctx, config);
    }else if(blockN === 'class') {
      blockClassTransformer(...args(), ctx);
    }else if(blockN === 'new') {
      template=blockNewRenderProcessor(...args(), ctx);
    }else if(blockN === 'html') {
      template = blockHtmlEmbedder(...args(), ctx, config);
    }else if(blockN === 'debugger') {
      blockInstallDebugger(self, node, blockN,  metrics , [children, exp], config);
    }else if(blockN === 'await'){
      const createElement=()=>createAwaitBlockNode(...args(), ctx, config);
      const element=createElement();
      element.compiler_options.createElement=createElement;
    }
    return arrayInverter(template);
  }
  function createAwaitBlockNode(self, node, blockN,  metrics , [children, exp], config){
    const [ hx_Element, NodeList, tagName, context, fall ] = metrics ;
    const Node=new HouxitTextElement('', self);
    const isRerender=self[$$$operands].initializedRender;
    let subscribers, val;
    hx_Element.LabContext=smartDextCtxMerging(hx_Element.LabContext || {}, fall || {});
    async function getResp(){
      const effect=_createEffectBase(()=>{
        return _$runModelBind(self, exp, isHouxitElement(hx_Element) ? hx_Element : fall);
      }, self);
      return await effectRunner(effect);
    };
    let response=getResp();
    Node.VNodeManager.awaitTextReady=response;
    const boundary=getBoundary(node);
    response = response.then((effect)=>{
      const callback=(vl)=>awaitBlockUpdateFrame(self, vl, Node, isRerender, effect);
      if(isPromise(effect.value)){
        value.then(v=>callback(v)).catch(err=>{
          throw new Error(err)
        });
      }else{
        callback(effect.value);
      }
    }).catch(err=>{
      if(boundary){
        boundary.errorCaptured(()=>{
          debugHandler(err, self, true);
        }, {
          message:`{{@await}} block fails to resolve...`
        });
      }
    });
    if(boundary){
      boundary.activeAwaits++;
      boundary.loadChain.add(response);
    }
    NodeList.add(Node);
    return Node;
  }
  function awaitBlockUpdateFrame(self, value, Node, isRerender, effect){
    const N=new HouxitTextElement(compileToRenderable(value), self);
    if(isRerender){
      Node.$element=N.$element;
      Node.prototype_=N.prototype_;
    }else{
      Node.$element.textContent=N.$element;
      Node.prototype_=N.prototype_;
      createPriorityFlush(effect, (observer)=>{
        new Promise((resolve)=>{
          const effect_vn=Node.compiler_options.createElement();
          resolve(effect_vn);
        }).then((effect_vn)=>{
          tick(()=>{
            Node.$element.textContent=effect_vn.$element;
          });
        })
      }, self);
    }
  }
  function blockInstallDebugger(self, node, blockN,  metrics , [children, exp], config){
    const [ hx_Element, NodeList, tagName, context, fall ] = metrics;
  }
  function blockHtmlEmbedder(self, node, blockN,  metrics , [children, exp], config){
    const [ hx_Element, NodeList, tagName, context, fall ] = metrics;
    let effect = _createEffectBase(()=>{
      return _$runModelBind(self, exists(exp.trim()) ? exp : "undefined", hx_Element);
    }, self);
    return [];
  }
  function blockClassTransformer(self, node, blockN,  metrics , [children, exp], config){
    const [ hx_Element, NodeList, tagName, context, fall ] = metrics
    if(!variableDeclarationRegex.test(exp)){
      debugHandler(`template "@class" block declaration failure \n\ndoes not meet required name and args syntax rules`, self, true);
      return;
    }
    let [ match, var_name, var_params]= exp.match(variableDeclarationRegex);
    let validator;
    if(var_params) {
      validator=var_params.match(templateClassValidatorRegex);
    }
    if(validator){
      var_params=var_params.slice(len(validator[0]));
      validator=validator[1];
      validator=_$runModelBind(self, validator, hx_Element);
      if(!isPFunction(validator)){
        debugHandler(`@class: template "@class" block validator prop expects a plain function callback reference`, self, true);
        return;
      }
    }
    if(var_params){
      var_params=var_params.trim();
      if(!(var_params.startsWith("(") && var_params.endsWith(")"))){
        debugHandler(`${var_name}: arguments of template class "${var_name}" does not meet required syntax\nmissing parenthesis in arguments enclosure  "(" and ")"`, self, true);
        return;
      }
    }
    var_name = var_name || match;
    if(!isValidIdentifier(var_name)){
      debugHandler(`template "@class" block name "${var_name}" is not a JavaScript valid identifier`, self, true);
      return;
    }
    function templateKlassGenerator(...props){
      const isValid= validator ? validator([...props]) : true;
      if(!isBoolean(isValid)){
        debugHandler(`TemplateClass validator expects a Boolean return value\nvalidation proceses failed`, self, true);
        return false
      }else if(!isValid){
        debugHandler(`validation method for template class "${var_name}" failed\nreturns falsy in its props validation check`, self, true);
        return false;
      }
      return true;
    };
    if(var_params) {
      var_params=var_params.slice(1).slice(0, -1);
    }
    const parameters=separateArgsLiterals(var_params);
    class TemplateClass extends BaseTemplateClass{
      constructor(...args){
        super(()=>children);
        const validator = templateKlassGenerator(...args);
        if(!validator) {
          return [];
        }
        this[TemplateClassKey]=function factory(){
          const ssc=smartDextCtxMerging(fall, {
            [$$dexTransformKey]:{
              syntaxArray:[...parameters],
              sourcesArray:[...args]
            }
          });
          installSuspense(children, getBoundary(hx_Element));
          return config.suspenseFlag ? children : _HouxitCoreRenderer(memMove(children, true), self, null, hx_Element, ssc, config );
        }
      }
    }
    if(!hasOwn(self.__public_model__, var_name)) {
      define(self.__public_model__, var_name, {
        value:TemplateClass,
        enumerable
      });
    }
    return [];
  }
  function createCatacombs(setup, val, char){
    const rChar=char === "{" ? "}" : "]";
    if(val===char) {
      if(setup.open && setup.type === char) {
        setup.openCurlies++;
      }else if(!setup.open){
        setup.open=true;
        setup.type=char;
      }
      setup.single.push(val);
    }else if(val===rChar){ 
      if(setup.type === char && setup.openCurlies && setup.open) {
        setup.openCurlies--;
        setup.single.push(val);
      }else if(setup.type===char && setup.open && !setup.openCurlies){
        setup.single.push(val);
        setup.record.push(setup.single.join("").trim());
        setup.single=[];
        setup.open=false;
        setup.type=null;
      }else if(setup.open && setup.type !== char) {
        setup.single.push(val);
      }
    }
  }
  function separateArgsLiterals(syntax){
    const setup={
      record:[],
      single:[],
      open:false,
      openCurlies:0,
      type:undefined,
      next:undefined,
      concat:undefined
    }
    const isStrRegex=val=>/['"`]+/.test(val);
    let i=0;
    for(const val of values(syntax)){
      i++;
      setup.next=syntax[i];
      if(setup.open && isStrRegex(val) && !setup.concat) {
        setup.concat=val;
        single.push(val)
      }else if(isStrRegex(val) && val === setup.concat){ 
        setup.concat=null;
        single.push(val);
      }else if(val==="{" || val==="}" && !setup.concat) {
        createCatacombs(setup, val, "{");
      }else if(val===',' || /\s/.test(val)){
        if(setup.concat);
        else if(!setup.open) {
          continue;
        }else {
          setup.single.push(val);
        }
      }else if(val === "[" || val==="]" && !setup.concat) {
        createCatacombs(setup, val, "[");
      }else{
        if(!setup.open){
          setup.open=true;
          setup.single.push(val);
        }else if(setup.open && !setup.type && (setup.next==="," || /\s/.test(setup.next) || isUndefined(setup.next))){
          setup.open=false;
          setup.single.push(val);
          setup.record.push(setup.single.join("").trim());
          setup.single=[];
        }else if(setup.open) setup.single.push(val);
      }
    }
    return setup.record;
  }
  function blockNewRenderProcessor(self, node, blockN,  metrics , [children, exp], config){
    const [ hx_Element, NodeList, tagName, context, fall ] = metrics
    const name=abstractFilterName(exp.trim());
    const hasArg=len(name) < len(exp.trim());
    let args=hasArg ? ArgsExtractor(exp, name).content : undefined;
    args= args ? _$runModelBind(self, '['+args+']', hx_Element || fall) : [];
    const templateKlass=_$runModelBind(self, name, hx_Element);
    const deb=()=>debugHandler(`"${name}" reference is not a valid TemplateClass instance`, self, true);
    if(!isClass(templateKlass) ){
      deb();
      return [];
    }
    let template=new templateKlass(...args);
    if(!isTemplateClass(template) ){
      deb();
      return [];
    }
    template=template[TemplateClassKey](self, null, hx_Element, fall, config);
    return arrayInverter(template);
  }
  function blockConstPreprocessor(self, node, blockN,  metrics , [children, exp], config){
    const [ hx_Element, NodeList, tagName, context, fall ] = metrics ;
    if(exp.trim() && !variableDeclarationRegex.test(exp)){
      debugHandler(`"${exp}" statement is not recognised or not a valid statement or expression`, self, true);
      return [];
    }else if(!exp.trim()) {
      return [];
    }
    let [ match, variable, expression ] = exp.match(variableDeclarationRegex);
    variable=variable.trim();
    if(!isDestructureSyntax(variable) && !isValidIdentifier(variable)){
      debugHandler(`"${variable}" is an invalid identifier`, self, true);
      return [];
    }
    const data = _$runModelBind(self, expression?.trim(), hx_Element || context );
    if(isDestructureSyntax(variable)){
      if(isFalse(destructWarn(variable, data, self))){
        return [];
      }
      smartDextCtxMerging(fall, {
        [$$dexTransformKey]:{
          sourcesArray:[data],
          syntaxArray:[variable]
        }
      }, true);
    }else if(!hasOwn(context, variable)) {
      fall[variable]=data;
    }else if(hasOwn(context, variable)){
      debugHandler(`"${variable}" const block namespace already declared\nor instance cannot be re-declared/re-assigned`, self, true);
    }
  }
  function blockForProcessor(self, node, blockN, metrics , [children, exp], isWidget=false, conf){
    const [ hx_Element, NodeList, tagName, context, fall, value, provide ] = metrics ;
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    const isRerender=self[$$$operands].initializedRender;
    let template = [];
    let Loop_Data=isWidget ? { 
      obj:value,
      effect:conf.effect
    } : For_Loop(self, exp, hx_Element, true, conf, isRerender);
    const effect=isWidget ? conf.effect : Loop_Data.effect;
    if(!isRerender){
      conf.effect=effect;
    }else{
      Loop_Data.obj=effect.runEffect().value;
    }
    if(!isIterable(Loop_Data.obj) && !isNumber(Loop_Data.obj)){
      debugHandler(`${getType(Loop_Data.obj)} value passed to the "For" built-in ${ isWidget ? 'widget' : 'block'} is not an iterable object`, self, true);
      return template;
    }
    function factoryRender(option, config, children){
      installSuspense(children, getBoundary(hx_Element));
      return config.suspenseFlag ? children : _HouxitCoreRenderer(memMove(children, true), self, true, hx_Element, option, config);
    }
    iterate(unwrap(Loop_Data.obj), Loop_Data.loopType || 'of').each((value, key, index)=>{
      let options=smartDextCtxMerging(hx_Element?.LabContext || {}, assign({}, fall||{})), child=children;
      const config=assign({}, conf);
      const loopState=shallowStream([value, key, index]);
      if(!isWidget) {
        options=loopContextPropsMerger(self, {
          valToken:Loop_Data.valToken?.trim(),
          keyName:Loop_Data.keyName?.trim(),
          index:Loop_Data.index?.trim(),
          hx_Element
        }, { 
          ky:key,
          vl:value,
          count:index
        }, options );
      }else if(!is_hyperscript){
        if(isForLoopDestructureRegex.test(provide.value)){
          provide.value="["+provide.value.slice(1, -1)+"]";
        }
        options=wrapNamespaceBind(self, options, provide.value, arrayDestructureRegex.test(provide.value) ? loopState : loopState[0] );
      }
      config.loop_context=loopState;
      const createElement=()=>{
        let src= children.map(child=>factoryRender(options, config, safeCall(child, loopState))).filter(v=>isHouxitElement(v));
        src=len(src) < 2 ? src[0] : new HouxitFragmentElement(src, self, hx_Element, null, value);
        return src;
      }
      let source=createElement();
      source.compiler_options.createElement=createElement;
      template.push(source);
    });
    const render = new HouxitFragmentElement(template, self, hx_Element);
    if(!isRerender){
      const flush=createPriorityFlush(Loop_Data.effect, (observer)=>{
        prioritize_list_effect(self, render, node, Loop_Data.obj, Loop_Data.effect, conf);
      });
    }
    return render;
  }
  const createPack=(config, typeF, test, effect)=>{
    const ind=config.conditional_Index;
    config.pack.push({
      name:`${typeF}${typeF === 'else-if' && ind ? ind : "" }`,
      tuple:new Tuple(),
      test,
      effect
    });
    config.place++;
  }
  function blockIFPreprocessor(self, node, blockN,  metrics, [rawChildren, exp], config, isWidget=false){
    let [ hx_Element, NodeList, tagName, context, fall, value ] = metrics ;
    const children=node.children || [];
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    const isRerender=self[$$$operands].initializedRender;
    let data, effect;
    config.subscribers=[];
    if(isWidget && !isRerender){
      effect=node.compiler[If].test;
      data=is_hyperscript ? value : effect.value;
    }else if(!isRerender){
      effect=_createEffectBase(()=>{
        return ( _$runModelBind(self, exists(exp.trim()) ? exp : "undefined", hx_Element));
      }, self);
      data=effectRunner(effect).value;
      node.compiler[If]={
        test:effect
      }
    }
    if(isRerender){
      NodeList=new Tuple();
      data=node.compiler[If].test.runEffect().value;
    }
    let template = [];
    const condition = unwrap(data) ? true : false;
    let typeF=isWidget ? 'hx:if' : "@if";
    config=assign(config, {
      if_Block:true,
      props:{
        status:condition,
        prevBlock:undefined,
        activeBlock:typeF,
        shouldContinue:!condition
      },
      ctx:{},
      keywordLists:[],
      pack:[],
      place:-1,
      reducers:new Tuple
    });
    config.reducers.add(effect);
    if(config.props.status){
      createPack(config, 'if', true, effect);
    }
    config.conditional_Index=0;
    for(let [index, vNode] of children.entries()){
      const res= conditionalBlockCompile(self, vNode, metrics, config, vNode.props?.exp, isWidget);
      if(!res) {
        break;
      }
    }
      //   const list=config.pack[config.place].tuple.list();
    let flush;
    if(!isRerender){
      flush=createPriorityFlush(effect, (observer)=>{
        const { tuple, name } = config.pack?.[config.place] || {};
        const { eff_pack, eff_place } =config.createElement() || {};
        const pack=eff_pack[eff_place];
        const Element=config.ELEMENT;
        const EffectVNode=new HouxitFragmentElement(pack?.tuple?.list() || [], self, hx_Element);
        if(config.memoVault && !checkMemoContentValidity(self, EffectVNode)){
          return;
        }
        let tracker={
          list:new Tuple(),
          FORCE:name !== (pack?.name || 'if'),
          ...config
        }
        resolvePatchAlgorithm(self, Element, EffectVNode, observer, tracker);
        config.pack=[];
        config.place=-1;
        createPack(config, pack?.name, pack?.test, effect);
        config.pack[config.place].tuple=tracker.list;
      });
    }
    return {
      eff_pack:config.pack,
      eff_place:config.place,
      flush
    };
  }
  function conditionalBlockCompile(self, vNode, metrics, config, exp, isWidget){
    let [ hx_Element, NodeList, tagName, context, fall, value] = metrics ;
    const isRerender=self[$$$operands].initializedRender;
    const is_hyperscript=self[$$$core].map.is_hyperscript;
    const blockN=isWidget ? tagName : (!isString(vNode) ? ( isBlockTag(vNode.type) ? getBlockTagName(vNode.type) : vNode.type) : vNode);
    const elif=isWidget ? 'hx:else-if' : 'else-if';
    const els=isWidget ? 'hx:else' : 'else';
    const typeF = n=>isWidget ? n : '@'+n;
    if(isWidget ? vNode.prototype_ === ElseIf : blockN === elif){
      if(!conditionTagOrderCheck(self, config, elif, isWidget)) {
        config.props.status=false;
        config.props.shouldContinue=false;
        return false;
      }
      if(!config.props.shouldContinue) {
        return false;
      }
      let data, effect;
      config.props.prevBlock=config.props.activeBlock;
      config.props.activeBlock=typeF(elif);
      vNode.prototype_=ElseIf;
      const props={};
      Props_dilation_compile(vNode, self, hx_Element, {
        is_hyperscript
      }, props, config);
      vNode.props=props;
      const devOpts=vNode.compiler[ElseIf].test;
      if(isWidget && !isRerender){
        data=devOpts.value;
      }else if(!isWidget && !isRerender){
        effect=isEffect(devOpts) ? devOpts : _createEffectBase(()=>{
          return  _$runModelBind(self, exists(exp?.trim()) ? exp : "undefined", hx_Element);
        }, self);
        data=effect.runEffect().value;
        if(devOpts && !isRerender){
          reducer=config.reducers.pop();
          reducer?.follow(effect);
          effect.reducer=reducer
          vNode.compiler[ElseIf]={
            test:effect
          }
          config.reducer.add(effect);
        }
      }
      if(isRerender){
        data=vNode.compiler[ElseIf].test.runEffect().value;
      }
      const condition=unwrap(data) ? true : false;
      createPack(config, 'else-if', condition, effect);
      config.conditional_Index++;
      config.props.status=condition;
      config.props.shouldContinue=!condition;
      return true;
    }else if(isWidget ? vNode.prototype_ === Else : blockN === els ) {
      if(!conditionTagOrderCheck(self, config, els, isWidget)) {
        config.props.status=false;
        config.props.shouldContinue=false;
        return false;
      }
      if(!config.props.shouldContinue) {
        return false;
      }
      createPack(config, 'else', true);
      config.props.prevBlock=config.props.activeBlock;
      config.props.activeBlock=typeF(els);
      config.props.status=true;
      config.props.shouldContinue=false;
      return true;
    }
    if(!config.props.status) {
      return true;
    }
    installSuspense(vNode, getBoundary(hx_Element));
    let vNodes=config.suspenseFlag ? vNode : _HouxitCoreRenderer(vNode, self, true, hx_Element, fall, config);
    if(!isRerender && isWidget) {
      NodeList.add(vNodes);
    }
    config.pack[config.place].tuple.add(vNodes);
    return true;
  }
  function conditionTagOrderCheck(self, config, tag, isWidget){
    const prev=config.keywordLists[len(config.keywordLists)-1];
    const elif=isWidget ? 'hx:else-if' : 'else-if';
    const els=isWidget ? 'hx:else' : 'else';
    if(prev === els && (tag === els || tag === elif)){
      debugHandler(`An "${els}" ${isWidget ? 'widget' : 'block'} already existing\n\nUnresolved Error:: cannot precced with the "@${tag}" block`, self, true);
      return falseP;
    }
    config.keywordLists.push(tag);
    return true;
  }
  function blockElseIfPreprocessor(self, node, config, blockN, isWidget){
    const b=isWidget ? 'widget' : 'block';
    debugHandler(`The "${blockN}" ${b} cannot be used outside of the "${isWidget ? 'hx:if' : '@if'}" template ${b} scope`, self, true);
    return;
  }
  function instance_Has_Block(self, name ){
    name = name.startsWith("@") ? name.slice(1) : name;
    return _makeMap_(self[$$$register]?.blocks || {}, name ) || _wufHas_instance(self, name) ;
  }
  function normalize_Block(self, name){
    name = name.startsWith("@") ? name.slice(1) : name;
    return _makeMap_(self[$$$register].blocks, name) ? self[$$$register].blocks[name]: _wufHas_instance(self, name) ? normalizeWUFBuildScope(self, name) : null;
  }
  function blockElementsPreProcessors(self, vNode,  metrics, config){
    let children = vNode.children;
    config=assign({}, config);
    const [ hx_Element, NodeList, tagName, context, fall ] = metrics ;
    const blockN=getBlockTagName(tagName);
    let renderedNodes=[];
    if(isBuiltinBlocks(blockN)) {
      renderedNodes = controlBuiltInBlocks(self, vNode, blockN, metrics, config)
    }else if(instance_Has_Block(self, blockN)){
      renderedNodes=customBlocksTraverse(self, vNode, blockN, metrics, config);
    }else{
      debugHandler(`((Block Resolver Error))\n\n"@${blockN}" block is not a registered block element`, self, true);
      return;
    }
    for(const [ index, vnode ] of (!isArray(renderedNodes) ? (validateType(renderedNodes, [Set, Tuple]) ? [...arrSet(renderedNodes)] : [renderedNodes] ) : renderedNodes).entries()){
      if(vnode) {
        NodeList.add(vnode);
      }
    }
    return renderedNodes;
  }
  function customBlocksTraverse(self, node, blockN,  metrics, config){
    let [ hx_Element, NodeList, tagName, context, fall ] = metrics ;
    const children=node.rawChildren;
    const blockConfig={
      isVoid:false,
      compileExp:true
    }
    let block=normalize_Block(self, blockN );
    let blockCalllback;
    if(isPObject(block)){
      if(hasOwn(block, 'blockConfig')){
        if(!isPObject(block.blockConfig)){
          debugHandler(`"blockConfig" option of "${blockN}" custom block is not a valid type...\nExpects a plain object`, self, true);
        }else assign(blockConfig, block.blockConfig);
        iterator(block.blockConfig).each((value, key)=>{
          if(!_makeMap_('isVoid,compileExp', key)){
            debugHandler(`blockConfig option of "${key}" is not a recognised config option`, self, true);
            delete blockConfig[key];
          }
        });
      }else if(hasOwn(block, 'block')){
        blockCalllback=block.block;
      }
    }else{
      blockCalllback=block;
    }
    let enderRenderCount=0;
    const effect=_createEffectBase(()=>{
      return _$runModelBind(self, node.props.exp, hx_Element);
    }, self)
    const data=effectRunner(effect).value;
    function factoryRenderCallback(ctx={}){
      if(blockConfig.isVoid){
        return createRenderlessElement();
      }
      if(!isPObject(ctx)){
        debugHandler(`context data passed to factoryRender expects a plain object`, self);
      }
      installSuspense(children, getBoundary(hx_Element));
      return config.suspenseFlag ? arrayInverter(children) : _HouxitCoreRenderer(children, self, true, hx_Element, smartDextCtxMerging(fall||{}, ctx), config);
    }
    function endFactoryRender(vNode){
      if(!validateCollectionArgs(arguments, {
        count:1,
        validators:[Array, vNodeClass],
        name:'factoryRender()'
      }))
      enderRenderCount++;
      vNode=arrayInverter(vNode);
      installSuspense(vNode, getBoundary(hx_Element));
      return _HouxitCoreRenderer(vNode, self, true, hx_Element, smartDextCtxMerging(fall||{}, ctx), config);
    }
    function factoryRender(vNode){
      return endFactoryRender(vNode);
    }
    const template = factoryRenderCallback()
    const response=blockCalllback.call(self.__public_model__, arrayInverter(template), data, factoryRender);
    return arrayInverter(response);
  }
  function createKlassBoilerPlate(callback, ...args){
    return function factory(self, parent, hx_Element, fall, config){
      const boilerPlate=callback(...args);
      installSuspense(boilerPlate, getBoundary(hx_Element));
      return config.suspenseFlag ? boilerPlate : _HouxitCoreRenderer( boilerPlate, self, parent, hx_Element, fall, config);
    }
  }
  function __createTemplateClass_Parser(fn, name){
    if(!validateCollectionArgs(arguments, {
      min:1,
      max:2,
      validators:[Function, String],
      required:[true],
      name:"createTemplateClass"
    })) return pass;
    return class TemplateClass extends BaseTemplateClass{
      constructor(...args){
        super(fn);
        this[TemplateClassKey]=createKlassBoilerPlate(fn, ...args);
      }
    }
  }
  function createTemplateClass(klass, name){
    return __createTemplateClass_Parser(...arguments);
  }
  class TemplateClass extends BaseTemplateClass{
    constructor(...args){
      super(args[0]);
      this[TemplateClassKey]=createKlassBoilerPlate(this.class.bind(this), ...args)
    }
  }
  function _getNodeListResponse(NodeList, parent=false){
    NodeList=isSet(NodeList) ? arrSet(NodeList) : isTuple(NodeList) ? NodeList.list() : NodeList;
    if(isTrue(parent) && len(NodeList)) {
      const response = len(NodeList) > 1 ? NodeList : NodeList[0];
      return isString(response) ? new HouxitTextElement( response, parent) : response ;
    }else if(len(NodeList)) {
      return len(NodeList) > 1 ?  new HouxitFragmentElement( NodeList, parent) : ( isPrimitive(NodeList[0]) ? new  HouxitTextElement(isNull(NodeList[0]) ? "" :  NodeList[0], parent) : NodeList[0] ) ;
    }
    else return null ;
  }
  function normalizePreJSXFormat(strings, values){
    let boundJoin=[];
    const scripting_tag=(count)=> `hx:((__${count}__))`
    for(let [index, strs ] of strings.entries()){
      boundJoin.push(strs);
      if(hasOwn(values, index)) boundJoin.push(scripting_tag(index));
    }
    return __HouxitHTMLParser__(boundJoin.join(""), [], {
      JSXParser:{
        sources:values
      }
    });
  }
  function html( strings, ...values){
    return __EncodeJSXParser__(strings, values);
  }
  function __EncodeJSXParser__(strings, values){
    if(!isFunction(strings.reduce)){
      debugHandler(`html macro can only be called with backticks embeded directly to method name\n\n"html\`<templates>\`" instead of "html()"\nCheck html macro call`);
      return
    }
    if(len(values)) {
      return normalizePreJSXFormat(strings, values);
    }
    const html = strings.reduce(( acc, str, i) => {
      const value = !isNull( values[i]) ? values[i] : '';
      return acc + str + value;
    }, ''); 
    if(!isString(html)){
      debugHandler(`html parser macro expects strings values`);  
      return null;
    }
    return __HouxitHTMLParser__( html, [], {
      trim:true
    }, null);
  };
  function __HouxitMKDParser__(){
    
  }
  function MKDParser(mkd){
    
  }
  function markdown(mkd, ...values){
    if(!isString(mkd)){
      debugHandler(`markdown helper expects strings values`);
      return null
    }
  }
  function createCustomElement(options){
    return _createCustomElement.call({}, ...arguments);
  }
  function generateCustomNativeElementConstructor(){
    if(!inBrowserCompiler) return
    return class CustomNativeElement extends HTMLElement{
      constructor(){
        super();
      }
      compiler_options={}
      _set_compiler_options(...compiler_options){
        this.compiler_options=compiler_options;
        return ;
      }
    }
  }
  function generateCustomElementConstructor(name){
    name = ToPascalCase(name);
    if(!isValidIdentifier(name)){
      debugHandler(`unable to parse the customElements tag name\n\n
      seems to have been an invalid identifier`);
      return;
    }
    return Function('CustomNativeElement', `
      return class ${name} extends CustomNativeElement{
        constructor(){
          super(...arguments);
        }
      }
    `)(CustomNativeElement);
  }
  function _createCustomElement(opts){
    this.is_Custom_Node=true;
    const response=validateCollectionArgs(arguments, {
      count:1,
      validators:[[Function,Object]],
      name:"createCustomElement"
    });
    if(!response) {
      return;
    }
    const LifeCycleHooksList="onConnected,onDisconnected,onAdopted,onAttrChanged,plugin";
    const isMNEOwnOptions=opt=>_makeMap_(LifeCycleHooksList, opt);
    let Hooks={};
    const widget = defineWidget(opts)
    entries(widget).forEach(([ind, value])=>{
      if(_makeMap_(LifeCycleHooksList, ind)){
        if(!isFunction(value)){
          debugHandler(`LifeCycle callback error\n\n"${ind}" is a callback function, received an invalid type`);
          return;
        }
        if(ind != 'plugin'){
          Hooks[ind]=value;
        }
        delete opts[ind];
      }
    });
    const CustomNativeElement=generateCustomNativeElementConstructor();
    CustomNativeElement.prototype.disConnectedCallback=Hooks.disConnectedCallback || pass;
    CustomNativeElement.prototype.adoptedCallback=Hooks.adoptedCallback || pass;
    CustomNativeElement.prototype.attributeChangedCallback=Hooks.attributeChangedCallback || pass;
    CustomNativeElement.prototype.connectedCallback=connectedCallback;
    function connectedCallback(){
      let props={};
      if(len(keys(this.attributes))){
        for( const [key, attr ] of entries(this.attributes)) {
          const { name, value } = attr;
          props[name]=value
        }
      }
      // _set_compiler_options
      let [ vnode, self, hx_Element, siblings, IS_RENDERLESS, customElementsArgs ] = this.compiler_options;
      const shadow=this.attachShadow({ mode: 'open'});
      vnode=h(opts, assign(props, vnode.props|| {}), vnode.children);
      customElementsArgs.unshift();
      const createElement=()=> $compilerEngine(null, vnode, null, {}).$build;
      const template=createElement();
      shadow.appendChild(template.$element);
      const user_defined_callback=Hooks.connectedCallback || pass
      user_defined_callback.call(this, ...arguments);
    }
    CustomNativeElement.define=function define(name, inherit){
      return __define.call(this, ...arguments);
    }
    function __define(name, inherit){
      if(!validateCollectionArgs(arguments, {
        name:"customElements.define()",
        min:1,
        max:2,
        validators:[String, String]
      })) {
        return;
      }
      if(!isString(name) && isEmptyStr(name) && IS_VALID_TAGNAME(name)){
        debugHandler('Name positional argument passed to define is not a string or a valid name value\n\n or may have conflicted with native html/svg/mathml tags');
        return;
      }
      if(inherit && !isString(inherit) && !IS_HTML_TAG(inherit)){
        debugHandler(`problem with the inherit value, \n\n may not be a string value or a valid HTML tagName`);
        debugHandler(`CustomElement registration failed`);
        return;
      }
      const CustomElementsInstance=generateCustomElementConstructor(name);
      if(inBrowserCompiler) customElements.define(name, CustomElementsInstance, inherit ? { 
        extends:inherit
      } : {});
      return CustomElementsInstance;
    }
    return CustomNativeElement;
  };
  function _asyncWidget(callback, config){
    if(!validateCollectionArgs(arguments, {
      name:'asyncWidget',
      min:1,
      max:2,
      validators:[Function, Object]
    })) {
      return;
    }
    return new AsyncWidget(callback, config);
  }
  function asyncWidget(load, config){
    return _asyncWidget(...arguments)
  }
  function defineWidget(opts, config ){
    return _defineWidget(...arguments)
  }
  function _defineWidget(opts, options){
    if(!validHouxitWidget(opts)){
      debugHandler(`widget transform Error\n\n 
        invalid widget instance\n/... at /././. at`);
      return;
    }else if(len(arguments) > 2){
      debugHandler(`Parameter Error\n\nmax-2 argument required\n ${len(arguments)} given`);
      return;
    }else if(isPObject(opts) || isFunction(opts)){
      if(isArrowFunction(opts) && null) $warn(`Houxit style guides recommend against the use of Arrow functions as widget build instances.\n\n
      "<${opts.name}>" widget is an Arrow functions widget type`);
      const type=hydrate_widget_type(opts);
      let widget= new Object();
      if(isPFunction(opts)) {
        widget.build=opts;
      }else if(isPObject(opts)){
        for( const [ key, value ] of entries(opts)){
          if(!hasProp(widget, key)) {
            widget[key]=value;
          }
        }
      }else if(isClass(opts)) {
        widget=new opts();
      }
      if(options) {
        for( const [ key, value ] of entries(options)){
          if(!hasProp(widget, key ) && !isHouxitProp(key)) widget[key]=value;
        }
      }
      if(!hasOwn(widget, widgetTypeKey)) {
        widget[widgetTypeKey]=type;
      }
      return widget;
    }
  }
  function hydrate_widget_type(opts){
    let type=isClass(opts) ? 'class-based' : isPFunction(opts) ? 'function-based' : 'object-based' ;
    return type;
  }
  function initialBuildTransform(options, propsOrChildren, childrenOrProps ){
    if(isVNodeClass(options)) {
      propsOrChildren = options.props;
      childrenOrProps = options.children;
      options = options.type;
    }
    if(!validHouxitWidget(options)){
      debugHandler(`initBuild Error\n\nCannot compile value as a Houxit widget\nMaybe an invalid houxit widget value`);
      return  ;
    }else if(isHouxitBuiltinSymbolWidget(options)){
      debugHandler(`The built houxit widget cannot be used in an initBuild widget App`);
      return ;
    }
    const widget = createVNodeClass(...values(propsAndChildrenGetter( ...arguments )));
    widget[initBuildInstaceKey]=true;
    return widget;
  }
  function _initBuild(options, props, children){
    const widget = initialBuildTransform(...arguments);
    if(!isVNodeClass(widget)) {
      return undefined;
    }
    return new HouxitBuild( widget );
  }
  function initBuild(options, propsOrChildren, childrenOrProps){
    return _initBuild(...arguments);
  }
  function createSSRStreamHack(vnodePlate, ssrConfig){
     vnodePlate= initialBuildTransform(...vnodePlate);
     vnodePlate.filesFilter.useSSRCompiler=true;
    return vnodePlate;
  }
  function _renderToStringCompiler(build, config){
    if(!isSSRCompiler(build)){
      debugHandler(`"renderToString" macro was called on a non SSR renderer build...\n\nplease check, you may have used "initBuild" app initializer instead of the "initSSRBuild"`);
      return undefined;
    }
    return new Promise((resolve)=>{
      build.mount(null, config);
      resolve(vnodesConversionPipeline(build, build.$build.$element));
    });
  }
  function renderToString(build, config){
    return _renderToStringCompiler(...arguments);
  }
  function vnodesConversionPipeline(self, vnodes){
    let html="";
    vnodes=arrayInverter(vnodes);
    const isHy=isHydration(self);
    for(let [index, node] of vnodes.entries()){
      if((isHy ? isSSRText(node) : isString(node))) {
        html += isHy ? node.content : node;
      }else if(isVNodeClass(node)){
        let src="<"+node.type;
        const ctx={};
        if(node.props) {
          src+=compileSSRProps(node.props, ctx);
        }
        src+=">";
        if(!IS_HTML_VOID_TAG(node.type)) {
          if(len(ctx)){
            if(ctx.innerHTML) {
              src+=ctx.innerHTML;
            }else if(ctx.innerText) {
              src+=ctx.innerText;
            }
          }else if(node.children) {
            src+=vnodesConversionPipeline(self, node.children);
          }
          src += "</"+node.type+">";
        }
        html+=src;
      }else if((isHy ? isSSRFragment(node) : isCollection(node))) {
        html += vnodesConversionPipeline(self, arrSet(isHy ? node.fragment : node));
      }
    }
    return html;
  }
  function compileSSRProps(props, ctx){
    let src="";
    for(let [ key, value] of entries(props)){
      if(key === 'class') {
        src+=' class="'+value.list().join(" ")+'"';
      }else if(key === 'style') {
        src+=' style="';
        for(let [ name, style] of entries(value)){
          src+=name+':'+style+';';
        }
        src+='"';
      }else if(key === 'innerHTML' || key === 'innerText') {
        ctx[key]=value.trim();
      }else {
        src+=' '+key+( value.trim() ? '="'+value+'"' : '');
      }
    }
    return src;
  }
  function renderToStreamPipe(){
    
  }
  function _createInitSSRBuild_(options, props, children){
    const vNode=createSSRStreamHack( arguments, {
      type:'stream',
      render:None
    });
    if(!isVNodeClass(vNode)) {
      return undefined;
    }
    return new HouxitBuild( vNode );
  }
  function initSSRBuild(options, propsOrChildren, childrenOrProps){
    return _createInitSSRBuild_(options, propsOrChildren, childrenOrProps);
  }
  function initAsyncBuild(options, propsOrChildren, childrenOrProps){
    
  }
  function boilerPlate(){
    
  }
  function defineElementOptionsValidator(options){
    const optionsName="type,props,children";
    if(!isPObject(options)){ 
      debugHandler(`createVNode Error:\n expects an 'object' at......\n\nparameter 1`);
      return false;
    }else if(len(options) > 3){
      debugHandler(`Options Error\n\n createVNode does not accept more than 3 options props arguments`);
      return false
    }else if(!options.type && !validateType(options.type, [String, Object, Function ] )){
      debugHandler(`Unexpected value passed to type in createVNode\n\n"${getType(options.type)}" is an invalid type value to type option`);
      debugHandler(`NOTE : The "type" option is required`);
      return false;
    }
    for(let [ name, opt ] of entries(options)){
      if(!_makeMap_(optionsName, name)) {
        debugHandler(`${name} is not a valid createVNode options value`);
        return false;
      }else if(name === 'props' && opt && !isPObject(opt)){
        debugHandler(`Element props property expects an object value\n\nUnexpected "${getType(opt)}" value`);
        return false;
      }else if(name  === 'children' && exists(opt) && !isChildrenNode(opt)){
        debugHandler(`Element children property expects a valid houxit child node instance value\n\nUnexpected "${getType(opt)}" value`);
        return false;
      }
    }
    return true;
  }
  function createVNodeClass(type, props, children){
    return new vNodeClass(...arguments);
  }
  function _createVNode_ELEMENT(options){
    if(!defineElementOptionsValidator(options)) {
      return undefined;
    }
    let { type , props , children } = options ;
    const vNode= createVNodeClass( type, props, children ) ;
    vNode.is_hyperscript=true;
    if(validHouxitWidget(type)) {
      vNode.GeneticProvider=type;
      vNode.prototype_=type;
    }
    return vNode;
  }
  function createVNode(options){
    return _createVNode_ELEMENT(options);
  }
  function TranslateWidgetPropsAndChildren(type, props, children){
    if(validHouxitWidget(type)){
      children = arrayInverter(children);
    }
  }
  const RENDER_ELEMENTS = createObj('RENDER_ELEMENTS');
  function transform_Elements_build(){
    generate_native_elements_(HTML_TAGS.split(','));
    generate_native_elements_(SVG_TAGS.split(','));
    // generate_native_elements_(HTML_DEPRECATED_TAGS.split(','));
    // generate_native_elements_(SVG_DEPRECATED_TAGS.split(','));
    generate_native_elements_(MATHML_TAGS.split(','));
    for(const [ name, widget ] of entries(BUILT_IN_WIDGETS)){
      map_registration(name, function(propsOrChildren, childrenOrProps){
        return h(widget, propsOrChildren, childrenOrProps)
      });
    }
  }
  function generate_native_elements_(el_arr){
    for(const name of el_arr.values()){
      map_registration(name, function(propsOrChildren, childrenOrProps){
        return h(name.trim(), propsOrChildren, childrenOrProps)
      });
    }
  }
  function map_registration(name, value){
    name=IS_VALID_TAGNAME(name) && name.includes('-') ? toCamelCase(name) : name.startsWith('hx:') ? ToPascalCase(name.slice(3)) :name;
    value = Function('element', `
      return function _${ name.trim() }(propsOrChildren, childrenOrProps){
       return element(...arguments)
      }
    `)(value);
    define(RENDER_ELEMENTS, name, {
      value ,
      enumerable
    });
  }
  
  console.info( devInfo ) ; //dev
  
  function perfomSpeedDiffing(start, end, diffing){
    
  }
  function _perfomanceTracker(callback){
    const startTime=traceBack();
    callback();
    const endTime=traceBack();
    return perfomSpeedDiffing(startTime, endTime, createObj('Performance', {
      h:0,
      m:0,
      s:0,
      ms:0
    }));
  }
  function resolveHooks(xhr, opts){
  
  }
  transform_Elements_build();
  _$compiler_engine_hydrator();

export {
  createVNode , Suspense , isToken , scaffold , get_version , h , shallowStream , None , useBindDriver , Else , enSlot , If , For , escapeReverseDecoder , HouxitCompilerSetup , isReactiveToken , ElseIf , trackEffectDeps , initBuild , Memo , postUpdate , initSSRBuild , log ,//dev
  readonlyStream , preMount , Portal , postDestroy , Build , Self , asyncWidget , preUpdate , shallowReadonlyStream , isShallow , useRef , Motion , HTMLParser , Provider , postMount , postBuild , useReceiver , unToken , onSlotRender , onSlotEffect , useTransmit , defineConfig , useStyleSheet , useContext , defineSlots , defineParams , useAdapter , useModel , createHouxitElement , isReadonly , preDestroy , markdown , MKDParser , validateType , Any , Arguments , mergeProps , _getNodeListResponse , tick , generateUUID , boilerPlate , Type , defineWidget , isShallowStream , onCatch ,//dev
  createEffectFrame,
  onEffect , onTracked , html , Class , readonly , escapeDecoder , resolve , observe , effectHook , generateTemplateElement , memMove , useOptions , defineSignals , Widget , len , markRaw , isRaw , validateProps , toReadonly , toShallow , shallow , validateCollection , isStream , useReadonlyBypasser , stream , token , createNativeElement , scopeEffectHook , scopeObserve , computed , read , factoryToken , isNativeElement , createWidgetElement , tokenGENERATOR , cubicBezier , RENDER_ELEMENTS , toToken , to_kebab_case , Token , ToPascalCase , toCamelCase , createTextElement , renderToString , cloneVElement , createCustomElement , _createFragment , debugHandler , //dev
  Fragment , agent , Exception , Tuple , _GenerateRoot , traceBack , version , raise ,//dev
  deepEqualityCheck , isShallowReadonly , isShallowReadonlyStream , toReadonlyStream , toShallowStream , toShallowReadonlyStream , pushEffect , HTMLPropsParser , animate , transite , PRIVATE_PROPERTY_KEY, easings , createEasing , TemplateClass , createTemplateClass , isReadonlyStream , __WUFClass__ , isComputed , useAgent }
  