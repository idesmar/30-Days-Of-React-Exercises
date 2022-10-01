import { Outlet } from "react-router-dom"

/* //> wrapping multiple routes, with different paths, to share a layout
  sample for shared layout inside About and Contact pages
*/

const SharedLayout = () => {
  return (
    <>
      <div>
        Hello! I'm a shared layout!
        {/* <nav>
          <ul>
            <li></li>
          </ul>
        </nav> */}
      </div>

      <Outlet />
    </>
  )
}


export { SharedLayout }
