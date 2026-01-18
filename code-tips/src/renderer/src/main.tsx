import './assets/main.css'

import '@renderer/assets/tailwind.css'
import './assets/global.scss'
import '@icon-park/react/styles/index.css';
import { RouterProvider } from 'react-router';
import { routes } from '@renderer/Router/routers';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
)
