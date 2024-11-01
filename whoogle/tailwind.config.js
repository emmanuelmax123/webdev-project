/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["lato", "sans-serif"],
      },
      screens: {
        xs: "375px",
        "xs-higher": "376px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
