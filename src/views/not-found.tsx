'use client'

import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <motion.div
      className="container mx-auto flex min-h-screen flex-col gap-4"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.9 }}
    >
      <div className="mx-auto flex min-h-screen max-w-5xl items-center justify-center px-8 sm:px-4">
        <div className="rounded-xl bg-muted-foreground/5 p-10 text-center">
          <h1 className="font-bold text-6xl">
            <span className="text-sky-700">4</span>
            <span>0</span>
            <span className="text-red-700">4</span>
          </h1>
          <p className="mt-4 text-xl">Página não encontrada</p>
          <p className="mt-2">A página que você está procurando não existe ou foi movida.</p>

          <Button asChild className="mt-8 rounded text-black dark:text-white">
            <Link href="/" className="px-6 py-2 font-bold shadow-sm transition">
              <ArrowLeft className="mr-2 h-4 w-4 animate-pulse" />
              Voltar para o início
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
