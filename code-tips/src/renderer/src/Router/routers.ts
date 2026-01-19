import { createHashRouter } from 'react-router'
import Home from '@renderer/Pages/Home'
import Category from '@renderer/Pages/Category'
import Content from '@renderer/Pages/Content'

export const routes = createHashRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/config',
    children: [
      {
        path: '',
        Component: Category,
        children: [
          {
            index: true,
            Component: Content
          }
        ]
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
