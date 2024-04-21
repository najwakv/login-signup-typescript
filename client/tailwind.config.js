/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      purple: "#3A244A",
      red: "#D72638",
      white: "#FFFFFF",
      gray: "#E0E0E0",
      black: "#69615f",
      transparent: "#00000000",
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      'tablet': '768px',
      'laptop': '1024px',
      'desktop': '1280px',
      'monitor': '1536px',
    },
    extend: {},
  },
  plugins: [],
};
