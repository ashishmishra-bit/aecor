module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      shadow:{
        '2xl': '2px 0px 10px 9px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
