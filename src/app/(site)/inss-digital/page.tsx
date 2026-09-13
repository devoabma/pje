import type { Metadata } from 'next'

import { InssDigital } from '@/views/inss-digital'

export const metadata: Metadata = {
  title: 'INSS Digital',
  description: 'Acesso ao INSS Digital (GERID) para advogados e advogadas.',
  alternates: { canonical: '/inss-digital' },
}

export default function Page() {
  return <InssDigital />
}
