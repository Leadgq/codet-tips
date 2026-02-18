import { createHashRouter } from 'react-router'
import Home from '@renderer/Pages/Home'
import Category from '@renderer/Pages/Category'
import ContentList from '@renderer/Pages/ContentList'
import CategoryLoader from '@renderer/Pages/Category/CategoryLoader'
import contentListLoader from '@renderer/Pages/ContentList/contentListLoader'
import Content from '@renderer/Pages/Content'
import contentLoader from '@renderer/Pages/Content/contentLoader'
import { contentAction } from '@renderer/Pages/Content/contentAction'
import Welcome from '@renderer/Pages/Welcome'

export const routes = createHashRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: 'config',
    children: [
      {
        path: 'category',
        Component: Category,
        loader: CategoryLoader,
        children: [
          {
            path: 'contentList/:cid?',
            Component: ContentList,
            loader: contentListLoader,
            children: [
              {
                index: true,
                Component: Welcome
              },
              {
                path: 'content/:id',
                Component: Content,
                loader: contentLoader,
                action: contentAction
              }
            ]
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
