const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      colors: {
        primary: {
          50: "#D5DDEC",
          100: "#B9C6DF",
          200: "#9DAFD2",
          300: "#8198C5",
          400: "#6581B8",
          500: "#4B6DA8",
          600: "#40598C",
          700: "#334870",
          800: "#212E48",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
