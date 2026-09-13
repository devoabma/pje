export type Theme = 'dark' | 'light' | 'system'
export type ResolvedTheme = Exclude<Theme, 'system'>

export const THEME_STORAGE_KEY = '@pje-theme'

const DARK_QUERY = '(prefers-color-scheme: dark)'

const listeners = new Set<() => void>()

function isTheme(value: unknown): value is Theme {
  return value === 'dark' || value === 'light' || value === 'system'
}

function emit() {
  for (const listener of listeners) listener()
}

/**
 * Store externo do tema: a fonte de verdade é o localStorage + o
 * `prefers-color-scheme`, ambos fora do React. Consumido via
 * `useSyncExternalStore`, o que evita setState dentro de efeito e mantém
 * servidor e cliente consistentes na hidratação.
 */
export const themeStore = {
  subscribe(listener: () => void) {
    listeners.add(listener)

    const media = window.matchMedia(DARK_QUERY)

    media.addEventListener('change', emit)
    window.addEventListener('storage', emit)

    return () => {
      listeners.delete(listener)
      media.removeEventListener('change', emit)
      window.removeEventListener('storage', emit)
    }
  },

  getTheme(): Theme {
    try {
      const stored = window.localStorage.getItem(THEME_STORAGE_KEY)

      return isTheme(stored) ? stored : 'system'
    } catch {
      return 'system'
    }
  },

  getServerTheme(): Theme {
    return 'system'
  },

  getResolvedTheme(): ResolvedTheme {
    const theme = themeStore.getTheme()

    if (theme !== 'system') return theme

    return window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light'
  },

  getServerResolvedTheme(): ResolvedTheme {
    return 'light'
  },

  setTheme(theme: Theme) {
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    } catch {
      // localStorage indisponível (modo privativo): segue só em memória.
    }

    emit()
  },
}

export function applyTheme(resolved: ResolvedTheme) {
  const root = document.documentElement

  root.classList.remove('light', 'dark')
  root.classList.add(resolved)
  root.style.colorScheme = resolved
}
