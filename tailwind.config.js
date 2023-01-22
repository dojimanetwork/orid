/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#010922",
        text: "#EBEBEB",
        label: "#AED4DB",
        buttonPrimary: "#312964",
        outline: "#8AD1D2",
        subText: "#D9D9D9",
        card: "#0B0F2F",
        cardSecondary: "rgba(49, 41, 100, 0.2)",
        buttonSecondary: "#8F8FDB",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
