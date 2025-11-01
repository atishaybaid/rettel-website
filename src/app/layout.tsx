import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: {
    template: '🏪 %s - Pass Dukan',
    default: '🏪 Pass Dukan - Grocery and Sabji made simple',
  },
  description:
    "Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don't get audited.",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="min-h-full">
        <div className="relative flex min-h-full flex-col">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
