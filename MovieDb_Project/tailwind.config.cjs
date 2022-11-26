/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue}",
      "./src/components/**/*.vue"
  ],
  theme: {
    container:{
      maxWidth:'50%'
    },
    extend: {},
  },
  plugins: [],
}
