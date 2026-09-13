'use client'

import { AlignJustify, X } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

import { Logo } from '@/components/app/logo'
import { navItems } from '@/components/app/nav-items'
import { ShareLink } from '@/components/app/share-link'
import { ModeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

import { HeaderMenu } from './header-menu'
import { HeaderNavLink } from './header-nav-link'

export function Header() {
  const [openDropdown, setOpenDropdown] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-16 items-center gap-4">
        <Link href="/" aria-label="Ir para a página inicial" className="shrink-0">
          <Logo priority className="h-9 sm:h-11" />
        </Link>

        <nav className="ml-6 hidden h-full flex-1 items-center gap-6 lg:flex">
          {navItems.map(({ href, label, icon: Icon, iconClassName }) => (
            <HeaderNavLink key={href} href={href}>
              <Icon className={cn('size-4', iconClassName)} />
              {label}
            </HeaderNavLink>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:gap-3">
          <ModeToggle />

          <Separator orientation="vertical" className="hidden h-6 lg:block" />

          <ShareLink className="hidden h-9 rounded-md border border-input px-4 transition-colors hover:bg-accent hover:text-accent-foreground lg:inline-flex" />

          <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label={openDropdown ? 'Fechar menu' : 'Abrir menu'}
                className="lg:hidden"
              >
                {openDropdown ? <X className="size-5" /> : <AlignJustify className="size-5" />}
              </Button>
            </DropdownMenuTrigger>

            <HeaderMenu />
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
