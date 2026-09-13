import type { ReactNode } from 'react'

interface FooterColumnProps {
  title: string
  children: ReactNode
}

export function FooterColumn({ title, children }: FooterColumnProps) {
  return (
    <div>
      <h2 className="mb-4 font-institucional font-semibold text-foreground text-xs uppercase tracking-widest">{title}</h2>
      <ul className="space-y-3">{children}</ul>
    </div>
  )
}
