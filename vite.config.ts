// /// <reference types="node" />

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: process.env.NODE_ENV === "production" ? "/alanyehliyuan.github.io/" : "/",
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/alanyehliyuan.github.io/", // 這行要確認！
});
