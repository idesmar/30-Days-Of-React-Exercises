import { useRoutes } from 'react-router-dom'
import { Countries } from '../pages/Countries/_Countries'
import { Breeds } from '../pages/Breeds/Breeds'
import { Home } from '../pages/Home/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { GeneralLayout } from '../layouts/GeneralLayout'


const MainRoutes = () => {
  const element = useRoutes([
    {
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          element: <GeneralLayout />,
          children: [
            {
              path: 'countries',
              element: <Countries />
            },
            {
              path: 'breeds',
              element: <Breeds />
            }
          ]
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return element
}

export { MainRoutes }
