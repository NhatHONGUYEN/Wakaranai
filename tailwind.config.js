/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Pinot: ["Pinot", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
