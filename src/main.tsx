import './global.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './app'
import { ThemeProvider } from './components/theme/theme-provider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider storageKey="@pje-theme" defaultTheme="light">
      <App />
    </ThemeProvider>
  </StrictMode>,
)
