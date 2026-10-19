import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

// Deployed at https://cbd.digiskills.live (root of the subdomain), so base "/" is correct.
// `VITE_BASE` lets CI override for alternative hosting if ever needed.
const base = process.env.VITE_BASE ?? "/";

export default defineConfig({
  base,
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1024,
  },
  server: {
    port: 5173,
    host: true,
  },
});
