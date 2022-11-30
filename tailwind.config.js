const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/web/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['font-text', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
