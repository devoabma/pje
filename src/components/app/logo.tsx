import Image from 'next/image'

import LogoDark from '@/assets/logo-oabma-dark.png'
import LogoWhite from '@/assets/logo-oabma-white.png'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  priority?: boolean
}

/**
 * A troca clara/escura é feita por CSS (classe `dark` no <html>), o que evita
 * mismatch de hidratação e flash ao carregar a página.
 *
 * O `sizes` é obrigatório aqui: sem ele o next/image assume largura de viewport
 * inteira e passa a servir o PNG em até 3840px para renderizar a 48px de altura.
 */
export function Logo({ className, priority = false }: LogoProps) {
  return (
    <>
      <Image
        src={LogoDark}
        alt="OAB Maranhão"
        priority={priority}
        sizes="176px"
        className={cn('w-auto dark:hidden', className)}
      />
      <Image
        src={LogoWhite}
        alt="OAB Maranhão"
        priority={priority}
        sizes="176px"
        className={cn('hidden w-auto dark:block', className)}
      />
    </>
  )
}
