/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBg: "oklch(0.99 0.005 105)",
        secondaryBg: "oklch(85.07% 0.08 294.67)",
        mainText: "#000000",
        brandPink: "#ff4081",
        brandYellow: "#ffd700",
        brandGreen: "#00e676",
        brandBlue: "#2979ff",
        brandPinkDark: "#a72550",
      },
      fontFamily: {
        chango: ['"Chango"', "cursive"],
        sans: [
          '"Franklin Gothic Medium"',
          '"Arial Narrow"',
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
