import type { Metadata } from 'next'
import { Inter, Fredoka } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' })

export const metadata: Metadata = {
  title: "Arya's 3D Creations - Amazing Toys & Fidgets by a 10-Year-Old Maker",
  description: 'Discover unique 3D printed toys and fidgets created by Arya, a talented 10-year-old entrepreneur. Custom designs, quality prints, and endless fun!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fredoka.variable} font-sans`}>{children}</body>
    </html>
  )
}