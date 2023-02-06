/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      uxs: "500px",
      sm: "640px",
      md: "1024px",
      xl: "1280px",
    },
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
