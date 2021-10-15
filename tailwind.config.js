module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        primary: "#3C5654",
        secondary: "#C89C32",
        "primary-lite": "#425C5A",
        "secondary-lite": "#D6AF14",
        brandPrimary: "#3391b2",
        brandSecondary: "#51B4A8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
