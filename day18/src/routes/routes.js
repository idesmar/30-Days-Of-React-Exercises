import { useRoutes } from "react-router-dom";
import { Home } from "../components/Home";
import { Level1 } from "../components/Level1";
import { Level2 } from "../components/Level2";
import { Level3 } from "../components/Level3";
import { NotFound } from "../components/NotFound";


const MainRoutes = () => {
  const element = useRoutes([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: 'level1',
          element: <Level1 />
        },
        {
          path: 'level2',
          element: <Level2 />
        },
        {
          path: 'level3',
          element: <Level3 />
        },
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
