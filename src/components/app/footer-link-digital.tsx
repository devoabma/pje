import type { BrandIcon } from '@/components/icons/brands'

interface FooterLinkDigitalProps {
  link: string
  label: string
  icon: BrandIcon
}

export function FooterLinkDigital({ icon: Icon, label, link }: FooterLinkDigitalProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Icon className="size-[18px]" />
    </a>
  )
}
