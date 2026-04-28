import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return
          }

          if (id.includes("react-router-dom")) {
            return "router"
          }

          if (
            id.includes("framer-motion") ||
            id.includes("motion-dom") ||
            id.includes("motion-utils")
          ) {
            return "motion"
          }

          if (
            id.includes("@mui/") ||
            id.includes("@emotion/") ||
            id.includes("react-share")
          ) {
            return "social-ui"
          }

          if (id.includes("@radix-ui/")) {
            return "radix"
          }

          if (
            id.includes("react") ||
            id.includes("react-dom") ||
            id.includes("scheduler")
          ) {
            return "react-vendor"
          }
        },
      },
    },
  },
})
