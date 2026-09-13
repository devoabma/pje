import type { Metadata } from 'next'

import { Sei } from '@/views/sei'

export const metadata: Metadata = {
  title: 'SEI',
  description: 'Acesso ao Sistema Eletrônico de Informações (SEI).',
  alternates: { canonical: '/sei' },
}

export default function Page() {
  return <Sei />
}
