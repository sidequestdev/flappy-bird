import path from "node:path";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

const config = defineConfig({
  resolve: {
    // https://github.com/vitejs/vite/issues/88#issuecomment-784441588
    alias: {
      "#/assets": path.resolve(__dirname, "./assets"),
      "#": path.resolve(__dirname, "src"),
    },
  },
  build: {
    assetsInlineLimit: 100_000,
    target: "chrome103",
  },
  plugins: [viteSingleFile()],
});

export default config;
