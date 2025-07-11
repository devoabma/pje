import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import { Button } from '@/components/ui/button'

export function NotFound() {
  return (
    <motion.div
      className="min-h-screen container mx-auto flex flex-col gap-4"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.9 }}
    >
      <Helmet title="404 |" />

      <div className="flex items-center justify-center min-h-screen px-8 sm:px-4 max-w-5xl mx-auto">
        <div className="text-center bg-muted-foreground/5 p-10 rounded-xl">
          <h1 className="text-6xl font-bold">
            <span className="text-sky-700">4</span>
            <span>0</span>
            <span className="text-red-700">4</span>
          </h1>
          <p className="mt-4 text-xl">Página não encontrada</p>
          <p className="mt-2">
            A página que você está procurando não existe ou foi movida.
          </p>

          <Button asChild className="mt-8 rounded text-black dark:text-white">
            <Link to="/" className="px-6 py-2 font-bold shadow transition">
              <ArrowLeft className="mr-2 h-4 w-4 animate-pulse" />
              Voltar para o início
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
