/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
let themeColors = {
  yellow: "#FFCE31",
  blue: "#1849C6",
  darkBlue: "#021850",
};
module.exports = {
  content: [`./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      colors: {
        gray: colors.neutral,
        theme: themeColors,
      },
    },
  },
  plugins: [],
};
