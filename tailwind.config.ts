import type { Config } from 'tailwindcss';
import tailwindScrollbar from 'tailwind-scrollbar';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'hsl(240, 27%, 98%)',
        foreground: 'hsl(231, 28%, 7%)' /*dark text*/,

        card: 'hsl(0, 0%, 100%)',
        'card-foreground': 'hsl(231, 23%, 61%)' /*light-grey text*/,

        secondary:
          'hsl(231, 67%, 99%)' /*light-blue on view invoice=>top-card*/,
        'secondary-accent': 'hsl(231, 20%, 27%)',

        primary: 'hsl(252, 94%, 67%)' /*purple*/,
        'primary-foreground': 'hsl(0, 0%, 100%)',
        'primary-hover': 'hsl(252, 100%, 73%)',

        header: 'hsl(231, 20%, 27%)',

        /*status*/
        'accent-one-foreground':
          'hsl(160, 67%, 52%)' /*green bg-opacity 5.71%*/,
        'accent-two-foreground':
          'hsl(34, 100%, 50%)' /*orange bg-opacity 5.71%*/,
        'accent-three-foreground':
          'hsl(231, 20%, 27%)' /*dark-grey+blue bg-opacity 5.71%*/,

        delete: 'hsl(0, 80%, 63%)' /*red*/,
        'delete-muted': 'hsl(0, 100%, 80%)',

        muted: 'hsl(231, 36%, 63%)' /*purple+grey  moon*/,
        'muted-darker': 'hsl(231, 75%, 93%)',
        'dark-background': 'hsl(233, 30%, 11%)',
        'dark-header': 'hsl(233, 31%, 17%)',
        'dark-filter': 'hsl(233, 30%, 21%)',

        /*DARK MODE COLORS*/
        /*  background: 'hsl(233 30% 11%)',
        foreground: 'hsl(0 0% 100%)',

        card: 'hsl(233 31% 17%)',
        'card-foreground': 'hsl(0 0% 100%)',

        
        'secondary-accent': 'hsl(231 28% 7%)',

        header: 'hsl(233 31% 17%)',

        'accent-three-foreground': 'hsl(231 75% 93%)',*/
      },
      fontSize: {
        sm13: '0.8125rem',
        sm15: '0.9375rem',
      },
      borderRadius: {
        b20: '1.25rem',
      },
      height: {
        h18: '4.5rem',
      },
      traking: {
        em0008: '-0.008em',
        em0016: '-0.016em',
        em0031: '-0.031em',
      },
      leading: {
        sm5: '1.125rem',
        sm6: '1.38rem',
        sm9: '2.07rem',
        sm4: '0.94rem',
      },
      boxShadow: {
        smsh: '0px 10px 10px -10px hsl(231, 38%, 45%, 0.1)',
        bsh: '0px 10px 20px 0px hsl(231, 38%, 45%, 0.25)',
        shadowUp: '0px -20px 20px 0px hsla(231, 38%, 45%, 0.1)',
        'dark-bsh': '0px 10px 20px 0px hsla(0, 0%, 0%, 0.25)',
      },
    },
  },
  plugins: [tailwindScrollbar],
};
export default config;
