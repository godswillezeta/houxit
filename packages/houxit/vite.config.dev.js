
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    target: "esnext",
    lib: {
      entry: "./src/index.js",
      name: "Houxit",
      formats: ["es", "cjs", "iife"],
      fileName(format) {
        switch (format) {
          case "es":
            return "houxit.esm.js";
          case "cjs":
            return "houxit.cjs";
          case "iife":
            return "houxit.global.js";
        }
      }
    },

    outDir: "dist",
    emptyOutDir: false,
    sourcemap: true
  }
});