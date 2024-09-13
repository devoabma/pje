import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpFromDot } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'

import { Button } from '../ui/button'

export function BackToTop() {
  const [showBackTop, setShowBackTop] = useState(false)

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScroll = useCallback(() => {
    if (!showBackTop && window.scrollY > 500) setShowBackTop(true)

    if (showBackTop && window.scrollY <= 500) setShowBackTop(false)
  }, [showBackTop])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <AnimatePresence>
      {showBackTop && (
        <motion.div
          initial={{ opacity: 0, right: -10 }}
          animate={{ opacity: 1, right: 16 }}
          exit={{ opacity: 0, right: -10 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-4 right-4 z-20"
        >
          <Button
            variant="outline"
            type="button"
            onClick={scrollToTop}
            className="shadow-custom border border-foreground bg-background"
          >
            <ArrowUpFromDot className="h-4 w-4 font-bold text-foreground transition-all ease-in-out hover:-translate-y-1" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
