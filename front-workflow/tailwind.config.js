/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        verdeMarino: '#41BCAC',
        verdeClaro: '#E3EFEA',
        gris1: '#CFCFCF',
      },
      fontFamily:{
        roboto:["Roboto"]
      }
    },
    extend: {
      boxShadow: {
        'bottom-black': '0 4px 8px -2px rgba(0, 0, 0, 0.6)',
      },
    },
  },
  plugins: [require("daisyui")],

}
