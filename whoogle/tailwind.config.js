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
        "lg-fit": "920px",
        "sm-fit": "568px",
        "s-phone": "361px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
