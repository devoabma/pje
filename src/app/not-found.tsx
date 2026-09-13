import type { Metadata } from 'next'

import { NotFound } from '@/views/not-found'

export const metadata: Metadata = {
  title: '404',
  description: 'Página não encontrada.',
}

export default function NotFoundPage() {
  return <NotFound />
}
