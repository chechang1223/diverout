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
  title: 'Diverout',
  description:
    'Discover a new diving experience with Diverout. Say goodbye to dull photos and handwritten logs, and upgrade your diving adventure with Diverout.',
  // icons: {
  //   icon: [
  //     { url: '/favicon/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
  //     { url: '/favicon/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
  //   ],
  //   apple: { url: '/favicon/apple-touch-icon.png', sizes: '180x180' },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
      </head>
      <body className={`${inter.className} ${poetsenOne.variable}`}>
        {children}
      </body>
    </html>
  );
}
