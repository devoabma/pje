import type { LucideProps } from 'lucide-react'
import type { ComponentType, ReactNode } from 'react'

interface FooterLinkMenuProps {
  link: string
  children: ReactNode
  icon: ComponentType<LucideProps>
}

export function FooterLinkMenu({
  children,
  icon: Icon,
  link,
}: FooterLinkMenuProps) {
  return (
    <a href={link} className="flex items-center justify-end">
      <li className="flex items-center justify-end gap-1.5 font-medium transition-all ease-in-out hover:-translate-y-[1px] hover:cursor-pointer hover:text-muted-foreground max-sm:text-xs">
        <Icon className="h-4 w-4 max-sm:h-4 max-sm:w-4" />
        {children}
      </li>
    </a>
  )
}
