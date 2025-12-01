import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path"; //tambahan

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // base: "/coba2/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // ✅ alias "@/..." mengarah ke folder src
    },
  },
});
