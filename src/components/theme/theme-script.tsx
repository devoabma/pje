import { THEME_STORAGE_KEY } from './theme-store'

/**
 * Aplica o tema antes da primeira pintura para evitar o flash de tema errado
 * (FOUC). Precisa ser um script inline e bloqueante no <head>.
 */
export function ThemeScript() {
  const script = `
(function () {
  try {
    var stored = localStorage.getItem(${JSON.stringify(THEME_STORAGE_KEY)});
    var theme = stored === 'dark' || stored === 'light' || stored === 'system' ? stored : 'system';
    var resolved = theme === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;
    document.documentElement.classList.add(resolved);
    document.documentElement.style.colorScheme = resolved;
  } catch (e) {}
})();`.trim()

  return (
    // biome-ignore lint/security/noDangerouslySetInnerHtml: o script anti-flash precisa ser inline e bloqueante; o conteúdo é estático e não vem de input do usuário
    <script dangerouslySetInnerHTML={{ __html: script }} />
  )
}
