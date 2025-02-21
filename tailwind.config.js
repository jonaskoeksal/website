module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['PlusJakartaSans']
      },
      colors: {
        'cgray' : '#dacfc9'
      },
      cursor: {
        default : 'url(./custom_cursor.svg), default',
        pointer : 'url(./custom_cursor.svg), pointer',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
