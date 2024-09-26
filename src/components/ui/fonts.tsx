import { League_Spartan } from 'next/font/google';
import { Fredoka } from 'next/font/google';

export const fontLeagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-league-spartan',
});
//font-family: "League Spartan", sans-serif;

//Don't know if we need second font (alike legue Spartan)
//It went to layout too:
export const fontFredoka = Fredoka({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-fredoka',
});
