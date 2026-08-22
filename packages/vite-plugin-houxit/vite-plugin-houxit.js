import compileSource from '@houxit/compiler';
import transform from '@houxit/houxit-jsx';
import path from "node:path";

export default function houxit() {
  return {
    name: "@houxit/vite-plugin-houxit",
    enforce:'pre',
    transform(code, id) {
      if (id.endsWith(".houxit") ) return compileSource(code, id);
      // Compile the .houxit file 
      else if(id.endsWith(".jsx") || id.endsWith(".tsx")) return {
        code:transform(code, id),
        map:null
      }
      return ;
    },
    resolveId(source, importer) {
      // Only handle extensionless relative imports
      if ( importer && (source.startsWith("./") || source.startsWith("../")) && !path.extname(source) ) {
        return path.resolve(path.dirname(importer), source + ".houxit");
      }
      return null;
    }
  };
}