import type { Metadata } from 'next'

import { PortalAdvocacia } from '@/views/portal-advocacia'

export const metadata: Metadata = {
  title: 'Portal Advocacia',
  description: 'Acesso ao Portal da Advocacia.',
  alternates: { canonical: '/portal-advocacia' },
}

export default function Page() {
  return <PortalAdvocacia />
}
