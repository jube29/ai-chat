import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // "@/..." -> client/src/... (mirrors tsconfig paths so Vite resolves it too)
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      // Reverse-proxy /auth/* to the Express server so the browser sees a
      // single origin (:5173) — no CORS, and the SameSite=Strict cookie rides
      // along for free. Mirrors a production reverse proxy.
      "/auth": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
});
