/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        verdeMarino: '#41BCAC',
        gris1: '#CFCFCF',
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
