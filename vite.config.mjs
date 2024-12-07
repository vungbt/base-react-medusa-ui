import inject from "@medusajs/admin-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import inspect from "vite-plugin-inspect";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig(function (_a) {
    var mode = _a.mode;
    var env = loadEnv(mode, process.cwd());
    var BASE = env.VITE_MEDUSA_BASE || "/";
    var BACKEND_URL = env.VITE_MEDUSA_BACKEND_URL || "http://localhost:9000";
    var STOREFRONT_URL = env.VITE_MEDUSA_STOREFRONT_URL || "http://localhost:8000";
    /**
     * Add this to your .env file to specify the project to load admin extensions from.
     */
    var MEDUSA_PROJECT = env.VITE_MEDUSA_PROJECT || null;
    var sources = MEDUSA_PROJECT ? [MEDUSA_PROJECT] : [];
    return {
        plugins: [
            inspect(),
            react(),
            inject({
                sources: sources,
            }),
            tsconfigPaths(),
        ],
        define: {
            __BASE__: JSON.stringify(BASE),
            __BACKEND_URL__: JSON.stringify(BACKEND_URL),
            __STOREFRONT_URL__: JSON.stringify(STOREFRONT_URL),
        },
    };
});
