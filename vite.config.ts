import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import viteTsconfigPaths from "vite-tsconfig-paths";
import { tanStackStart } from "@tanstack/react-start/vite";

export default defineConfig({
  plugins: [
    tanStackStart(),
    viteReact(),
    tailwindcss(),
    viteTsconfigPaths(),
  ],
  build: {
    target: "esnext",
  },
  tsr: {
    appDirectory: "src",
    routesDirectory: "src/routes",
    generatedRouteTree: "src/routeTree.gen.ts",
  },
});
