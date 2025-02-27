import { motion } from 'framer-motion'
import { Activity, ExternalLink } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { LINK_STATUS_SERVICES } from '@/utils/links-download-access'

export function StatusServices() {
  return (
    <motion.div
      className="mt-4 flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.9 }}
    >
      <Helmet title="Status dos Serviços" />

      <div className="flex mb-5 flex-col items-center gap-2">
        <h1 className="font-calSans text-[28px] md:text-4xl lg:text-6xl">
          Status dos <span className="text-primary">Serviços</span>
        </h1>
        <TextGenerateEffect
          duration={0}
          filter={false}
          className="text-center text-[13px] font-light leading-snug md:w-[40rem] lg:w-[50rem] lg:text-base"
          words="A página de status do TJMA exibe, em tempo real, a disponibilidade dos sistemas (online, instável ou offline) e, em caso de falha, fornece links para relatórios e certidões de indisponibilidade."
        />
      </div>

      <div className="h-[1px] w-80 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 md:w-[35rem] lg:w-[40rem]" />

      <div className="flex flex-col items-start space-y-7">
        <div className="flex w-[20rem] flex-col items-start justify-center gap-2.5 md:w-[25rem] lg:w-[30rem]">
          <label
            htmlFor="status-services"
            className="inline-flex gap-2 text-left font-medium"
          >
            <Activity className="h-5 w-5 text-green-500" />
            Status dos Serviços
          </label>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full"
            href={LINK_STATUS_SERVICES}
            id="status-services"
          >
            <Button type="button" className="w-full font-bold">
              Acessar
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}
