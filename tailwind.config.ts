import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors: {
        text: "#C1C2C5",
        background: "#000000",
        "background-light": "#25262B",
        primary: "#25262B",
        secondary: "#C1C2C5",
        accent: "#F08C00",
        "accent-light": "#FFD43B",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
