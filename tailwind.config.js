module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',

  theme: {
    extend: {
      backgroundImage: {
        'hero-light': "url('./src/assets/imgs/subtle-prism.svg')",
        'hero-dark': "url('./src/assets/imgs/subtle-prism-dark.svg')",
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
