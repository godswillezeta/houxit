import compileSource from '@houxit/compiler';
import path from "node:path";

export default function houxit() {
  return {
    name: "@houxit/vite-plugin-houxit",
    enforce:'pre',
    transform(code, id) {
      if (!id.endsWith(".houxit")) return;
      // Compile the .houxit file 
      return compileSource(code, id);
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