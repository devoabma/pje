import { lazy, Suspense } from 'react'
import { Clock } from 'lucide-react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/app/header'
import { getCurrentDateInfo } from '@/utils/get-current-date-info'

const BackToTop = lazy(() =>
  import('@/components/app/back-to-top').then((module) => ({
    default: module.BackToTop,
  })),
)

const FeatureSection = lazy(() =>
  import('@/components/app/feature-section').then((module) => ({
    default: module.FeatureSection,
  })),
)

const Footer = lazy(() =>
  import('@/components/app/footer').then((module) => ({
    default: module.Footer,
  })),
)

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

        <Suspense fallback={null}>
          <FeatureSection />
        </Suspense>
      </div>

      <Suspense fallback={null}>
        <BackToTop />
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}
