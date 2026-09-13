'use client'

import Link from 'next/link'
import { Fragment } from 'react'

import { navItems } from '@/components/app/nav-items'
import { ShareLink } from '@/components/app/share-link'
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export function HeaderMenu() {
  return (
    <DropdownMenuContent
      align="end"
      className="z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
    >
      {navItems.map(({ href, label, icon: Icon, iconClassName }) => (
        <Fragment key={href}>
          <DropdownMenuItem asChild className="font-medium">
            <Link href={href}>
              <Icon className={cn('mr-2 h-4 w-4', iconClassName)} />
              {label}
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
        </Fragment>
      ))}

      <DropdownMenuItem asChild>
        <ShareLink className="transition-colors hover:bg-accent hover:text-accent-foreground" />
      </DropdownMenuItem>
    </DropdownMenuContent>
  )
}
