import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
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

        header: 'hsl(231, 20%, 27%)',

        /*buttons*/
        'accent-one-foreground':
          'hsl(160, 67%, 52%)' /*green bg-opacity 5.71%*/,
        'accent-two-foreground':
          'hsl(34, 100%, 50%)' /*orange bg-opacity 5.71%*/,
        'accent-three-foreground':
          'hsl(231, 20%, 27%)' /*dark-grey+blue bg-opacity 5.71%*/,
        delete: 'hsl(0, 80%, 63%)' /*red*/,

        muted: 'hsl(231, 36%, 63%)' /*purple+grey  moon*/,

        'sm-radius': '0.375rem',
        radius: '1.5rem',
        /*DARK MODE COLORS*/
        /*  background: 'hsl(233 30% 11%)',
        foreground: 'hsl(0 0% 100%)',

        card: 'hsl(233 31% 17%)',
        'card-foreground': 'hsl(0 0% 100%)',

        secondary: 'hsl(233 30% 21%)',
        'secondary-accent': 'hsl(231 28% 7%)',

        header: 'hsl(233 31% 17%)',

        'accent-three-foreground': 'hsl(231 75% 93%)',*/
      },
    },
  },
  plugins: [],
};
export default config;
