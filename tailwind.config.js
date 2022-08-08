module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',

  theme: {
    extend: {
      backgroundImage: {
        'dark': "url('https://raw.githubusercontent.com/dresan22/portfolio/0804ac795fe11a24b9a22986b7b1d94f1fd77b92/src/assets/images/subtle-prism-dark.svg')",
        'light': "url('https://raw.githubusercontent.com/dresan22/portfolio/0804ac795fe11a24b9a22986b7b1d94f1fd77b92/src/assets/images/subtle-prism.svg')",

      },
    },
    screens: {
      'sm': { 'max': '768px' },
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
};
