import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import { PJE } from '@/components/app/pje'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'

export function PjeOabma() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center space-y-4">
      <Helmet title="pJe" />

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
          className="text-center text-[13px] font-light leading-snug md:w-[40rem] lg:w-[50rem] lg:text-base"
          words="Sistema que permite a tramitação de processos judiciais de forma totalmente digital, eliminando o uso de papel e agilizando o andamento das ações na justiça."
        />
      </motion.div>

      <div className="h-[1px] w-80 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 md:w-[35rem] lg:w-[40rem]" />

      <motion.h3
        className="md:text-base lg:text-base"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.9 }}
      >
        Escolha qual{' '}
        <span className="font-calSans font-medium tracking-wide text-foreground">
          &nbsp;Estado
        </span>{' '}
        e{' '}
        <span className="font-calSans font-medium tracking-wider text-foreground">
          Tribunal&nbsp;
        </span>{' '}
        você deseja acessar
      </motion.h3>

      {/* Componente que renderiza os estados e os tribunais. */}
      <PJE />
    </div>
  )
}
