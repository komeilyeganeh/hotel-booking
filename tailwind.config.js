module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        "menu-mobile": {
          "0%": { right: "-100%" },
          "100%": { right: "0" },
        },
      },
      height: {
        "90v": "90vh"
      },
      maxHeight: {
        "85v": "85vh"
      }
    },
  },
  plugins: [],
};
