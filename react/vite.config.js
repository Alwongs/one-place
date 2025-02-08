import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"), // Указываем базовую директорию
            "@pages": path.resolve(__dirname, "src/pages"),
            "@layouts": path.resolve(__dirname, "src/layouts"),
            "@components": path.resolve(__dirname, "src/components"),
            "@api": path.resolve(__dirname, "src/redux/api"),
            "@reducers": path.resolve(__dirname, "src/redux/reducers"),
            "@redux-utils": path.resolve(__dirname, "src/redux/utils"),
            "@functions": path.resolve(__dirname, "src/functions"),
            "@router": path.resolve(__dirname, "src/router"),
        },
    }, 
})
