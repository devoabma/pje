import * as HoverCardPrimitive from '@radix-ui/react-hover-card'
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from 'framer-motion'
import { encode } from 'qss'
import React from 'react'

import { cn } from '@/lib/utils'

type LinkPreviewProps = {
  children: React.ReactNode
  url: string
  className?: string
  width?: number
  height?: number
  quality?: number
  layout?: string
  isStatic?: boolean
  imageSrc?: string
}

export const LinkPreview: React.FC<LinkPreviewProps> = ({
  children,
  url,
  className,
  width = 200,
  height = 125,
  isStatic = false,
  imageSrc = '',
  ...rest
}) => {
  let src: string | undefined

  if (!isStatic) {
    const params = encode({
      url,
      screenshot: true,
      meta: false,
      embed: 'screenshot.url',
      colorScheme: 'dark',
      'viewport.isMobile': true,
      'viewport.deviceScaleFactor': 1,
      'viewport.width': width * 3,
      'viewport.height': height * 3,
    })
    src = `https://api.microlink.io/?${params}`
  } else if (imageSrc) {
    src = imageSrc
  }

  const [isOpen, setOpen] = React.useState(false)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  const springConfig = { stiffness: 100, damping: 15 }
  const x = useMotionValue(0)
  const translateX = useSpring(x, springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetRect = event.currentTarget.getBoundingClientRect()
    const eventOffsetX = event.clientX - targetRect.left
    const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2
    x.set(offsetFromCenter)
  }

  return (
    <>
      {isMounted && src ? (
        <div style={{ display: 'none' }}>
          <img src={src} width={width} height={height} alt="hidden image" />
        </div>
      ) : null}

      <HoverCardPrimitive.Root
        openDelay={50}
        closeDelay={100}
        onOpenChange={setOpen}
      >
        <HoverCardPrimitive.Trigger
          onMouseMove={handleMouseMove}
          className={cn('text-black', className)}
          {...rest}
        >
          {children}
        </HoverCardPrimitive.Trigger>

        <HoverCardPrimitive.Content
          className={cn(
            '[transform-origin:var(--radix-hover-card-content-transform-origin)]',
            className,
          )}
          side="top"
          align="center"
          sideOffset={10}
        >
          <AnimatePresence>
            {isOpen && src && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: 'spring',
                    stiffness: 260,
                    damping: 20,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                className={cn('rounded-xl shadow-xl', className)}
                style={{
                  x: translateX,
                }}
              >
                <a
                  href={url}
                  target="_blank"
                  className={cn(
                    'block rounded-sm border border-transparent bg-neutral-200 p-0.5 shadow hover:border-neutral-200',
                    className,
                  )}
                  style={{ fontSize: 0 }}
                  rel="noreferrer"
                >
                  <img
                    src={src}
                    width={width}
                    height={height}
                    alt="preview image"
                    className={cn('rounded-lg', className)}
                  />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </HoverCardPrimitive.Content>
      </HoverCardPrimitive.Root>
    </>
  )
}
