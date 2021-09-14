module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '*:not(.un-prose) code:not(.un-prose) code:not(pre *)': {
              backgroundColor: "rgba(239, 180, 61, 0.25)",
              padding: "0.2em",
              borderRadius: "0.3em",
            },
            'code::before': {
              content: ''
            },
            'code::after': {
              content: ''
            },
            blockquote: {
              quotes: 'none',
              fontStyle: 'regular',
              backgroundColor: '#FAF6F1',
              borderLeftColor: '#EFB33D',
              fontWeight: '400',
              padding: '0.2rem',
            },
          },
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
