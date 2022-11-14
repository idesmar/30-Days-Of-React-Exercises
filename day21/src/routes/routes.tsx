import { useRoutes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { NotFound } from '../pages/NotFound/NotFound'
import { CtxUst1 } from '../pages/UseContext/Sample1/Ctx-ust-1'
import { CtxUst2 } from '../pages/UseContext/Sample2/Ctx-ust-2'


function MainRoutes() {
  const element = useRoutes(
    [
      {
        path: '/',
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: 'ctx-ust-1',
            element: <CtxUst1 />
          },
          {
            path: 'ctx-ust-2',
            element: <CtxUst2 />
          }
        ]
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  )

  return element
}


export { MainRoutes }
