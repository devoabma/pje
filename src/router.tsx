import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layout/app-layout'
import { InssDigital } from './pages/app/inss-digital'
import { PjeOabma } from './pages/app/pje-oabma'
import { PortalAdvocacia } from './pages/app/portal-advocacia'
import { StatusServices } from './pages/app/status-services'
import { ZoneCriminal } from './pages/app/zone-criminal'
import { NotFound } from './pages/not-found'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <PjeOabma /> },
      { path: '/inss-digital', element: <InssDigital /> },
      { path: '/zone-criminal', element: <ZoneCriminal /> },
      { path: '/portal-advocacia', element: <PortalAdvocacia /> },
      { path: '/status-services', element: <StatusServices /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])
