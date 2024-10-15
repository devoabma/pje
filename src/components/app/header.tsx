import { motion } from 'framer-motion'
import {
  AlignJustify,
  Gavel,
  MonitorCheck,
  Scale,
  Share2,
  UsersRound,
  X,
} from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { WhatsappShareButton } from 'react-share'

import { env } from '@/env'

import LogoDark from '../../assets/logo-oabma-dark.png'
import LogoWhite from '../../assets/logo-oabma-white.png'
import { useTheme } from '../theme/theme-provider'
import { ModeToggle } from '../theme/theme-toggle'
import { Button } from '../ui/button'
import { DropdownMenu, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Separator } from '../ui/separator'
import { HeaderMenu } from './header-menu'
import { HeaderNavLink } from './header-nav-link'

export function Header() {
  const [openDropdown, setOpenDropdown] = useState(false)

  const { theme } = useTheme()

  function handleNavigation() {
    setOpenDropdown(!openDropdown)
  }

  return (
    <div className="flex items-center justify-center border-b">
      <motion.div
        className="container relative flex h-16 items-center justify-between gap-2"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <Link to="/">
          {/* Logo OAB Maranhão */}
          <div className="flex items-center justify-center">
            {theme === 'light' ? (
              <img src={LogoDark} className="h-12 mr-2" alt="OAB Maranhão" />
            ) : theme === 'dark' ? (
              <img src={LogoWhite} className="h-12 mr-2" alt="OAB Maranhão" />
            ) : theme === 'system' &&
              window.matchMedia('(prefers-color-scheme: dark)').matches ? (
              <img src={LogoWhite} className="h-12 mr-2" alt="OAB Maranhão" />
            ) : (
              <img src={LogoDark} className="h-12 mr-2" alt="OAB Maranhão" />
            )}
          </div>
        </Link>

        <Separator orientation="vertical" className="h-6" />

        <div className="ml-auto flex items-center">
          {/* Header responsivo */}
          <div className="absolute right-[5rem] flex items-center lg:hidden">
            <ModeToggle />
          </div>

          <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
            <DropdownMenuTrigger asChild>
              <Button
                type="button"
                onClick={handleNavigation}
                className="absolute right-7 flex select-none items-center rounded-none bg-transparent p-0 text-foreground shadow-none transition-colors hover:bg-transparent hover:text-muted-foreground lg:hidden"
              >
                {!openDropdown ? (
                  <AlignJustify className="h-8 w-8" />
                ) : (
                  <X className="h-8 w-8" />
                )}
              </Button>
            </DropdownMenuTrigger>

            <HeaderMenu openDropdown={openDropdown} />
          </DropdownMenu>
        </div>

        {/* Header sem responsividade */}
        <div className="flex flex-1 items-center justify-between max-lg:hidden">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <HeaderNavLink to="/">
              <Scale className="h-5 w-5" />
              pJe OAB
            </HeaderNavLink>
            <HeaderNavLink to="/inss-digital">
              <UsersRound className="h-4 w-4" />
              INSS Digital
            </HeaderNavLink>
            <HeaderNavLink to="/zone-criminal">
              <Gavel className="h-5 w-5" />
              Área Criminal
            </HeaderNavLink>
            <HeaderNavLink to="/portal-advocacia">
              <MonitorCheck className="h-4 w-4" />
              Portal Advocacia
            </HeaderNavLink>
          </nav>

          <div className="flex items-center space-x-4">
            <ModeToggle />

            <Separator orientation="vertical" className="h-6" />

            <div className="rounded-md border border-input transition-colors hover:bg-accent hover:text-accent-foreground">
              <WhatsappShareButton
                className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-md !px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                // Definir url de produção para envio via WhatsApp
                url={env.VITE_MAIN_URL}
              >
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhe
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
