import { type Metadata, type Viewport } from 'next'
import { Rethink_Sans } from 'next/font/google'

import '@/styles/tailwind.css'

const description =
  "Rettel was an AI news curator. It's no longer running."

export const metadata: Metadata = {
  metadataBase: new URL('https://rettel.in'),
  title: 'Rettel is offline',
  description,
  openGraph: {
    type: 'website',
    url: 'https://rettel.in/',
    siteName: 'Rettel',
    title: 'Rettel has signed off',
    description,
    images: [
      {
        url: 'https://rettel.in/og.png',
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: 'Rettel has signed off.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rettel has signed off',
    description,
    images: ['https://rettel.in/og.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

const rethinkSans = Rethink_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  variable: '--font-rethink-sans',
  adjustFontFallback: false,
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`bg-black font-sans ${rethinkSans.variable}`}
    >
      <body className="m-0">{children}</body>
    </html>
  )
}
