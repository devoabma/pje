import type { SVGProps } from 'react'

/**
 * Onda institucional que percorre as peças do Manual de Identidade Visual
 * (capa e contracapa). É elemento gráfico decorativo — não é a marca —
 * desenhado com as cores oficiais do manual (p.5).
 *
 * A proporção é de faixa e o `preserveAspectRatio="none"` deixa a curva
 * acompanhar a largura do container, que é o comportamento desejado aqui.
 */
export function OabWave(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 1200 120" fill="none" aria-hidden focusable="false" preserveAspectRatio="none" {...props}>
      <title>Onda institucional OAB</title>

      {/* Faixa azul */}
      <path d="M0 0 H1200 V52 C900 97 300 7 0 52 Z" className="fill-oab-blue-dark" />

      {/* Faixa vermelha */}
      <path d="M0 64 C300 19 900 109 1200 64 V94 C900 139 300 49 0 94 Z" className="fill-oab-red-solid" />

      {/* Filete vermelho acompanhando a curva */}
      <path d="M0 108 C300 63 900 153 1200 108" className="stroke-oab-red" strokeWidth={2} vectorEffect="non-scaling-stroke" />
    </svg>
  )
}
