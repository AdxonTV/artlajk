import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textShadow: {
        white: "0px 50px 0px rgba(255, 255, 255, 1)",
        black: "0px 50px 0px rgba(0, 0, 0, 1)",
      },
      fontSize: {
        git: "20px",
        nav: "16px",
      },

      colors: {
        black: "#1A0F2B",
        blue: {
          50: "#130D1B",
          75: "#dfdff2",
          100: "#F0F2FA",
          200: "#010101",
          300: "#4FB7DD",
        },
        violet: {
          300: "#863AF1",
          400: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
