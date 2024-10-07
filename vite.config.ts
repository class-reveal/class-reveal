import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/class-reveal/class-reveal.github.io",
	plugins: [
		react(),
		svgr({
			include: "**/*.svg?react"
		})
	]
});
