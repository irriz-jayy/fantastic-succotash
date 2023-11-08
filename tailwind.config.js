/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: "Arizonia",
        button: "Agbalumo",
        text: "'Cormorant Garamond'",
        main: "'DM Serif Display'",
      },
      colors: {
        primary: "#115E59",
        secondary: "#e9daca",
      },
    },
  },
  plugins: [],
};
