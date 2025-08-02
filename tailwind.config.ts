import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
      },
      container: {
        screens: {
          DEFAULT: "1290px",
        },
        center: true,
        padding: "1.2rem",
      },
      screens: {
        xs: "540px",
      },
    },
  },

  plugins: [],
} satisfies Config;
