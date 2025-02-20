import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFBFF",  
        white: "#FFFFFF",
        active: "#6A47EC",
        hover: "#5932EA",
      },
    },
  },
  plugins: [],
} satisfies Config;