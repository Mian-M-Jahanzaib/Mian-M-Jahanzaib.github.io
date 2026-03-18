/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#CCFF00",
        "background-light": "#f8f8f5",
        "background-dark": "#0a0a0a",
      },
      fontFamily: {
        "display": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0px",
        "lg": "0px",
        "xl": "0.125rem",
      },
    },
  },
  plugins: [],
}