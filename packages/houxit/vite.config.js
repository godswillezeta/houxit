import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    minify: "terser",
    target: "esnext",
    terserOptions: {
      compress: {
        pure_funcs: ["debugHandler",'$warn','console','log','warn','Error'],
      },
    },
    lib: {
      entry: "./src/index.js",
      name: "Houxit",
      formats: ["es", "cjs", "iife"],
      fileName(format) {
        switch (format) {
          case "es":
            return "houxit.browser.esm.js";
          case "cjs":
            return "index.cjs";
          case "iife":
            return "houxit.global.js";
        }
      }
    },
    outDir: "dist",
    emptyOutDir: true,
    sourcemap: true
  },
  
});
