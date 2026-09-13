import type { ReactNode } from 'react'

import { BackToTop } from '@/components/app/back-to-top'
import { BackgroundDecor } from '@/components/app/background-decor'
import { CurrentDate } from '@/components/app/current-date'
import { FeatureSection } from '@/components/app/feature-section'
import { Footer } from '@/components/app/footer'
import { Header } from '@/components/app/header'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate flex min-h-screen flex-col flex-wrap antialiased">
      <BackgroundDecor />

      <Header />

      <div className="container flex flex-1 flex-col gap-4 pt-6">
        <CurrentDate />

        <main className="mb-24">{children}</main>

        <FeatureSection />
      </div>

      <BackToTop />

      <Footer />
    </div>
  )
}
