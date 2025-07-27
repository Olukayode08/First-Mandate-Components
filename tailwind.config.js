/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        baseColor: '#fedf7e',
        btnSecondary: '#ffdfe2',
        error: '#ff0000',
        success: "#008000"
      },
    },
  },
  plugins: [],
}
