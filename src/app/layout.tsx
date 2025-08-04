import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Nimble Ship  3D Creations - Amazing 3D Printed Toys & Fidgets",
  description: 'Discover unique 3D printed toys and fidgets created by 10-year-old entrepreneur Arya. Custom designs, high-quality prints, and joy in every piece.',
  keywords: '3D printing, toys, fidgets, entrepreneur, custom designs, kids business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}