/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // مهم جدًا عشان التبديل بين الثيمات
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        maincolor: "#16423C",
        secondcolor: "rgb(31 105 95)",
        thirdcolor: "rgb(155 155 155)",
        graycolor: "#D3D8D7",
        success: "rgb(7 188 30)",
        error: "rgb(222 0 0)",
        warning: "rgb(204 164 8)",
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