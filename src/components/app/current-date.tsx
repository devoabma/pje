'use client'

import { Clock } from 'lucide-react'

import { useIsMounted } from '@/hooks/use-is-mounted'
import { getCurrentDateInfo } from '@/utils/get-current-date-info'

/**
 * Calculado no cliente de propósito: em página estática a data ficaria
 * congelada no momento do build.
 */
export function CurrentDate() {
  const isMounted = useIsMounted()
  const date = isMounted ? getCurrentDateInfo() : null

  return (
    <p className="flex min-h-5 items-center justify-end gap-1 text-[13px] text-muted-foreground italic">
      {date ? (
        <>
          <Clock className="h-4 w-4" />
          Hoje, {date.day} de {date.fullMonth} de {date.year}
        </>
      ) : null}
    </p>
  )
}
