/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../../packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      fontSize: {
        'title-26-M': [
          '26px',
          { fontWeight: 500, lineHeight: '30px', letterSpacing: '-0.09375rem' },
        ],
        'title-24-M': [
          '24px',
          { fontWeight: 500, lineHeight: '30px', letterSpacing: '-0.09375rem' },
        ],
        'body-16-R': [
          '16px',
          { fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.03125rem' },
        ],
        'body-14-M': [
          '14px',
          { fontWeight: 500, lineHeight: '20px', letterSpacing: '-0.03125rem' },
        ],
        'body-14-R': [
          '14px',
          { fontWeight: 400, lineHeight: '20px', letterSpacing: '-0.03125rem' },
        ],
        'body-12-B': [
          '12px',
          { fontWeight: 700, lineHeight: '18px', letterSpacing: '-0.03125rem' },
        ],
        'body-12-M': [
          '12px',
          { fontWeight: 500, lineHeight: '18px', letterSpacing: '-0.03125rem' },
        ],
        'body-12-R': [
          '12px',
          { fontWeight: 400, lineHeight: '18px', letterSpacing: '-0.03125rem' },
        ],
      },
      fontWeight: {
        medium: '500',
        regular: '400',
        bold: '700',
      },
      colors: {
        primary: {
          50: '#FFF1F1',
          100: '#FFDFDF',
          200: '#FFC5C5',
          300: '#FF9D9D',
          400: '#FF6464',
          500: '#FF3838',
          600: '#ED1515',
          700: '#C80D0D',
          800: '#A50F0F',
          900: '#881414',
          950: '#4B0404',
        },
      },
    },
  },
  plugins: [],
};
