import { CloudDownload } from 'lucide-react'
import type { ReactNode } from 'react'

import { LinkPreview } from '../ui/link-preview'

interface FeatureSectionLinkProps {
  linkPreview: string
  children: ReactNode
  url: string
}

export function FeatureSectionLink({
  linkPreview,
  children,
  url,
}: FeatureSectionLinkProps) {
  return (
    <div className="flex cursor-default items-center gap-1.5">
      <CloudDownload className="h-5 w-5 text-primary" />
      <LinkPreview
        url={linkPreview}
        className="text-foreground transition-colors hover:font-medium"
      >
        <a href={url} target="_blank" rel="noreferrer">
          {children}
        </a>
      </LinkPreview>
    </div>
  )
}
