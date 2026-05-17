import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: [
      {
        // matches @/ (local Next.js alias) but NOT @scope/package imports
        find: /^@\//,
        replacement: resolve(process.cwd(), "apps/www") + "/",
      },
    ],
  },
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts", "tests/**/*.test.tsx", "registry/**/*.test.tsx"],
    setupFiles: ["./vitest.setup.ts"],
  },
});
