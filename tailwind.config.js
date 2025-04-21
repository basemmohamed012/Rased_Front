/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // مهم جدًا عشان التبديل بين الثيمات
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#16423C",
        graycolor: "#D3D8D7",
      },
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        tajawal: ["Tajawal"],
        slogan: ["Noto Nastaliq Urdu"],
      },
    },
  },
  plugins: [require('flowbite/plugin')],

};