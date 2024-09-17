import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { useTheme } from './components/theme/theme-provider'
import { router } from './router'

export function App() {
  const { theme } = useTheme()

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | OAB">
        <link rel="canonical" href="https://pje.oabma.org.br" />
      </Helmet>
      <RouterProvider router={router} />
      <Toaster richColors closeButton theme={theme} />

      <Analytics />
      <SpeedInsights />
    </HelmetProvider>
  )
}
