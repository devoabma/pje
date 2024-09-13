import { WhatsApp } from '@mui/icons-material'
import { motion } from 'framer-motion'

import {
  LINK_ANYDESK_MACOS_PREVIEW,
  LINK_ANYDESK_WINDOWS_PREVIEW,
  LINK_CERTISIGN_MACOS_PREVIEW,
  LINK_CERTISIGN_WINDOWS_PREVIEW,
  LINK_CONTACT_WHATSAPP,
  LINK_JAVA_MACOS_PREVIEW,
  LINK_JAVA_WINDOWS_PREVIEW,
  LINK_PJE_CALC_TAB_WINDOWS_PREVIEW,
  LINK_PJE_CALC_WINDOWS_PREVIEW,
  LINK_PJE_PRO_MACOS_PREVIEW,
  LINK_PJE_PRO_WINDOWS_PREVIEW,
  LINK_SAFESIGN_MACOS_PREVIEW,
  LINK_SAFESIGN_WINDOWS_PREVIEW,
} from '@/utils/links-download-access'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Button } from '../ui/button'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import { FeatureSectionLink } from './feature-section-link'

const items = [
  {
    id: 'item-1',
    trigger: '1. O que é esta plataforma?',
    content: (
      <p>
        Esta plataforma, desenvolvida pelo setor de <b>Tecnologia da OAB-MA</b>,
        ajuda advogados(a) a acessarem rapidamente os tribunais com o sistema
        pJe em todo o Brasil, fornecendo links diretos para os sites dos
        tribunais.
      </p>
    ),
  },
  {
    id: 'item-2',
    trigger: '2. Acesso exclusivo para advogados(a) da OAB-MA?',
    content: (
      <p>
        A plataforma foi desenvolvida pelo setor de <b>Tecnologia da OAB-MA</b>,
        mas pode ser utilizada por advogados(a) de todo o Brasil ou fora dele,
        que necessitem de acesso ao sistema pJe.
      </p>
    ),
  },
  {
    id: 'item-3',
    trigger: '3. A OAB é responsável pelo sistema pJe?',
    content: (
      <p>
        Não, nós apenas fornecemos acesso direto aos links dos sites dos
        tribunais. Não somos responsáveis pelos sistemas dos tribunais que
        estejam offline ou com problemas de acesso.
      </p>
    ),
  },
  {
    id: 'item-4',
    trigger:
      '4. Instalação: Softwares requeridos para o Sistema Operacional Windows.',
    content: (
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <FeatureSectionLink linkPreview={LINK_JAVA_WINDOWS_PREVIEW}>
          Java Standard Edition (Java SE)
        </FeatureSectionLink>

        <FeatureSectionLink linkPreview={LINK_PJE_PRO_WINDOWS_PREVIEW}>
          Assinador PJeOffice Pro
        </FeatureSectionLink>

        <FeatureSectionLink linkPreview={LINK_SAFESIGN_WINDOWS_PREVIEW}>
          Driver Token GD-Safesign x64
        </FeatureSectionLink>

        <FeatureSectionLink linkPreview={LINK_CERTISIGN_WINDOWS_PREVIEW}>
          Driver Token SafeNet x64
        </FeatureSectionLink>
      </div>
    ),
  },
  {
    id: 'item-5',
    trigger:
      '5. Instalação: Softwares requeridos para o Sistema Operacional MacOS.',
    content: (
      <div className="mx-auto grid items-center justify-start gap-4 sm:grid-cols-2 md:grid-cols-3">
        <FeatureSectionLink linkPreview={LINK_JAVA_MACOS_PREVIEW}>
          Java Standard Edition (Java SE)
        </FeatureSectionLink>

        <FeatureSectionLink linkPreview={LINK_PJE_PRO_MACOS_PREVIEW}>
          Assinador PJeOffice Pro
        </FeatureSectionLink>

        <FeatureSectionLink linkPreview={LINK_SAFESIGN_MACOS_PREVIEW}>
          Driver Token GD-Safesign
        </FeatureSectionLink>

        <FeatureSectionLink linkPreview={LINK_CERTISIGN_MACOS_PREVIEW}>
          Driver Token SafeNet
        </FeatureSectionLink>
      </div>
    ),
  },
  {
    id: 'item-6',
    trigger:
      '6. Instalação: Software pJe-Calc para o Sistema Operacional Windows.',
    content: (
      <div className="mx-auh-12to grid items-center justify-start gap-4 sm:grid-cols-2 md:grid-cols-3">
        <FeatureSectionLink linkPreview={LINK_PJE_CALC_WINDOWS_PREVIEW}>
          pJe-Calc Cidadão x64
        </FeatureSectionLink>

        <FeatureSectionLink linkPreview={LINK_PJE_CALC_TAB_WINDOWS_PREVIEW}>
          Tabelas Auxiliares
        </FeatureSectionLink>
      </div>
    ),
  },
  {
    id: 'item-7',
    trigger:
      '7. Com dificuldade na instalação ou configuração? Solicite acesso remoto.',
    content: (
      <div className="group flex flex-col items-start justify-center space-y-4">
        <span className="group-data-[state=open]:block">
          Conte com o suporte remoto da equipe de <b>Tecnologia da OAB-MA</b>{' '}
          para configurar o seu computador de forma rápida e segura através do
          AnyDesk, garantindo agilidade no seu atendimento.
        </span>
        <AccordionContent className="mx-auto grid items-center justify-start gap-4 sm:grid-cols-2 md:grid-cols-3">
          <Button
            className="flex items-center justify-center gap-1.5 bg-green-600 font-medium shadow shadow-green-600 transition-colors hover:bg-green-700"
            asChild
          >
            <a
              href={LINK_CONTACT_WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="flex items-center text-background"
            >
              <WhatsApp className="mr-1 h-[22px] w-[22px]" />
              Solicitar suporte
            </a>
          </Button>
          <FeatureSectionLink linkPreview={LINK_ANYDESK_WINDOWS_PREVIEW}>
            Anydesk para Windows
          </FeatureSectionLink>
          <FeatureSectionLink linkPreview={LINK_ANYDESK_MACOS_PREVIEW}>
            Anydesk para MacOS
          </FeatureSectionLink>
        </AccordionContent>
      </div>
    ),
  },
]

export function FeatureSection() {
  return (
    <section className="mt-5 space-y-8 rounded-sm border bg-muted-foreground/5 px-3 md:py-12 lg:py-20">
      <motion.div
        className="mx-auto flex max-w-[58rem] flex-col items-center space-y-2 text-center max-md:mt-10"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="font-calSans text-[28px] md:text-4xl lg:text-6xl">
          Suporte ao Advogado(a)
        </h2>
        <TextGenerateEffect
          duration={0}
          filter
          className="text-xs font-medium text-muted-foreground lg:text-base"
          words="Nessa seção, você poderá esclarecer todas as suas dúvidas e como essa plataforma pode te ajudar."
        />
      </motion.div>

      <div className="mx-auto px-3 pb-8 md:max-w-[58rem]">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.9, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <AccordionItem value={item.id}>
                <AccordionTrigger className="font-bold">
                  {item.trigger}
                </AccordionTrigger>
                <AccordionContent className="text-left">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
