import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--primary-50)',
          100: 'var(--primary-100)',
          200: 'var(--primary-200)',
          300: 'var(--primary-300)',
          400: 'var(--primary-400)',
        },
        'secondary-light': {
          50: 'var(--secondary-light-50)',
          100: 'var(--secondary-light-100)',
          200: 'var(--secondary-light-200)',
          300: 'var(--secondary-light-300)',
          400: 'var(--secondary-light-400)',
        },
        'secondary-dark': {
          50: 'var(--secondary-dark-50)',
          100: 'var(--secondary-dark-100)',
          200: 'var(--secondary-dark-200)',
          300: 'var(--secondary-dark-300)',
          400: 'var(--secondary-dark-400)',
        },
        neutral: {
          50: 'var(--neutral-50)',
          100: 'var(--neutral-100)',
          200: 'var(--neutral-200)',
          300: 'var(--neutral-300)',
          400: 'var(--neutral-400)',
          500: 'var(--neutral-500)',
          600: 'var(--neutral-600)',
          700: 'var(--neutral-700)',
          800: 'var(--neutral-800)',
          900: 'var(--neutral-900)',
        },
        basics: {
          white: 'var(--white)',
          black: 'var(--black)',
          'white-swap': 'var(--white-swap)',
          'black-swap': 'var(--black-swap)',
        },
        information: {
          50: 'var(--info-50)',
          100: 'var(--info-100)',
          200: 'var(--info-200)',
          300: 'var(--info-300)',
          400: 'var(--info-400)',
        },
        success: {
          50: 'var(--success-50)',
          100: 'var(--success-100)',
          200: 'var(--success-200)',
          300: 'var(--success-300)',
          400: 'var(--success-400)',
        },
        warning: {
          50: 'var(--warning-50)',
          100: 'var(--warning-100)',
          200: 'var(--warning-200)',
          300: 'var(--warning-300)',
          400: 'var(--warning-400)',
        },
        error: {
          50: 'var(--error-50)',
          100: 'var(--error-100)',
          200: 'var(--error-200)',
          300: 'var(--error-300)',
          400: 'var(--error-400)',
        },
        lavendar: {
          50: 'var(--lavendar-50)',
          100: 'var(--lavendar-100)',
          200: 'var(--lavendar-200)',
        },
        blush: {
          50: 'var(--blush-50)',
          100: 'var(--blush-100)',
          200: 'var(--blush-200)',
        },
        tangerine: {
          50: 'var(--tangerine-50)',
          100: 'var(--tangerine-100)',
          200: 'var(--tangerine-200)',
        },
        citrus: {
          50: 'var(--citrus-50)',
          100: 'var(--citrus-100)',
          200: 'var(--citrus-200)',
        },
        pistachio: {
          50: 'var(--pistachio-50)',
          100: 'var(--pistachio-100)',
          200: 'var(--pistachio-200)',
        },
        azure: {
          50: 'var(--azure-50)',
          100: 'var(--azure-100)',
          200: 'var(--azure-200)',
        },
      },
      boxShadow: {
        100: '0px 2px 4px 0px rgba(68,68,68,0.26)',
        200: '0px 8px 10px 0px rgba(68,68,68,0.08)',
        300: '0px 8px 16px 0px rgba(68,68,68,0.26)',
        400: '0px 16px 32px 0px rgba(68,68,68,0.26);',
      },
    },
  },
  plugins: [],
};
export default config;
