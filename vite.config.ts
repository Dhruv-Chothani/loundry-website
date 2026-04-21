import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { TanStackRouterPlugin } from "@tanstack/router-plugin";

export default defineConfig({
  plugins: [
    TanStackRouterPlugin(),
    viteReact(),
    tailwindcss(),
    viteTsconfigPaths(),
  ],
  build: {
    target: "esnext",
  },
});
