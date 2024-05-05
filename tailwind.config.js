module.exports = {
  content: ['./src/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ebony': {
          50: '#333333',
          100: '#2e2e2e',
          200: '#292929',
          300: '#242424',
          400: '#1f1f1f',
          500: "#1a1a1a",
          600: "#151515",
          700: "#101010",
          800: "#0b0b0b",
          900: "#060606"
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
