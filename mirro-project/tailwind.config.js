/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}"
  ],
  safelist: [
    "text-customGreen",
    "text-customRed",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: "#3A5F56",
        customRed: "#DB343B",
      },
    },
  },
  plugins: [],
}

