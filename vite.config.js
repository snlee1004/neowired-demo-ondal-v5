import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // 큰 mp4를 watch하면 Windows에서 EBUSY로 서버가 죽는다
  server: {
    watch: {
      ignored: ["**/public/videos/**", "**/image/**"],
    },
  },
});
