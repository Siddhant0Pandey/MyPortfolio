import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Bebas: ["Bebas Neue"],
      PublicSans: ["Public Sans"],
      Poppins: ["Poppins"],
      Roboto: ["Roboto"],
    },

    extend: {
      fontSize: {
        "1.5xl": "1.2rem",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
      },
      height: {
        "18": "6rem",
        "20": "8rem",
        "22": "10rem",
      },
    },
  },
  plugins: [],
};
export default config;
