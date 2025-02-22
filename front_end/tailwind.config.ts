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
        sidebarActive: "#5932EA",
        sidebarHover: "#ac98f4",
      },
    },
  },
  plugins: [],
} satisfies Config;