/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#789363',
        'text-#0000': '#243c5a',
        "boder": "#000",
        "themtest": "#F4F4F4",
        "footer": "#575757",
        "color": "#FFFFFF",
        "footer-them": "#969696"
        , "colorBlack": "#000"

      },
      rotate: {
        'r5': '-5deg',
      },
    },
  },
  plugins: [],
}