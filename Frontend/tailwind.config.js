/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    darkMode:"class",
  },
  plugins: [
    require('daisyui'),
  ],
  // add this line for Dark mode
  darkMode:"class",
}