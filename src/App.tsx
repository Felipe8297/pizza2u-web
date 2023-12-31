import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from './components/theme/theme-provider'
import { Toaster } from './components/ui/sonner'
import { router } from './routes'

export function App() {
  return (
    <ThemeProvider storageKey="pizza2u-theme" defaultTheme="dark">
      <HelmetProvider>
        <Toaster richColors />
        <Helmet titleTemplate="%s | Pizza 2U" />
        <RouterProvider router={router} />
      </HelmetProvider>
    </ThemeProvider>
  )
}
