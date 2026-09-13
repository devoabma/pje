import { Share2 } from 'lucide-react'

import { env } from '@/env'
import { cn } from '@/lib/utils'
import { buildWhatsappShareUrl } from '@/utils/whatsapp-share'

const shareUrl = buildWhatsappShareUrl(`Olá, confira a plataforma pJe OAB: ${env.NEXT_PUBLIC_MAIN_URL}`)

export function ShareLink({ className }: { className?: string }) {
  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noreferrer"
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm',
        'focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring',
        className
      )}
    >
      <Share2 className="mr-2 h-4 w-4" />
      Compartilhe
    </a>
  )
}
