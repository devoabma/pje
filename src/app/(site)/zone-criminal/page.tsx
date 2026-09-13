import type { Metadata } from 'next'

import { ZoneCriminal } from '@/views/zone-criminal'

export const metadata: Metadata = {
  title: 'Área Criminal',
  description: 'Acesso aos sistemas da área criminal: SEEU e SIISP.',
  alternates: { canonical: '/zone-criminal' },
}

export default function Page() {
  return <ZoneCriminal />
}
