/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#5932EA",
        secondary: "#00AC4F",
        accent: "#9197B3",
        background: "#FAFBFF",
        shadowColor: "#E2ECF9",
        error: "#D0004B",
        black: "#333333",
        grayText: "#B5B7C0",
        grayBackground: "#F9FBFF",
      },
    },
  },
  plugins: [],
};
