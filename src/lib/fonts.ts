import { Barlow, Barlow_Semi_Condensed, Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

/**
 * Tipografia institucional — Manual de Identidade Visual da OAB (p.12 a p.15).
 *
 * O manual define duas famílias oficiais: Barlow e Gotham HTF. A Gotham HTF é
 * licenciada (Hoefler&Co) e não está disponível publicamente, então o papel
 * dela é cumprido pela Montserrat, a substituta livre mais próxima em
 * construção geométrica. Se a OAB-MA licenciar a Gotham, basta trocar
 * `fontInstitucional` por um localFont apontando para os .woff2.
 */

/** Família principal do manual: corpo de texto e interface. */
export const fontSans = Barlow({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-barlow',
})

/** Papel da Gotham HTF: assinaturas e complementos institucionais (p.15, p.16). */
export const fontInstitucional = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

/** Barlow Semi Condensed Bold: tipologia do lockup da marca (p.14, p.19). */
export const fontCondensed = Barlow_Semi_Condensed({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
  variable: '--font-barlow-condensed',
})

/** Fonte de display do produto — fora do manual, mantida por decisão do projeto. */
export const fontCalSans = localFont({
  src: '../assets/fonts/CalSans-SemiBold.woff2',
  display: 'swap',
  weight: '800',
  style: 'normal',
  variable: '--font-cal-sans',
})
