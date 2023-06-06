/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["corporate"],
  },
  plugins: [require("daisyui")],
}