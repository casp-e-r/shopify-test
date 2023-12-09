// vite.config.ts
import { defineConfig } from "file:///home/aswin/Desktop/StoreTools/Shopify-App-Starter/node_modules/vite/dist/node/index.js";
import { dirname, resolve, join } from "path";
import { fileURLToPath } from "url";
import react from "file:///home/aswin/Desktop/StoreTools/Shopify-App-Starter/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { visualizer } from "file:///home/aswin/Desktop/StoreTools/Shopify-App-Starter/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
import { optimizeLodashImports } from "file:///home/aswin/Desktop/StoreTools/Shopify-App-Starter/node_modules/@optimize-lodash/rollup-plugin/dist/index.mjs";
var __vite_injected_original_dirname = "/home/aswin/Desktop/StoreTools/Shopify-App-Starter/client";
var __vite_injected_original_import_meta_url = "file:///home/aswin/Desktop/StoreTools/Shopify-App-Starter/client/vite.config.ts";
if (process.env.npm_lifecycle_event === "build" && !process.env.CI && !process.env.SHOPIFY_API_KEY) {
  console.warn(
    "\nBuilding the frontend app without an API key. The frontend build will not run without an API key. Set the SHOPIFY_API_KEY environment variable when running the build command.\n"
  );
}
var proxyOptions = {
  target: `http://127.0.0.1:${process.env.BACKEND_PORT}`,
  changeOrigin: false,
  secure: true,
  ws: false
};
var host = process.env.HOST ? process.env.HOST.replace(/https?:\/\//, "") : "localhost";
var hmrConfig;
if (host === "localhost") {
  hmrConfig = {
    protocol: "ws",
    host: "localhost",
    port: 64999,
    clientPort: 64999
  };
} else {
  hmrConfig = {
    protocol: "wss",
    host,
    port: parseInt(process.env.FRONTEND_PORT) || 4e3,
    clientPort: 443
  };
}
var vite_config_default = defineConfig({
  root: join(dirname(fileURLToPath(__vite_injected_original_import_meta_url)), "src"),
  build: {
    outDir: "../dist"
  },
  plugins: [
    react(),
    optimizeLodashImports({ useLodashEs: true }),
    visualizer({
      emitFile: true,
      filename: "stats.html"
    })
  ],
  define: {
    "process.env.SHOPIFY_API_KEY": JSON.stringify(process.env.SHOPIFY_API_KEY)
  },
  resolve: {
    preserveSymlinks: true,
    alias: {
      "@": resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    host: "localhost",
    port: parseInt(process.env.FRONTEND_PORT) || 4e3,
    hmr: hmrConfig,
    proxy: {
      "^/(\\?.*)?$": proxyOptions,
      "^/api(/|(\\?.*)?$)": proxyOptions,
      "^/tools(/|(\\?.*)?$)": proxyOptions
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9hc3dpbi9EZXNrdG9wL1N0b3JlVG9vbHMvU2hvcGlmeS1BcHAtU3RhcnRlci9jbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL2Fzd2luL0Rlc2t0b3AvU3RvcmVUb29scy9TaG9waWZ5LUFwcC1TdGFydGVyL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9hc3dpbi9EZXNrdG9wL1N0b3JlVG9vbHMvU2hvcGlmeS1BcHAtU3RhcnRlci9jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgZGlybmFtZSwgcmVzb2x2ZSwgam9pbiB9IGZyb20gJ3BhdGgnXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHsgdmlzdWFsaXplciB9IGZyb20gJ3JvbGx1cC1wbHVnaW4tdmlzdWFsaXplcidcbmltcG9ydCB7IG9wdGltaXplTG9kYXNoSW1wb3J0cyB9IGZyb20gJ0BvcHRpbWl6ZS1sb2Rhc2gvcm9sbHVwLXBsdWdpbidcblxuaWYgKFxuICBwcm9jZXNzLmVudi5ucG1fbGlmZWN5Y2xlX2V2ZW50ID09PSAnYnVpbGQnICYmXG4gICFwcm9jZXNzLmVudi5DSSAmJlxuICAhcHJvY2Vzcy5lbnYuU0hPUElGWV9BUElfS0VZXG4pIHtcbiAgY29uc29sZS53YXJuKFxuICAgICdcXG5CdWlsZGluZyB0aGUgZnJvbnRlbmQgYXBwIHdpdGhvdXQgYW4gQVBJIGtleS4gVGhlIGZyb250ZW5kIGJ1aWxkIHdpbGwgbm90IHJ1biB3aXRob3V0IGFuIEFQSSBrZXkuIFNldCB0aGUgU0hPUElGWV9BUElfS0VZIGVudmlyb25tZW50IHZhcmlhYmxlIHdoZW4gcnVubmluZyB0aGUgYnVpbGQgY29tbWFuZC5cXG4nXG4gIClcbn1cblxuY29uc3QgcHJveHlPcHRpb25zID0ge1xuICB0YXJnZXQ6IGBodHRwOi8vMTI3LjAuMC4xOiR7cHJvY2Vzcy5lbnYuQkFDS0VORF9QT1JUfWAsXG4gIGNoYW5nZU9yaWdpbjogZmFsc2UsXG4gIHNlY3VyZTogdHJ1ZSxcbiAgd3M6IGZhbHNlLFxufVxuXG5jb25zdCBob3N0ID0gcHJvY2Vzcy5lbnYuSE9TVFxuICA/IHByb2Nlc3MuZW52LkhPU1QucmVwbGFjZSgvaHR0cHM/OlxcL1xcLy8sICcnKVxuICA6ICdsb2NhbGhvc3QnXG5cbmxldCBobXJDb25maWdcbmlmIChob3N0ID09PSAnbG9jYWxob3N0Jykge1xuICBobXJDb25maWcgPSB7XG4gICAgcHJvdG9jb2w6ICd3cycsXG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgcG9ydDogNjQ5OTksXG4gICAgY2xpZW50UG9ydDogNjQ5OTksXG4gIH1cbn0gZWxzZSB7XG4gIGhtckNvbmZpZyA9IHtcbiAgICBwcm90b2NvbDogJ3dzcycsXG4gICAgaG9zdDogaG9zdCxcbiAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5GUk9OVEVORF9QT1JUIGFzIHN0cmluZykgfHwgNDAwMCxcbiAgICBjbGllbnRQb3J0OiA0NDMsXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdDogam9pbihkaXJuYW1lKGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKSksICdzcmMnKSxcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuLi9kaXN0JyxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgb3B0aW1pemVMb2Rhc2hJbXBvcnRzKHsgdXNlTG9kYXNoRXM6IHRydWUgfSksXG4gICAgdmlzdWFsaXplcih7XG4gICAgICBlbWl0RmlsZTogdHJ1ZSxcbiAgICAgIGZpbGVuYW1lOiAnc3RhdHMuaHRtbCcsXG4gICAgfSksXG4gIF0sXG4gIGRlZmluZToge1xuICAgICdwcm9jZXNzLmVudi5TSE9QSUZZX0FQSV9LRVknOiBKU09OLnN0cmluZ2lmeShwcm9jZXNzLmVudi5TSE9QSUZZX0FQSV9LRVkpLFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgcHJlc2VydmVTeW1saW5rczogdHJ1ZSxcbiAgICBhbGlhczoge1xuICAgICAgJ0AnOiByZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgaG9zdDogJ2xvY2FsaG9zdCcsXG4gICAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuRlJPTlRFTkRfUE9SVCBhcyBzdHJpbmcpIHx8IDQwMDAsXG4gICAgaG1yOiBobXJDb25maWcsXG4gICAgcHJveHk6IHtcbiAgICAgICdeLyhcXFxcPy4qKT8kJzogcHJveHlPcHRpb25zLFxuICAgICAgJ14vYXBpKC98KFxcXFw/LiopPyQpJzogcHJveHlPcHRpb25zLFxuICAgICAgJ14vdG9vbHMoL3woXFxcXD8uKik/JCknOiBwcm94eU9wdGlvbnMsXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZWLFNBQVMsb0JBQW9CO0FBQzFYLFNBQVMsU0FBUyxTQUFTLFlBQVk7QUFDdkMsU0FBUyxxQkFBcUI7QUFDOUIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsNkJBQTZCO0FBTHRDLElBQU0sbUNBQW1DO0FBQWlMLElBQU0sMkNBQTJDO0FBTzNRLElBQ0UsUUFBUSxJQUFJLHdCQUF3QixXQUNwQyxDQUFDLFFBQVEsSUFBSSxNQUNiLENBQUMsUUFBUSxJQUFJLGlCQUNiO0FBQ0EsVUFBUTtBQUFBLElBQ047QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFNLGVBQWU7QUFBQSxFQUNuQixRQUFRLG9CQUFvQixRQUFRLElBQUksWUFBWTtBQUFBLEVBQ3BELGNBQWM7QUFBQSxFQUNkLFFBQVE7QUFBQSxFQUNSLElBQUk7QUFDTjtBQUVBLElBQU0sT0FBTyxRQUFRLElBQUksT0FDckIsUUFBUSxJQUFJLEtBQUssUUFBUSxlQUFlLEVBQUUsSUFDMUM7QUFFSixJQUFJO0FBQ0osSUFBSSxTQUFTLGFBQWE7QUFDeEIsY0FBWTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sWUFBWTtBQUFBLEVBQ2Q7QUFDRixPQUFPO0FBQ0wsY0FBWTtBQUFBLElBQ1YsVUFBVTtBQUFBLElBQ1Y7QUFBQSxJQUNBLE1BQU0sU0FBUyxRQUFRLElBQUksYUFBdUIsS0FBSztBQUFBLElBQ3ZELFlBQVk7QUFBQSxFQUNkO0FBQ0Y7QUFFQSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixNQUFNLEtBQUssUUFBUSxjQUFjLHdDQUFlLENBQUMsR0FBRyxLQUFLO0FBQUEsRUFDekQsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLEVBQ1Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLHNCQUFzQixFQUFFLGFBQWEsS0FBSyxDQUFDO0FBQUEsSUFDM0MsV0FBVztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLCtCQUErQixLQUFLLFVBQVUsUUFBUSxJQUFJLGVBQWU7QUFBQSxFQUMzRTtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1Asa0JBQWtCO0FBQUEsSUFDbEIsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUNqQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU0sU0FBUyxRQUFRLElBQUksYUFBdUIsS0FBSztBQUFBLElBQ3ZELEtBQUs7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNMLGVBQWU7QUFBQSxNQUNmLHNCQUFzQjtBQUFBLE1BQ3RCLHdCQUF3QjtBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
