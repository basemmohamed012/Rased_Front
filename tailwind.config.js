/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // مهم جدًا عشان التبديل بين الثيمات
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        tajawal: ["Tajawal"],
        Nastaliq: ["Noto Nastaliq Urdu"],
      },
    },
  },
  plugins: [require('flowbite/plugin')],

};