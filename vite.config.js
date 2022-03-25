import { defineConfig, resolveConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolveConfig(__dirname, "index.html"),
        nested: resolveConfig(__dirname, "/index.html"),
      },
    },
  },
});
