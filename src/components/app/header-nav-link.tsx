'use client'

import Link, { type LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

export type HeaderNavLinkProps = LinkProps & Omit<ComponentProps<'a'>, 'href' | keyof LinkProps>

export function HeaderNavLink({ className, ...props }: HeaderNavLinkProps) {
  const pathname = usePathname()
  const isCurrent = pathname === props.href

  return (
    <Link
      aria-current={isCurrent ? 'page' : undefined}
      data-current={isCurrent}
      className={cn(
        'relative flex h-full items-center gap-1.5 text-muted-foreground text-sm transition-colors',
        'hover:text-foreground data-[current=true]:font-medium data-[current=true]:text-foreground',
        // Indicador da rota ativa: filete na cor institucional, rente à borda
        // inferior do header.
        'after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform',
        'data-[current=true]:after:scale-x-100',
        className
      )}
      {...props}
    />
  )
}
