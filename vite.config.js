import { resolve } from "path";
import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import packMyCss from "vite-plugin-css-injected-by-js";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/library.js"),
      name: "vue-progress-icon",
      fileName: "vue-progress-icon",
    },
  },
  rollupOptions: {
    external: ["vue"],
    output: {
      globals: {
        vue: "Vue",
      },
    },
  },
  plugins: [vue(), packMyCss()],
});
