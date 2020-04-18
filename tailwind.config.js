module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      secondary: "#9d1996",
      primary: "#14a5a9",
      tertiary: "rgb(246, 134, 14)",
      "purple-150": "#bef5f7", //light purple: #fce4fc
    }),
    textColor: theme => ({
      ...theme("colors"),
      secondary: "#9d1996",
      primary: "#14a5a9",
      white: "#fff",
    }),
    borderColor: theme => ({
      ...theme("colors"),
      secondary: "#9d1996",
      primary: "#14a5a9",
    }),
    extend: {},
  },
  variants: {},
  plugins: [],
}
