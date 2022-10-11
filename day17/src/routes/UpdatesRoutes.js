import { Route, Routes } from "react-router-dom"
import { UpdatesLayout } from "../layouts/UpdatesLayout"
import { Updates, Updates1, Updates2 } from "../pages/Updates"

/* //> DEV NOTES
  These routes were detached from NavRoutes.js to show how `Routes` can be imported/exported
  Updates were imported in NavRoutes using the code below
  ```
  <Route path="updates/*" element={<UpdatesRoutes />} />
  ```
  or when using useRoutes
  ```
  {
    path: 'updates/*',
    element: <UpdatesRoutes />
  },
  ```
*/


const UpdatesRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<UpdatesLayout />}>
          <Route index element={<Updates />} />
          <Route path="1" element={<Updates1/>} />
          <Route path="2" element={<Updates2/>} />
        </Route>
      </Routes>
    </div>
  )
}
export { UpdatesRoutes }
