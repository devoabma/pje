import { CloudDownload } from 'lucide-react'
import type { ReactNode } from 'react'

import { LinkPreview } from '../ui/link-preview'

interface FeatureSectionLinkProps {
  linkPreview: string
  children: ReactNode
}

export function FeatureSectionLink({
  linkPreview,
  children,
}: FeatureSectionLinkProps) {
  return (
    <div className="flex cursor-default items-center gap-1.5">
      <CloudDownload className="h-5 w-5 text-primary" />
      <LinkPreview
        url={linkPreview}
        className="text-foreground transition-colors hover:font-medium"
      >
        {children}
      </LinkPreview>
    </div>
  )
}
