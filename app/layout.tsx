import Link from "next/link";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from "next/script";
import './globals.css';
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Priyansh Prajapat - Blog',
  description: '',
};

const header = (
  <header>
    <div>
      <Link href="/">
        <Image
          alt="logo"
          src="/blog/images/oyepriyansh.jpeg"
          width={50}
          height={50}
        />
        <h1>
          Priyansh's Blog
        </h1>
      </Link>
    </div>
  </header>
);

const footer = (
  <footer>
    <Link href="/">
      <h3>Priyansh Development</h3>
    </Link>
  </footer>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div>
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-LM2B0KC5LB" strategy="beforeInteractive" />
          <Script src="https://oyepriyansh.pages.dev/cdnjs/analytics/oyepriyansh.github.io.js" strategy="beforeInteractive" />
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}