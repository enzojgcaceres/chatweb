import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      colors: {
        cream: "#faf6f0",
        amber: {
          DEFAULT: "#c8893a",
          light: "#e8a94a",
          pale: "#f5e6c8",
        },
        charcoal: "#1a1510",
      },
    },
  },
  plugins: [],
};

export default config;
