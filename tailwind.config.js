/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./**/*.{html}"],
  theme: {
    fontFamily: {
      'futura': ['futura', 'bold'],
    },
    extend: {
      height: {
        '550': '550px',
        '350': '350px',
      },
      backgroundImage: {
        'logo-black': "url('/images/logo.png')",
        'logo-white': "url('/images/logo_white.png')",
        'kernagis1': "url('/images/galva2.jpg')",
        'kernagis2': "url('/images/galva7.jpg')",
        'kernagis3': "url('/images/galva10.jpg')",
        'silainiai': "url('/images/silainiai.png')",
        'ceburekas': "url('/images/chebureki54.jpg')",
        'hero': "url('/images/statue.png')",
        'hero2': "url('/images/statue2.png')",
        'skulptura': "url('/images/skulptura8.jpg')",
      },
      backgroundSize: {
        '550': '550px',
        '350': '350px',
        '700': '700px',
      },
      backgroundColor: {
        'purple': '#392c42',
        'blue': '#0058ff',
        'yellow' : '#fccf6d',
        'pamaskomu-blue' : '#b0d1e4',
      }
    },
  },

  plugins: [],
}
