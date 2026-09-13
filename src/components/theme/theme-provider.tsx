'use client'

import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from 'react'

import { applyTheme, type ResolvedTheme, type Theme, themeStore } from './theme-store'

type ThemeProviderState = {
  theme: Theme
  resolvedTheme: ResolvedTheme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const theme = useSyncExternalStore(themeStore.subscribe, themeStore.getTheme, themeStore.getServerTheme)

  const resolvedTheme = useSyncExternalStore(themeStore.subscribe, themeStore.getResolvedTheme, themeStore.getServerResolvedTheme)

  // Sincroniza o DOM com o tema resolvido. O primeiro paint já vem correto
  // graças ao <ThemeScript />; aqui tratamos as trocas posteriores.
  useEffect(() => {
    applyTheme(resolvedTheme)
  }, [resolvedTheme])

  const setTheme = useCallback((next: Theme) => {
    themeStore.setTheme(next)
  }, [])

  const value = useMemo(() => ({ theme, resolvedTheme, setTheme }), [theme, resolvedTheme, setTheme])

  return <ThemeProviderContext.Provider value={value}>{children}</ThemeProviderContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}
