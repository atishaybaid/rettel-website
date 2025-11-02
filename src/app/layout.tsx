import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: {
    template: 'Rettel — Your AI News Curator',
    default: 'Rettel — Your AI News Curatore',
  },
  description:
    'Rettel is your personal AI content curation agent. Get the most relevant news, blogs, and podcasts across your favorite topics — delivered straight to your inbox. Stay informed, effortlessly.',
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
      <head>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rettel.in/" />
        <meta property="og:title" content="Rettel — Your AI News Curator" />
        <meta
          property="og:description"
          content="Rettel uses AI to curate and summarize the most relevant news, blogs, and podcasts — all tailored to your interests. Stay informed, effortlessly."
        />
        <meta
          property="og:image"
          content="https://rettel.in/assets/og-image.png"
        />
        <meta property="og:image:alt" content="Rettel — AI News Curator" />
        <meta property="og:site_name" content="Rettel" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="theme-color" content="#0F172A" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://rettel.in/" />
        <meta name="twitter:title" content="Rettel — Your AI News Curator" />
        <meta
          name="twitter:description"
          content="Let Rettel’s AI agent curate the best content from across the web — personalized for you."
        />
        <meta
          name="twitter:image"
          content="https://rettel.in/assets/og-image.png"
        />
        <meta
          name="twitter:image:alt"
          content="Rettel AI — Personalized News Curator"
        />
        <meta name="twitter:creator" content="@rettel_ai" />
      </head>
      <body className="min-h-full">
        <div className="relative flex min-h-full flex-col">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
      </body>
    </html>
  )
}
