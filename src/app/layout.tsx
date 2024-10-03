import type { Metadata } from 'next';
import { Providers } from './redux/providers';
import Header from '../components/Header';

//import localFont from "next/font/local";
import './globals.css';

import { fontLeagueSpartan, fontFredoka } from '@/components/ui/fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${fontLeagueSpartan.variable} ${fontFredoka.variable} antialiased grid content-start grid-cols-1 xl:grid-cols-[6.44rem,auto]   min-h-svh text-foreground bg-background`}
        >
          <Header />
          <main
            className={`grid justify-items-center w-full h-full content-start`}
          >
            <div
              className={`grid content-center w-full max-w-[45.63rem] 2xl:max-w-[60rem] px-6 sm:px-12 md:px-0  `}
            >
              {children}
            </div>
          </main>
        </body>
      </html>
    </Providers>
  );
}
