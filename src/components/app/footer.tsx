import { Headset, LifeBuoy, MonitorCheck } from 'lucide-react'
import Link from 'next/link'

import { Logo } from '@/components/app/logo'
import { navItems } from '@/components/app/nav-items'
import { FacebookIcon, InstagramIcon, XIcon, YoutubeIcon } from '@/components/icons/brands'
import { OabWave } from '@/components/icons/oab-wave'
import {
  LINK_CONTACT_WHATSAPP,
  LINK_FB_OAB,
  LINK_INSTA_OAB,
  LINK_STATUS_SERVICES,
  LINK_X_OAB,
  LINK_YT_OAB,
} from '@/utils/links-download-access'

import { FooterColumn } from './footer-column'
import { FooterLinkDigital } from './footer-link-digital'
import { FooterLinkMenu } from './footer-link-menu'

const socialLinks = [
  { link: LINK_INSTA_OAB, label: 'Instagram da OAB-MA', icon: InstagramIcon },
  { link: LINK_X_OAB, label: 'X da OAB-MA', icon: XIcon },
  { link: LINK_YT_OAB, label: 'YouTube da OAB-MA', icon: YoutubeIcon },
  { link: LINK_FB_OAB, label: 'Facebook da OAB-MA', icon: FacebookIcon },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-28">
      {/* Onda institucional do manual da marca (capa e contracapa). */}
      <div aria-hidden className="h-14 w-full overflow-hidden sm:h-20">
        <OabWave className="h-full w-full" />
      </div>

      <div className="container py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-12">
          <div className="space-y-5">
            <Link href="/" aria-label="Ir para a página inicial" className="inline-block">
              <Logo className="h-11" />
            </Link>

            <p className="max-w-xs text-muted-foreground text-sm leading-relaxed">
              Acesso rápido e direto aos tribunais que utilizam o pJe, e aos sistemas do dia a dia da advocacia.
            </p>

            <div className="flex items-center gap-2">
              {socialLinks.map(social => (
                <FooterLinkDigital key={social.link} {...social} />
              ))}
            </div>
          </div>

          <FooterColumn title="Navegação">
            {navItems.map(({ href, label, icon, iconClassName }) => (
              <FooterLinkMenu key={href} link={href} icon={icon} iconClassName={iconClassName}>
                {label}
              </FooterLinkMenu>
            ))}
          </FooterColumn>

          <FooterColumn title="Suporte">
            <FooterLinkMenu external link={LINK_CONTACT_WHATSAPP} icon={Headset}>
              Falar com o suporte
            </FooterLinkMenu>
            <FooterLinkMenu link="/#suporte" icon={LifeBuoy}>
              Downloads e instalação
            </FooterLinkMenu>
            <FooterLinkMenu external link={LINK_STATUS_SERVICES} icon={MonitorCheck}>
              Status dos tribunais
            </FooterLinkMenu>
          </FooterColumn>
        </div>
      </div>

      <div className="border-t">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-center sm:flex-row sm:pe-16 sm:text-left">
          <p className="font-institucional text-muted-foreground text-xs">
            &copy; {year} Ordem dos Advogados do Brasil &mdash; Seccional Maranhão
          </p>
          <p className="font-institucional text-muted-foreground text-xs">Gerência de Tecnologia da Informação</p>
        </div>
      </div>
    </footer>
  )
}
