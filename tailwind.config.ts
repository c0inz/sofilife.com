import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Clean, minimal palette (Everlane/COS inspired)
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Brand colors
        cream: "#FAF9F6",
        charcoal: "#2C2C2C",
        stone: "#8B8680",
        sand: "#E8E4DE",
        // Functional
        primary: "#2C2C2C",
        secondary: "#8B8680",
        accent: "#D4A574", // Warm terracotta accent
        muted: "#F5F3F0",
        border: "#E8E4DE",
        error: "#DC2626",
        success: "#16A34A",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "headline": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "title": ["1.5rem", { lineHeight: "1.3" }],
        "body": ["1rem", { lineHeight: "1.6" }],
        "small": ["0.875rem", { lineHeight: "1.5" }],
        "caption": ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};
export default config;
