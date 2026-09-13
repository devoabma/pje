import { OabMark } from '@/components/icons/oab-mark'

/**
 * Camada decorativa institucional atrás do topo da página.
 *
 * A marca sangra pelas bordas inferior e esquerda, como nas páginas do manual:
 * assim ela lê como textura e não disputa espaço com o conteúdo, que é
 * centralizado.
 *
 * A máscara de fade na base resolve um detalhe: a seção de suporte tem fundo
 * semitransparente, então sem ela a marca aparecia *através* do card. O fade
 * dispensa casar a altura desta camada com a do herói, que varia por página.
 */
export function BackgroundDecor() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[36rem] overflow-hidden [mask-image:linear-gradient(to_bottom,black_55%,transparent_92%)]"
    >
      <OabMark className="absolute -bottom-36 -left-28 w-[30rem] max-w-none text-primary opacity-[0.07] sm:-left-40 sm:w-[40rem] dark:opacity-[0.1]" />
    </div>
  )
}
