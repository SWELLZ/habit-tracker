/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        translateLeft: {
          "0%": {left: '100%'},
          "100%": {left: 0}
        },
      },
      animation: {
        left: "translateLeft 1s ease",
      },
    },
  },
  plugins: [],
};
