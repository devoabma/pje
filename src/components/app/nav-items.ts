import { Activity, Gavel, type LucideIcon, MonitorCheck, Scale, UsersRound } from 'lucide-react'

export interface NavItem {
  href: string
  label: string
  icon: LucideIcon
  iconClassName?: string
}

/** Fonte única de verdade da navegação (header, menu mobile e footer). */
export const navItems: NavItem[] = [
  { href: '/', label: 'pJe OAB', icon: Scale },
  { href: '/inss-digital', label: 'INSS Digital', icon: UsersRound },
  { href: '/zone-criminal', label: 'Área Criminal', icon: Gavel },
  { href: '/sei', label: 'SEI', icon: MonitorCheck },
  { href: '/portal-advocacia', label: 'Portal Advocacia', icon: MonitorCheck },
  {
    href: '/status-services',
    label: 'Status',
    icon: Activity,
    iconClassName: 'text-green-500 animate-pulse',
  },
]
