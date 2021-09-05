const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/components/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    fontFamily: {
      poppins: ['Poppins', ...defaultTheme.fontFamily.sans],
      montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
    },
    colors: {
      transparent: 'transparent',
      inherit: 'inherit',
      white: '#ffffff',
      gray: {
        50: '#f2f2f2',
        100: '#e0e0e0',
        200: '#bdbdbd',
        300: '#a9a9a9',
        400: '#828282',
        500: '#4f4f4f',
        600: '#333333',
      },
      black: '#000000',
      green: '#219653',
      blue: { lightest: '#f6f8fb', light: '#97bef4', DEFAULT: '#2f80ed' },
    },
    extend: {
      animation: {
        loading: 'move-to-right 1500ms linear infinite',
      },
      keyframes: {
        'move-to-right': {
          '0%': { transform: 'translateX(-100%)' },
          '33%': { transform: 'translateX(100%) scaleX(1.4)' },
          '66%': { transform: 'translateX(250%) scaleX(1)' },
          '100%': { transform: 'translateX(360%)' },
        },
      },
    },
  },
};
