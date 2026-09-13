import type { Metadata } from 'next'

import { PjeOabma } from '@/views/pje-oabma'

export const metadata: Metadata = {
  title: 'pJe',
  description: 'Acesse rapidamente os tribunais que utilizam o Processo Judicial Eletrônico em todo o Brasil.',
  alternates: { canonical: '/' },
}

export default function Page() {
  return <PjeOabma />
}
