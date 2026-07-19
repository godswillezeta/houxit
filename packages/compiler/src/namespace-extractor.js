const declareSeparatorRegex = /(,[ ]*([\w$]+) *=)+/mg;
const allImportStatementsRegex=/(import\s+(.*?)\s+from\s+('|"|`)(.*?)('|"|`))/gm;
const stringsMonitorRegex=/"(.*?)"|'(.*?)'|`+(.*?\s)`+/g
const assignmentRegex=/(function|var|let|const|class)[ ]+([\w$]+)\W/g;
const multiAssignmentRegex=/(function|var|let|const|class)[ ]+([\w$]+[ ]*,[ ]*[\w$]+)\W/g;
const destrutureAssignmentRegex=/(var|let|const)\s+(\{|\[)([\w$\s\,]+)*(\]|\})\s*\=/gm;
const importRegex=/import\s+((\{([\w$\s\,]+)*\})*|([\w$\,\s]+)*)*\s+from/gm;
const destructureImportRegex=/import\s+((([\w$]+)?\s*\,\s*)*(\{([\w$\s\,]+)*\})*)\s+from/gm;
const undeclaredAssignmentRegex=/(([\w$]+)[ ]*=[ ]*)/g

function NamespaceVariantAdapter(source, useUndeclaredProps= false){
  const NamespaceVariables=new Set();
  const NamespaceMap=[];
  source = source.replace(stringsMonitorRegex, ()=> "");
  
  function assignToNameSpace(declare, prop){
    NamespaceVariables.add([ declare, prop]);
    NamespaceMap.push(prop);
  }
  function PropsReducerVariant(sign, props){
    const reduceProps=props.split(',');
      for (let VarName of reduceProps.values()){
      VarName=VarName.trim();
      assignToNameSpace(sign, VarName.trim());
    }
  }
  let currentDeclare=null;
  source=source.replace(multiAssignmentRegex, (match, sign, props)=>{
    PropsReducerVariant(sign, props);
    return "";
  }).replace(assignmentRegex, (match, sign, prop, logos)=>{
    sign=sign.trim();
    if(/(const|var|let)/.test(sign) && sign !== currentDeclare){
      currentDeclare = sign;
    }
    currentDeclare = null;
    assignToNameSpace(sign, prop.trim());
    return ""
  })
  source=source.replace(destrutureAssignmentRegex, (match, sign, logos, props, trety, hipe)=>{
    PropsReducerVariant(sign, props);
    return ""
  }).replace(destructureImportRegex, (match, sign, tags, logos, end, props )=>{
    if(logos) assignToNameSpace('import', logos.trim());
    PropsReducerVariant('import', props);
    return ""
  }).replace(importRegex, (match, sign, pattern, props )=>{
    if(!pattern) assignToNameSpace('import', sign.trim());
    else PropsReducerVariant('import', props);
    return "";
  }).replace(declareSeparatorRegex, (match, state, prop)=>{
    assignToNameSpace('let', prop);
    return ""
  })
  if(useUndeclaredProps) source.replace(undeclaredAssignmentRegex, (match, state, prop)=>{
    assignToNameSpace('var', prop);
    return ""
  });
  return [ NamespaceVariables, NamespaceMap ] ;
}

function namespaceGenerator(NamespaceVariables, NamespaceMap) {
  // Generate the variable collection code
  return `const __variables__ = {
    __env__:false
  };
${NamespaceMap.map(varName => `
try {
  __variables__['${varName}'] = ${varName};
} catch (err) {}
`).join('')}
`;
}
export default function detector(source, state={}, GenerateStr=false){
  let [ NamespaceVariables, NamespaceMap ] = NamespaceVariantAdapter(source, true);
  
  let str=`${source}\n${namespaceGenerator(NamespaceVariables, NamespaceMap)}`;
  let keyNames_="";
  Object.keys(state).map(service=> keyNames_=keyNames_+"'"+service+"',");
  let sourceParser=Function("__src__", `
    return Function(${keyNames_} __src__);
  `);
  if(GenerateStr) return {
    source:str,
    keys:keyNames_
  }
  sourceParser=sourceParser(str);
  let object;
  try {
    object=sourceParser(...Object.values(state))
  }catch(err){
    console.warn(err);
  }
  return object
}

export function importExtractor(src){
  let str=[];
  return [ src.replace(allImportStatementsRegex, (match)=>{
    str.push(match)
    return "";
  }), str.join(`\n`)];
}