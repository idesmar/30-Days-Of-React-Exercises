import { UpdatesNav } from "../navigation/UpdatesNav"
import { Outlet } from "react-router-dom"


const UpdatesLayout = () => {
  return (
    <>
      <UpdatesNav />
      <Outlet />
    </>
  )
}
export { UpdatesLayout }
