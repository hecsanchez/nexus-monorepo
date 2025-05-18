import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@nexus/ui/styles.css'
import router from './router'
import { RouterProvider } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
