/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'zamzam_bg': '#8e5908', 
        'zamzam_bg_hover': '#613c08', 
        'secondary':'#92340b',
      }
    },
  },
  plugins: [require("daisyui")],
}

