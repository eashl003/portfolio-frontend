const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      teal: colors.teal,
    },
  },
  variants: {
    extend: {
      padding: ["hover"],
    },
  },
}
