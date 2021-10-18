module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#3C5654",
          lite: "#425C5A",
        },
        secondary: {
          dark: "#C89C32",
          lite: "#D6AF14",
        },
        brand: {
          primary: "#3391b2",
          secondary: "#51B4A8",
        },
        background: {
          lite: "#E2ECEB",
        },
        "on-primary": {
          dark: "#ECFAFA",
          lite: "#FFFFFF",
        },
        "on-secondary": "#697C7A",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
    },
  },
  plugins: [],
};
