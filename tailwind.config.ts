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
        background: "var(--background)",
        foreground: "var(--foreground)",
        "mygray-100": "#1c1a19",
        "mygray-200": "#353335",
        "mygray-300": "#998f8f",
        "orange-accent": "#f46c39",
        "green-accent": "#c5ff41",
      },
    },
  },
  plugins: [],
} satisfies Config;
