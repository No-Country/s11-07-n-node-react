/** @type {import('tailwindcss').Config} */
export default {
  content:  ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors:{
        verdeMarino: '#41BCAC',
        gris1: '#CFCFCF',
      },
      fontFamily:{
        roboto:["Roboto"]
      }
    },
  },
  plugins: [require("daisyui")],
  
}
