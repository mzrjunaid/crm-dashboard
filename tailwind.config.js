/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5932EA",
        secondary: "#00AC4F",
        accent: "#9197B3",
        shadowColor: "#E2ECF9",
        error: "#D0004B",
        black: "#333333",
        background: "#FAFBFF",
      },
    },
  },
  plugins: [],
};
