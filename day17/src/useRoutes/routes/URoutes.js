import { useRoutes } from "react-router-dom"
import URContact from "../pages/URContact"
import URHome from "../pages/URHome"


const URoutes = () => {
  const element = useRoutes([
    {
      path: '/useRoutes',
      children: [
        {
          index: true,
          element: <URHome />,
        },
        {
          path: 'contact',
          element: <URContact />,
        },
      ]
    }
  ])
  return element
}


export { URoutes }
