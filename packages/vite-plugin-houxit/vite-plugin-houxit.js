import compileSource from '@houxit/compiler';

export default function houxit() {
  return {
    name: "@houxit/vite-plugin-houxit",
    enforce:'pre',
    transform(code, id) {
      if (!id.endsWith(".houxit")) return;
      // Compile the .houxit file 
      return compileSource(code, id);
    },
    
  };
}