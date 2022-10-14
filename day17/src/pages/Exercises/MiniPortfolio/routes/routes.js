import { useRoutes } from 'react-router-dom'
import { MPAbout } from '../pages/MPAbout'
import { MPContact } from '../pages/MPContact'
import { MPHome } from '../pages/MPHome'
import { MPNotFound } from '../pages/MPNotFound'
import { MPProjects } from '../pages/MPProjects'


const MPRoutes = () => {
  const element = useRoutes([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <MPHome />
        },
        {
          path: 'about',
          element: <MPAbout />,
        },
        {
          path: 'contact',
          element: <MPContact />
        },
        {
          path: 'projects',
          element: <MPProjects />
        },
        {
          path: '*',
          element: <MPNotFound />
        },
      ]
    }
  ])

  return element
}


export { MPRoutes }
