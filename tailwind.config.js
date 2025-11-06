/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0BA57B', // primary green from Figma accent
          dark: '#0a8a67',
          light: '#15c593',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        },
        screens: {
          '2xl': '1200px',
        },
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        portfolio: {
          primary: '#22C55E', // green-500
          'primary-content': '#ffffff',
          secondary: '#0EA5E9',
          accent: '#22D3EE',
          neutral: '#111827',
          'base-100': '#ffffff',
          info: '#0EA5E9',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
    ],
    base: true,
    styled: true,
    utils: true,
    logs: true, // Enable logs to debug
    darkTheme: false,
  },
};


