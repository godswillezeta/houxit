
import compile_loader from './src/resolve-wuf.js'

export default function compile(source, id){
  
  return {
    code:compile_loader(source, id),
    map:null
  }
}