import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  build: {
    minify: "terser",
    target: "esnext",
    terserOptions: {
      compress: {
        drop_console:true,
        pure_funcs: ["debugHandler",'$warn'],
        passes: 5,
        drop_console: true,
        drop_debugger: true,
        pure_getters: true,
        unsafe_arrows: true,
        unsafe_methods: true,
        hoist_funs: true,
        hoist_vars: false,
        dead_code: true,
        unused: true,
        module: true,
        evaluate: true,
        reduce_vars:true,
        collapse_vars: true,
        booleans: true,
        if_return: true,
        sequences: true,
        inline: 3,
        join_vars: true,
        conditionals: true,
        
      },
      mangle: {
        toplevel: true
      },
      format: {
        comments: false
      },
    },
    lib: {
      entry: "./src/index.js",
      name: "Houxit",
      formats: ["es", "cjs", "iife"],
      fileName(format) {
        switch (format) {
          case "es":
            return "houxit.esm.min.js";
          case "cjs":
            return "houxit.min.cjs";
          case "iife":
            return "houxit.global.min.js";
        }
      }
    },
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: false
  },
  
});
