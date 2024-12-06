/** @type {import('tailwindcss').Config} */
const path = require("path")

const medusaUI = path.join(
  path.dirname(require.resolve("@medusajs/ui")),
  "**/*.{js,jsx,ts,tsx}"
)

export default {
  presets: [require("@medusajs/ui-preset")],
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@medusajs/ui/dist/**/*.{js,jsx,ts,tsx}",
    medusaUI,
  ],
  theme: {},
  plugins: [require("tailwindcss-animate")],
}
