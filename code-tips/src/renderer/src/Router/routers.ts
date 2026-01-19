import { createHashRouter } from 'react-router'
import Home from '@renderer/Pages/Home'
import Category from '@renderer/Pages/Category'

export const routes = createHashRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/config',
    children: [
      {
        index: true,
        Component: Category
      }
    ],
    lazy: async () => {
      const ConfigComponent = await import('@renderer/Pages/Config')
      return {
        Component: ConfigComponent.default
      }
    }
  }
])
