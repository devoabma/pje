import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { ExternalLink, ScreenShare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LINK_SEI } from '@/utils/links-download-access'

export function Sei() {
  return (
    <div className="mt-4 flex flex-col items-center justify-center space-y-4">
      <Helmet title="Sei" />

      <motion.div
        className="relative mb-5 flex flex-col items-center gap-2"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="font-calSans text-[28px] md:text-4xl lg:text-6xl">
          Sistema Eletrônico de <span className="text-primary">Informações</span>
        </h1>
        <TextGenerateEffect
          duration={0}
          filter={false}
          className="text-center text-[13px] font-light leading-snug md:w-[40rem] lg:w-[50rem] lg:text-base"
          words="Os processos administrativos do Conselho Nacional de Justiça/CNJ são gerados por meio do Sistema Eletrônico de Informações (SEI), promovendo celeridade, economicidade, segurança e transparência."
        />
      </motion.div>

      <div className="h-[1px] w-80 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 md:w-[35rem] lg:w-[40rem]" />

      <div className="relative flex flex-col items-start space-y-7">
        <div className="flex w-[20rem] flex-col items-start justify-center gap-2.5 md:w-[25rem] lg:w-[30rem]">
          <label
            htmlFor="access"
            className="inline-flex gap-2 text-left font-medium"
          >
            <ScreenShare className="h-5 w-5" />
            Clique aqui para acessar o sistema
          </label>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full"
            href={LINK_SEI}
            id="access"
          >
            <Button type="button" className="w-full font-bold">
              Acessar
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
