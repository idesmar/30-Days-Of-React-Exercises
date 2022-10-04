import { Route, Routes } from "react-router-dom"
import { UpdatesNav } from '../navigation/UpdatesNav'
import { Updates, Updates1, Updates2 } from "../pages/Updates"

const UpdatesRoutes = () => {
  return (
    <div>
      <Routes>
        <Route element={<UpdatesNav />} >
          <Route index element={<Updates />} />
          <Route path="1" element={<Updates1/>} />
          <Route path="2" element={<Updates2/>} />
        </Route>
      </Routes>
    </div>
  )
}
export { UpdatesRoutes }
