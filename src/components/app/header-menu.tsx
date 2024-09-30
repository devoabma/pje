import { Gavel, MonitorCheck, Scale, Share2, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { WhatsappShareButton } from 'react-share'

import { env } from '@/env'

import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '../ui/dropdown-menu'

interface HeaderMenuProps {
  openDropdown: boolean
}
export function HeaderMenu({ openDropdown }: HeaderMenuProps) {
  return (
    <>
      {openDropdown && (
        <DropdownMenuContent
          align="end"
          className="z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md"
        >
          <Link to="/">
            <DropdownMenuItem className="font-medium">
              <Scale className="mr-2 h-5 w-5" />
              pJe OAB
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />

          <Link to="/inss-digital">
            <DropdownMenuItem className="font-medium">
              <UsersRound className="mr-2 h-4 w-4" />
              Inss Digital
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />

          <Link to="/zone-criminal">
            <DropdownMenuItem className="font-medium">
              <Gavel className="mr-2 h-4 w-4" />
              Área Criminal
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />

          <Link to="/portal-advocacia">
            <DropdownMenuItem className="font-medium">
              <MonitorCheck className="mr-2 h-4 w-4" />
              Portal Advocacia
            </DropdownMenuItem>
          </Link>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <WhatsappShareButton
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm !font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              // Definir url de produção para envio via WhatsApp
              url={env.VITE_MAIN_URL}
            >
              <Share2 className="mr-2 h-4 w-4" />
              Compartilhe
            </WhatsappShareButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </>
  )
}
