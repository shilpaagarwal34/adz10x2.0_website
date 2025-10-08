import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // 👈 allow access from LAN
    port: 7000,
    allowedHosts: ["adz10x.com"],
  },
  optimizeDeps: {
    exclude: ["@reduxjs/toolkit"],
  },
  build: {
    outDir: "dist", // output folder for build
  },
});
