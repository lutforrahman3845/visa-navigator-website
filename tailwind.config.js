module.exports = {
  darkMode: "class", 
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#7CC243",
        secondary:"#1D232A"
      }
    }, 
  },
  plugins: [
    require("daisyui"), 
  ],
};
