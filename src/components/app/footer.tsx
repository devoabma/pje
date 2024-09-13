import { Facebook, Instagram, X, YouTube } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { Gavel, MonitorCheck, Scale, UsersRound } from 'lucide-react'
import { Link } from 'react-router-dom'

import {
  LINK_FB_OAB,
  LINK_INSTA_OAB,
  LINK_X_OAB,
  LINK_YT_OAB,
} from '@/utils/links-download-access'

import LogoDark from '../../assets/logo-oabma-dark.png'
import LogoWhite from '../../assets/logo-oabma-white.png'
import { useTheme } from '../theme/theme-provider'
import { FooterLinkDigital } from './footer-link-digital'
import { FooterLinkMenu } from './footer-link-menu'

export function Footer() {
  const { theme } = useTheme()

  return (
    <div className="mt-28 flex flex-col items-center justify-center border-t">
      <div className="container flex h-48 items-center justify-between gap-2">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9 }}
        >
          <Link to="/">
            <div className="flex items-center justify-center">
              {theme === 'light' ? (
                <img src={LogoDark} className="h-12" alt="OAB Maranhão" />
              ) : (
                <img src={LogoWhite} className="h-12" alt="OAB Maranhão" />
              )}
            </div>
          </Link>

          <div className="flex items-center justify-center gap-2.5">
            <FooterLinkDigital link={LINK_INSTA_OAB} icon={Instagram} />
            <FooterLinkDigital link={LINK_X_OAB} icon={X} />
            <FooterLinkDigital link={LINK_YT_OAB} icon={YouTube} />
            <FooterLinkDigital link={LINK_FB_OAB} icon={Facebook} />
          </div>
        </motion.div>

        <motion.ul
          className="space-y-3 text-xs"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.9 }}
        >
          <FooterLinkMenu link="/" icon={Scale}>
            pJe OAB
          </FooterLinkMenu>
          <FooterLinkMenu link="/inss-digital" icon={UsersRound}>
            Inss Digital
          </FooterLinkMenu>
          <FooterLinkMenu link="/zone-criminal" icon={Gavel}>
            Zona Criminal
          </FooterLinkMenu>
          <FooterLinkMenu link="/portal-advocacia" icon={MonitorCheck}>
            Portal Advocacia
          </FooterLinkMenu>
        </motion.ul>
      </div>

      <div className="h-[1px] w-96 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 md:w-[45rem] lg:w-[60rem]" />

      <div className="container flex h-24 flex-col items-center justify-center gap-2 font-medium">
        <span className="flex items-center justify-center gap-1">
          &copy; {new Date().getFullYear()} - Gerência de Tecnologia da
          Informação
        </span>
      </div>
    </div>
  )
}
