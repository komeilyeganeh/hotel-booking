module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        md: ['.9rem']
      },
      animation: {
        "menu-mobile": "menu-mobile",
        "fade-in": "fade-in .4s ease-in"
      },
      keyframes: {
        "menu-mobile": {
          "0%": { right: "-100%" },
          "100%": { right: "0" },
        },
        "fade-in": {
          "0%": { display: "hidden", opacity: "0" },
          "100%": { display: "block", opacity: "1" },
        },
      },
      height: {
        "90v": "90vh",
      },
      maxHeight: {
        "85v": "85vh",
      },
      zIndex: {
        1000: "1000",
        99999: "99999"
      },
    },
  },
  plugins: [],
};
