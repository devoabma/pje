import './globals.css'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

import { ThemeScript } from '@/components/theme/theme-script'
import { env } from '@/env'
import { fontCalSans, fontCondensed, fontInstitucional, fontSans } from '@/lib/fonts'

import { Providers } from './providers'

const title = 'pJe OAB'
const description =
  'Utilize a plataforma do pJe OAB-MA, ela oferece um acesso mais rápido e ágil a todos os tribunais que utilizam o pJe, confira você mesmo.'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_MAIN_URL),
  title: {
    default: title,
    template: '%s | OAB',
  },
  description,
  applicationName: title,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: title,
    title,
    description,
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    other: [{ rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' }],
  },
  manifest: '/site.webmanifest',
  other: {
    'google-adsense-account': 'ca-pub-6158991872487770',
    'msapplication-TileColor': '#da532c',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#020817' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      className={`${fontSans.variable} ${fontInstitucional.variable} ${fontCondensed.variable} ${fontCalSans.variable}`}
      lang="pt-BR"
      suppressHydrationWarning
    >
      <head>
        <ThemeScript />
      </head>
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
