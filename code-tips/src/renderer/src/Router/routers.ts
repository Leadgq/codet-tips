import { createBrowserRouter } from 'react-router'
import Home from '@renderer/Pages/Home'

export const routes = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/config',
    lazy: async () => {
      const ConfigComponent = await import('@renderer/Pages/Config')
      return {
        Component: ConfigComponent.default
      }
    }
  }
])
