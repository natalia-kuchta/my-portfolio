/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      dropShadow: {
        glow: "0 0 20px rgba(139,92,246,1)",
      },
      colors: {
        primary: "#080808",
        secondary: "#9f00ff",
        tertiary: "#151030",
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
        "hero-pattern": "url('/src/assets/flamePurple.jpg')",
      },
    },
  },
  plugins: [],
};
