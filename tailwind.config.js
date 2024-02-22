module.exports = {
  content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cedar': {
          50: '#9b7d5e',
          100: '#8c7152',
          200: '#7d6445',
          300: '#6e5738',
          400: '#5f4a2b'
        },
        'rw': {
          50: '#6e3131',
          100: '#5f2b2b',
          200: '#512525',
          300: '#421e1e',
          400: '#331818'
        },
        'ebony': {
          50: '#333333',
          100: '#2e2e2e',
          200: '#292929',
          300: '#242424',
          400: '#1f1f1f'
        },
        'mahogany': {
          50: '#8b352b',
          100: '#7f3027',
          200: '#732b23',
          300: '#67261f',
          400: '#5b211b'
        },
        'walnut': {
          50: '#5e463b',
          100: '#544036',
          200: '#4a3b31',
          300: '#403026',
          400: '#362a21'
        }
      }
    }
  },
  variants: {
    extend: {},
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: []
};
