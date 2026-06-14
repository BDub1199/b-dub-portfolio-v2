import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Brian Wagner | B-Dub — Digital Content Creator & Audio Engineer',
  description:
    'Founder of KDUB Radio. Host of The We Is Smart Podcast. Audio Engineer, Digital Content Creator, and Radio Broadcaster based in Columbus, OH.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth bg-[#0A0A0A]`}>
      <body className="bg-[#0A0A0A] text-white antialiased font-sans">
        <Nav />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
