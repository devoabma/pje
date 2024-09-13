import type { SvgIconComponent } from '@mui/icons-material'

interface FooterLinksDigitalProps {
  link: string
  icon: SvgIconComponent
}

export function FooterLinkDigital({
  icon: Icon,
  link,
}: FooterLinksDigitalProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <Icon className="transition-all ease-in-out hover:-translate-y-[1px] hover:cursor-pointer hover:text-muted-foreground" />
    </a>
  )
}
