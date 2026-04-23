import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["var(--font-bebas)", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
        playfair: ["var(--font-playfair)", "serif"],
      },
      colors: {
        cream: "#f5f0eb",
        dark: "#1a1f1c",
        card: "#232a26",
        gold: "#c49a4a",
        "gold-light": "#d4aa5a",
        "gold-dark": "#b8863c",
        "dark-text": "#e8e4dc",
        "dark-muted": "rgba(232,228,220,0.5)",
        "light-muted": "rgba(26,31,28,0.5)",
        "gold-border": "rgba(196,154,74,0.2)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(to right, #c49a4a, #d4aa5a, #b8863c)",
      },
    },
  },
  plugins: [],
};
export default config;
