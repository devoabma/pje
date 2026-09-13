'use client'

import { motion } from 'framer-motion'

import { PJE } from '@/components/app/pje'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

export function PjeOabma() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center space-y-4">
      <motion.div
        className="relative mb-5 flex flex-col items-center gap-2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="font-calSans text-[28px] md:text-4xl lg:text-6xl">
          Processo Judicial <span className="text-primary">Eletrônico</span>
        </h1>
        <TextGenerateEffect
          duration={0}
          filter={false}
          className="text-center font-light text-[13px] leading-snug md:w-160 lg:w-200 lg:text-base"
          words="Sistema que permite a tramitação de processos judiciais de forma totalmente digital, eliminando o uso de papel e agilizando o andamento das ações na justiça."
        />
      </motion.div>

      <div className="h-px w-80 bg-linear-to-r from-transparent via-neutral-300 to-transparent md:w-140 lg:w-160 dark:via-neutral-700" />

      <motion.h3
        className="md:text-base lg:text-base"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.9 }}
      >
        Escolha qual <span className="font-calSans font-medium text-foreground tracking-wide">&nbsp;Estado</span> e{' '}
        <span className="font-calSans font-medium text-foreground tracking-wider">Tribunal&nbsp;</span> você deseja acessar
      </motion.h3>

      {/* Componente que renderiza os estados e os tribunais. */}
      <PJE />
    </div>
  )
}
