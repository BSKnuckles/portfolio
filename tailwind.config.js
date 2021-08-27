const colors = require('tailwindcss/colors')

module.exports = {
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        sky: colors.sky,
      },
    },
  },
  variants: {
    extend: {
      margin: ['hover'],
    },
  },
}
