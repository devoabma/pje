import { motion } from 'framer-motion'
import { ExternalLink, ScreenShare } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { LINK_SEEU, LINK_SIISP } from '@/utils/links-download-access'

export function ZoneCriminal() {
  return (
    <motion.div
      className="mt-4 flex flex-col items-center justify-center space-y-4"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.9 }}
    >
      <Helmet title="Zona Criminal" />

      <div className="flex flex-col items-center gap-2">
        <h1 className="font-calSans text-[28px] md:text-4xl lg:text-6xl">
          Zona de Sistemas <span className="text-primary">Criminais</span>
        </h1>
        <TextGenerateEffect
          duration={0}
          filter={false}
          className="text-center text-[13px] font-light leading-snug md:w-[40rem] lg:w-[50rem] lg:text-base"
          words="Explore os sistemas de gestão de processos criminais: SEEU e SIISP. Com essas ferramentas, você garante mais eficiência, transparência e controle no acompanhamento de processos judiciais, contribuindo para uma justiça mais rápida e acessível."
        />
      </div>

      <div className="h-[1px] w-80 bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700 md:w-[35rem] lg:w-[40rem]" />

      <div className="flex flex-col items-start space-y-7">
        <div className="flex w-[20rem] flex-col items-start justify-center gap-2.5 md:w-[25rem] lg:w-[30rem]">
          <label
            htmlFor="register"
            className="flex items-center justify-center gap-2 text-left font-medium"
          >
            <ScreenShare className="h-5 w-5" />
            SEEU - Sistema Eletrônico de Execução
          </label>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full"
            href={LINK_SEEU}
            id="register"
          >
            <Button type="button" className="w-full font-bold">
              Acessar
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>

        <div className="flex w-[20rem] flex-col items-start justify-center gap-2 md:w-[25rem] lg:w-[30rem]">
          <label
            htmlFor="access"
            className="flex items-center justify-center gap-2 text-left font-medium"
          >
            <ScreenShare className="h-5 w-5" />
            SIISP - Sistema de Segurança Prisional
          </label>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full"
            href={LINK_SIISP}
            id="access"
          >
            <Button type="button" className="w-full font-bold">
              Acessar
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      {/* Caso um dia volte o acesso a senha, esse recurso já estará disponível */}
      {/* <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-[20rem] items-center justify-end gap-1 font-medium text-muted-foreground hover:text-foreground md:w-[25rem] lg:w-[30rem]"
        href={LINK_RESET_PASSWORD_GERID}
      >
        <Lock className="h-4 w-4" />
        Esqueci minha senha
      </a> */}
    </motion.div>
  )
}
