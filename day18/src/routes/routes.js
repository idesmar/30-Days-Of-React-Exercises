import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Level1 } from "../pages/Level1";
import { Level2 } from "../pages/Level2";
import { Level3 } from "../pages/Level3";
import { NotFound } from "../pages/NotFound";
import Temp from "../pages/_Temp";


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
        {
          path: 'temp',
          element: <Temp />
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
