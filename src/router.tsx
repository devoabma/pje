import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    lazy: async () => {
      const { AppLayout } = await import('./pages/_layout/app-layout')

      return { Component: AppLayout }
    },
    children: [
      {
        path: '/',
        lazy: async () => {
          const { PjeOabma } = await import('./pages/app/pje-oabma')

          return { Component: PjeOabma }
        },
      },
      {
        path: '/inss-digital',
        lazy: async () => {
          const { InssDigital } = await import('./pages/app/inss-digital')

          return { Component: InssDigital }
        },
      },
      {
        path: '/zone-criminal',
        lazy: async () => {
          const { ZoneCriminal } = await import('./pages/app/zone-criminal')

          return { Component: ZoneCriminal }
        },
      },
      {
        path: '/sei',
        lazy: async () => {
          const { Sei } = await import('./pages/app/sei')

          return { Component: Sei }
        },
      },
      {
        path: '/portal-advocacia',
        lazy: async () => {
          const { PortalAdvocacia } = await import('./pages/app/portal-advocacia')

          return { Component: PortalAdvocacia }
        },
      },
      {
        path: '/status-services',
        lazy: async () => {
          const { StatusServices } = await import('./pages/app/status-services')

          return { Component: StatusServices }
        },
      },
    ],
  },
  {
    path: '*',
    lazy: async () => {
      const { NotFound } = await import('./pages/not-found')

      return { Component: NotFound }
    },
  },
])
