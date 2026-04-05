import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        coal: "#0b1f15",
        ember: "#106736",
        sand: "#fbf6e3",
        gold: "#106736",
        rust: "#d98c2b",
        cream: "#fffdf5",
        smoke: "#d7d0bb",
        line: "#2d7c4a",
      },
      fontFamily: {
        display: ["var(--font-bebas)", "Impact", "sans-serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 40px rgba(0, 0, 0, 0.24)",
      },
      backgroundImage: {
        "street-grid":
          "radial-gradient(circle at 1px 1px, rgba(255,248,239,0.08) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;