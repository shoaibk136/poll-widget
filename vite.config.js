import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom", // Needed for React testing
    setupFiles: "./setupTests.js",
    transformMode: {
      web: [/.[tj]sx?$/], // Ensure .jsx files are transformed
    },
  },
});
