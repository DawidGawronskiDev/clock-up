/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-100": "#000000",
        "c-200": "#303030",
        "c-300": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
