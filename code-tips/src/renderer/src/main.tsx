import './assets/main.css'

import '@renderer/assets/tailwind.css'
import './assets/global.scss'
import '@icon-park/react/styles/index.css';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
