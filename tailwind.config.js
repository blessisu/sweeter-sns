module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#FE9E9E',
        dark: '#FD7474',
        light: '#FEC3C3',
        lighter: '#FFF0F0',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
