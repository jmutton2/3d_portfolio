/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fbf5e6",
        primary_dark: "#D0C1B3", //f2 alternating
        secondary: "#a88a70",
        tertiary: "#eac4d5",
        button: "#809bce",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/blob.svg')",
      },
    },
  },
  plugins: [],
};
