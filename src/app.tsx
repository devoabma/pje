import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { useTheme } from './components/theme/theme-provider'
import { router } from './router'

export function App() {
  const { theme } = useTheme()

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | OAB" />
      <RouterProvider router={router} />
      <Toaster richColors closeButton theme={theme} />
    </HelmetProvider>
  )
}
