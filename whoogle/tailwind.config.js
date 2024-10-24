/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["lato", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};
