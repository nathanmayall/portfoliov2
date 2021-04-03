module.exports = {
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./src/**/*.ts",
    "./src/**/*.tsx",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        Skobeloff: "#297373",
        TailwindLogo: "#43a8b3",
        ReactLogo: "#00D8FF",
        html5: "#E44D26",
        javascript: "#f7df1e",
        typescript: "#007acc",
        postgresql: "#336791",
        nodejs: "#68A063",
        webpack: "#1C78C0",
        kubernetes: "#326ce5",
      },
      backgroundImage: {
        "code-image": "url('./img/portfolio-bg.jpg')",
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss-textshadow")],
};
