/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#7CC243",
        secondary: "#1D232A",
        thrid: "#054833",
      },
    },
  },
  plugins: [daisyui],
};

