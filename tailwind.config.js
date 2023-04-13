/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 15px 15px rgba(0, 0, 0)',
        '4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
      },
      fontFamily: {
        logo: ['Teko'],
        body: ['Roboto Slab'],
        title: ['Roboto'],
      },
      backgroundImage: {
        'hero-pattern': "url('/slider-fnlij.jpg')",
        'macaw-pattern': "url('/src/assets/macaw.jpg')",
        'acai-pattern': "url('/src/assets/acai-img.jpg')",
      },
      colors: {
        theme: {
          gray: '#0D4877',
          green: '#04549B',
        },
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin'), require('@tailwindcss/typography')],
}
