import { useRoutes } from "react-router-dom"
import { ExercisesHome, ExercisesLayout } from "../ExercisesHome"
import { Level1 } from "../Level1"
import { Level2 } from "../Level2"

/* //> DEV NOTES
  Exercises Routes are imported to NavRoutes using code below:
  ```
  {
    path: 'exercises/*',
    element: <ExercisesRoutes />
  },
  ```
*/


const ExercisesRoutes = () => {
  const element = useRoutes([
    {
      element: <ExercisesLayout />,
      children: [
        {
          index: true,
          element: <ExercisesHome />
        },
        {
          path: 'level1',
          element: <Level1 />
        },
        {
          path: 'level2/*',
          element: <Level2 />
        }
      ]
    }
  ])
  return element
}


export { ExercisesRoutes }
