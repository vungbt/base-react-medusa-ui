/** @type {import('tailwindcss').Config} */
const path = require("path")

const medusaUI = path.join(
  path.dirname(require.resolve("@medusajs/ui")),
  "**/*.{js,jsx,ts,tsx}"
)

module.exports = {
  presets: [require("@medusajs/ui-preset")],
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", medusaUI],
  theme: {
    extend: {
      colors: {
        primary: "#1272E5",
        transparent: "transparent",
        text: "#1E1E1E",
        "ui-bg": {
          base: {
            DEFAULT: "#ffffff",
            hover: "#f4f4f5",
            pressed: "#e4e4e7",
          },
          component: {
            DEFAULT: "#fafafa",
            hover: "#f4f4f5",
            pressed: "#e4e4e7",
          },
          disabled: {
            DEFAULT: "#f4f4f5",
          },
          field: {
            DEFAULT: "#fafafa",
            hover: "#f4f4f5",
          },
          "field-component": {
            DEFAULT: "#ffffff",
            hover: "#fafafa",
          },
          highlight: {
            DEFAULT: "#eff6ff",
            hover: "#dbeafe",
          },
          interactive: {
            DEFAULT: "#3b82f6",
          },
          overlay: {
            DEFAULT: "rgb(9 9 11 / 40%)",
          },
          subtle: {
            DEFAULT: "#fafafa",
            hover: "#f4f4f5",
            pressed: "#e4e4e7",
          },
          "switch-off": {
            DEFAULT: "#e4e4e7",
            hover: "#d4d4d8",
          },
        },
        "ui-fg": {
          base: {
            DEFAULT: "#18181B ",
          },
          disabled: {
            DEFAULT: "#A1A1AA",
          },
          error: {
            DEFAULT: "#e11d48",
          },
          interactive: {
            DEFAULT: "#3b82f6",
            hover: "#2563eb",
          },
          muted: {
            DEFAULT: "#71717A",
          },
          "on-color": {
            DEFAULT: "#ffffff",
          },
          "on-inverted": {
            DEFAULT: "#ffffff",
          },
          subtle: {
            DEFAULT: "#52525b",
          },
        },
        "ui-border": {
          base: {
            DEFAULT: "#e4e4e7",
          },
          danger: {
            DEFAULT: "#be123c",
          },
          error: {
            DEFAULT: "#e11d48",
          },
          interactive: {
            DEFAULT: "#3b82f6",
          },
          loud: {
            DEFAULT: "#09090b",
          },
          strong: {
            DEFAULT: "#d4d4d8",
          },
          transparent: {
            DEFAULT: "#09090b00",
          },
        },
        "ui-button": {
          danger: {
            DEFAULT: "#e11d48",
            hover: "#be123c",
            pressed: "#9f1239",
          },
          inverted: {
            // DEFAULT: "#09090b",
            // hover: "#18181b",
            // pressed: "#27272a",
            DEFAULT: "#3B82F6",
            hover: "#2563eb",
            pressed: "#2563eb",
          },
          'inverted-secondary': {
            DEFAULT: "#09090b",
            hover: "#18181b",
            pressed: "#27272a",
          },
          neutral: {
            DEFAULT: "#ffffff",
            hover: "#f4f4f5",
            pressed: "#e4e4e7",
          },
          transparent: {
            DEFAULT: "rgba(255, 255, 255, 0.01)",
            hover: "#f4f4f5",
            pressed: "#e4e4e7",
          },
        },
        "ui-code": {
          "bg-base": {
            DEFAULT: "#18181b",
          },
          "bg-subtle": {
            DEFAULT: "#27272a",
          },
          border: {
            DEFAULT: "#3f3f46",
          },
        },
        "ui-tag": {
          blue: {
            DEFAULT: "#D1FAE5",
            bg: "#D1FAE5",
            hover: "#bfdbfe",
            "bg-hover": "#bfdbfe",
            border: "#bfdbfe",
            icon: "#2563eb",
            text: "#1d4ed8",
          },
          green: {
            DEFAULT: "#d1fae5",
            bg: "#d1fae5",
            hover: "#a7f3d0",
            "bg-hover": "#a7f3d0",
            border: "#a7f3d0",
            icon: "#10B981",
            text: "#065F46",
          },
          neutral: {
            DEFAULT: "#F4F4F5",
            bg: "#F4F4F5",
            hover: "#e4e4e7",
            "bg-hover": "#e4e4e7",
            border: "#e4e4e7",
            icon: "#A1A1AA",
            text: "#52525b",
          },
          orange: {
            DEFAULT: "#fef4c7",
            bg: "#fef4c7",
            hover: "#fde68a",
            "bg-hover": "#fde68a",
            border: "#FED7AA",
            icon: "#d97706",
            text: "#9A3412",
          },
          purple: {
            DEFAULT: "#ede9fe",
            bg: "#ede9fe",
            hover: "#ddd6fe",
            "bg-hover": "#ddd6fe",
            border: "#ddd6fe",
            icon: "#7c3aed",
            text: "#6d28d9",
          },
          red: {
            DEFAULT: "#ffe4e6",
            bg: "#ffe4e6",
            hover: "#fecdd3",
            "bg-hover": "#fecdd3",
            border: "#fecdd3",
            icon: "#e11d48",
            text: "#be123c",
          },
        },
        contrast: {
          "fg-primary": {
            DEFAULT: "rgba(255, 255, 255, 1)",
            99: "rgba(255, 255, 255, 0.99)",
            88: "rgba(255, 255, 255, 0.88)",
            77: "rgba(255, 255, 255, 0.77)",
            66: "rgba(255, 255, 255, 0.66)",
            55: "rgba(255, 255, 255, 0.55)",
            44: "rgba(255, 255, 255, 0.44)",
            33: "rgba(255, 255, 255, 0.33)",
            22: "rgba(255, 255, 255, 0.22)",
            11: "rgba(255, 255, 255, 0.11)",
            90: "rgba(255, 255, 255, 0.90)",
            80: "rgba(255, 255, 255, 0.80)",
            70: "rgba(255, 255, 255, 0.70)",
            60: "rgba(255, 255, 255, 0.60)",
            50: "rgba(255, 255, 255, 0.50)",
            40: "rgba(255, 255, 255, 0.40)",
            30: "rgba(255, 255, 255, 0.30)",
            20: "rgba(255, 255, 255, 0.20)",
            10: "rgba(255, 255, 255, 0.10)",
          },
        },
      },
      fontSize: {
        xsmall: "0.75rem",
        small: "0.813rem",
        medium: "0.875rem",
        xlarge: "0.938rem",
        large: "1rem",
        xlarge: "1.125rem",
        "2xlarge": "1.5rem",
        "3xlarge": "2.5rem",
        "4xlarge": "3.5rem",
        "5xlarge": "4rem",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Ubuntu",
          "sans-serif",
        ],
      },
      boxShadow: {
        neutral: "0px 0px 0px 1px rgba(0, 0, 0, 0.08)",
        inner: "inset 0px 4px 4px rgba(255, 255, 255, 0.25)",
        border:
          "0px 1px 2px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(0, 0, 0, 0.08)",
        "border-interactive":
          "0px 1px 2px rgba(30, 58, 138, 0.5), 0px 0px 0px 1px #3B82F6",
        auth: "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 8px 16px rgba(0, 0, 0, 0.08)",
        "card-rest":
          "0px 0px 0px 1px rgba(0, 0, 0, 0.08), 0px 1px 2px -1px rgba(0, 0, 0, 0.08), 0px 2px 4px rgba(0, 0, 0, 0.04)",
      },
      dropShadow: {
        blue: "1px 2px 4px rgba(59, 130, 246, 0.5)",
        green: "1px 2px 4px rgba(0, 147, 24, 0.5)",
      },
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-168px * 4))",
          },
        },
      },
      animation: {
        scroll: "scroll 40s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({ addUtilities }) {
      addUtilities({
        ".blue-gradient": {
          background:
            "linear-gradient(149.3deg, #6AB8FF 16.05%, #1A69DF 83.95%), #FFFFFF",
        },
        ".green-gradient": {
          background:
            "linear-gradient(335.3deg, #24A762 27.9%, #72CE57 89.58%)",
        },
        ".payslip-green": {
          background:
            "linear-gradient(174.4deg, #DCFFFF 0.64%, #CBEEDC 77.76%)",
        },
        ".payslip-blue": {
          background: "linear-gradient(180deg, #D1E6FF 6.49%, #8BBAF3 104.6%)",
        },
      })
    },
  ],
}
