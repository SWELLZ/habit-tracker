/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        translateLeft: {
          "0%, 100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        left: "translateLeft 1s ease",
      },
    },
  },
  plugins: [],
};
