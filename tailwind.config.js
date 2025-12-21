/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
}
module.exports = {
  theme: {
    extend: { 
      colors: {
        maroon: '#800000',
      },
    },
  },
}
