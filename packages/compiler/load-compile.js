
import { log, HTMLParser } from 'houxit';
import detector from './src/namespace-extractor.js';

export default function compile(source, id){
  const src=HTMLParser(source);
  const blocks={
    script:undefined,
    
  }
  // log(blocks)
  log(source)
  return {
    code:`
    import App from '/MyApp.houxit'
    
    export default{
      widgets:App
    }`,
    map:null
  }
}