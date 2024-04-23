import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/demo-tailwindcss/",
  plugins: [vue()],
});
