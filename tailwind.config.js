module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        success: "0 10px 15px -3px #D3F2EC, 0 4px 6px -2px rgba(0, 0, 0, 0)",
        primary: "0 10px 15px -3px #ffffff, 0 4px 6px -2px rgba(0, 0, 0, 0)",
        warning: "0 10px 15px -3px #F6E1C2, 0 4px 6px -2px rgba(0, 0, 0, 0)",
        progress: "rgb(241, 242, 243) 1px 3px 20px 3px",
        stacked: "0px 0px 45px 10px rgb(113 106 202 / 15%)",
        "more-button": "rgb(208, 208, 208) 0px 0px 20px 0px",
        "sidebar-elements":
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      },
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
      backgroundColor: ["checked"],
    },
  },
  plugins: [],
};
