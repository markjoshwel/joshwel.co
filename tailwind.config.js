const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/web/**/*.html", "./public/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["font-text", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  safelist: [
    "list-none",
    "list-disc",
    "list-decimal",
  ]
}
