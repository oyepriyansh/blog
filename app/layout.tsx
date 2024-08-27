import Link from "next/link";
import Script from "next/script";
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from "next/image";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Priyansh Prajapat - Blog',
  description: '',
};

const header = (
  <header>
    <div className="text-center py-6 my-6 rounded-md shadow-md shadow-black ">
      <Link href="/">
        <Image
          alt="logo"
          src="/blog/images/oyepriyansh.jpeg"
          width={50}
          height={50}
          className="mx-auto rounded-full aspect-square object-cover"
        />
        <h1 className="text-3xl font-bold mt-2 title">
          Priyansh's Blog
        </h1>
      </Link>
    </div>
  </header>
);

const footer = (
  <footer className="border-t border-gray-700 mt-12 py-6 text-center text-gray-400">
    <h3 className="hover:text-slate-300 cursor-pointer text-sm">Priyansh Prajapat © 2024 | All Rights Reserved</h3>
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
        <div className="mx-auto max-w-2xl px-6">
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