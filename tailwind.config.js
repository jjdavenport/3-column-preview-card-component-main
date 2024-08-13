/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to your project's structure
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexendDeca: ["lexend deca", "sans-serif"],
        bigShouldersDisplay: ["big shoulders display", "sans-serif"],
      },
      colors: {
        brightOrange: "hsl(31, 77%, 52%)",
        darkCyan: "hsl(184, 100%, 22%)",
        veryDarkCyan: "hsl(179, 100%, 13%)",
        transparentWhite: "hsla(0, 0%, 100%, 0.75)",
        veryLightGray: "hsl(0, 0%, 95%)",
      },
    },
  },
  plugins: [],
};
