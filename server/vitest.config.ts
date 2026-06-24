import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
  // Mirror tsconfig's "shared/*" path alias — Vite doesn't read tsconfig paths.
  resolve: {
    alias: {
      shared: fileURLToPath(new URL("../shared", import.meta.url)),
    },
  },
  test: {
    // Set before any module loads, so db/index.ts opens an in-memory SQLite
    // instead of the real ./data/app.db. NODE_ENV=test keeps the cookie's
    // Secure flag off (so Supertest over http works).
    env: {
      DB_FILE: ":memory:",
      NODE_ENV: "test",
    },
  },
});
