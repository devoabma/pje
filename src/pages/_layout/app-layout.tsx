import { Clock } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { BackToTop } from '@/components/app/back-to-top'
import { FeatureSection } from '@/components/app/feature-section'
import { Footer } from '@/components/app/footer'
import { Header } from '@/components/app/header'
import { getCurrentDateInfo } from '@/utils/get-current-date-info'

export function AppLayout() {
  const { day, fullMonth, year } = getCurrentDateInfo()

  return (
    <div className="flex flex-wrap min-h-screen flex-col antialiased">
      <Header />

      <div className="container flex flex-1 flex-col gap-4 pt-6">
        <p className="flex items-center justify-end gap-1 text-[13px] italic text-muted-foreground">
          <Clock className="h-4 w-4" />
          Hoje, {day} de {fullMonth} de {year}
        </p>

        <div className="mb-24">
          <Outlet />
        </div>

        <FeatureSection />
      </div>

      <BackToTop />

      <Footer />
    </div>
  )
}
