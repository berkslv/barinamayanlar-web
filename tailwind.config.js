const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {},
    screens: {
      "xxxs" : "300px",
      "xxs" : "350px",
      "xs" : "400px",
      "sm" : "640px", 
      "base" : "850px",
      "md" : "768px",
      "lg" : "1024px",
    },
    colors: {
      ...colors,
      prime: "#B70B58",
    },
  },
};
