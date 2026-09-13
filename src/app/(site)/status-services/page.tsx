import type { Metadata } from 'next'

import { StatusServices } from '@/views/status-services'

export const metadata: Metadata = {
  title: 'Status dos Serviços',
  description: 'Acompanhe em tempo real a disponibilidade dos serviços e tribunais.',
  alternates: { canonical: '/status-services' },
}

export default function Page() {
  return <StatusServices />
}
