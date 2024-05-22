/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#3a6fe0",
        "dark": "#18191d",
        "gray-1": "#1D2026",
        "gray-2": "#1d2027",
        "gray-3": "#2d3036"

      }
    },
  },
  plugins: [],
}