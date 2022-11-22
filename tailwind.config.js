const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['font-text', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}
