/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'ethirium': "url('/images/image-equilibrium.jpg')",
        'avatar': "url('/images/image-avatar.png')",
        'eye': "url('/images/icon-view.svg')",
      }
    },
    fontFamily: {
      'Outfit': ['outfit', 'Roboto' ,'sans','sans-serif','ui-sans-serif', 'system-ui'],
    },
  },
  plugins: [],
}