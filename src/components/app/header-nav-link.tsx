import { Link, type LinkProps, useLocation } from 'react-router-dom'

import { cn } from '@/lib/utils'

export type HeaderNavLinkProps = LinkProps

export function HeaderNavLink({ className, ...props }: HeaderNavLinkProps) {
  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className={cn(
        'flex items-center gap-1.5 text-muted-foreground hover:text-foreground',
        'data-[current=true]:text-foreground data-[current=true]:font-medium', // Mantém a lógica do status ativo
        className, // Garante que as classes adicionais sejam aplicadas
      )}
      {...props}
    />
  )
}
