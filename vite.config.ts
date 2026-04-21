import { defineConfig } from "@tanstack/react-start/config";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  vite: {
    plugins: [
      viteReact(),
      tailwindcss(),
      viteTsconfigPaths(),
    ],
    build: {
      target: "esnext",
    },
  },
  tsr: {
    appDirectory: "src",
    routesDirectory: "src/routes",
    generatedRouteTree: "src/routeTree.gen.ts",
  },
});
