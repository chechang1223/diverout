import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const poetsenOne = localFont({
  src: '../public/fonts/PoetsenOne-Regular.ttf',
  display: 'swap',
  variable: '--font-poetsen-one',
});

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
    <html lang="en">
      <body className={`${inter.className} ${poetsenOne.variable}`}>{children}</body>
    </html>
  );
}
