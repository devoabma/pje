'use client'

import type { ReactNode } from 'react'
import { Toaster } from 'sonner'

import { ThemeProvider, useTheme } from '@/components/theme/theme-provider'

function ThemedToaster() {
  const { resolvedTheme } = useTheme()

  return <Toaster richColors closeButton theme={resolvedTheme} />
}

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <ThemedToaster />
    </ThemeProvider>
  )
}
