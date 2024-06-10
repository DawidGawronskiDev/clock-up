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
      backgroundImage: {
        "daytime-desktop": "url('/desktop/bg-image-daytime.jpg')",
        "nighttime-desktop": "url('/desktop/bg-image-nighttime.jpg')",

        "daytime-tablet": "url('/tablet/bg-image-daytime.jpg')",
        "nighttime-tablet": "url('/tablet/bg-image-nighttime.jpg')",

        "daytime-mobile": "url('/mobile/bg-image-daytime.jpg')",
        "nighttime-mobile": "url('/mobile/bg-image-nighttime.jpg')",
      },
    },
  },
  plugins: [],
};
