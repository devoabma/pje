import type { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

interface FooterLinkMenuProps {
  link: string
  children: ReactNode
  icon: LucideIcon
  iconClassName?: string
  external?: boolean
}

export function FooterLinkMenu({ children, icon: Icon, iconClassName, link, external = false }: FooterLinkMenuProps) {
  const content = (
    <>
      <Icon
        className={cn('size-4 shrink-0 text-muted-foreground/70 transition-colors group-hover:text-primary', iconClassName)}
      />
      {children}
    </>
  )

  const className = 'group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground'

  return (
    <li>
      {external ? (
        <a href={link} target="_blank" rel="noreferrer" className={className}>
          {content}
        </a>
      ) : (
        <Link href={link} className={className}>
          {content}
        </Link>
      )}
    </li>
  )
}
