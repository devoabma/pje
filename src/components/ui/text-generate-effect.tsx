'use client'

import { motion, stagger, useAnimate } from 'framer-motion'
import { useEffect } from 'react'

import { cn } from '@/lib/utils'

/** Tempo máximo que o efeito inteiro pode levar, independente do nº de palavras. */
const TOTAL_STAGGER_SECONDS = 1.2

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string
  className?: string
  filter?: boolean
  duration?: number
}) => {
  const [scope, animate] = useAnimate()
  const wordsArray = words.split(' ')
  const wordCount = wordsArray.length

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
      },
      {
        // `?? 1` e não `|| 1`: os callers passam duration={0} de propósito,
        // e `0 || 1` descartava esse valor.
        duration: duration ?? 1,
        // Limita o total do stagger: com 0.2 fixo uma frase de 25 palavras
        // levava ~5s para terminar e aparecia cortada na tela.
        delay: stagger(Math.min(0.2, TOTAL_STAGGER_SECONDS / wordCount)),
      }
    )
  }, [animate, duration, filter, wordCount])

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={cn(
                'text-center opacity-0',
                filter ? 'text-foreground dark:text-white' : '',
                className // permite sobrescrever classes passadas externamente
              )}
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          )
        })}
      </motion.div>
    )
  }

  return (
    <div className={cn('font-bold', className)}>
      <div className="text-2xl text-foreground tracking-wide">{renderWords()}</div>
    </div>
  )
}
