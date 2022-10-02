import { Outlet, Link } from "react-router-dom"
import layoutStyle from './shared/layout.module.css'

const { layout } = layoutStyle

/* //> wrapping multiple routes, with different paths, to share a layout
  sample for shared layout inside About and Contact pages
*/

const SharedLayout = () => {
  return (
    <>
      <div className={layout}>
        <h4>Hello! I'm a shared layout with About and Contact!</h4>
        <p>Learn more <Link to='/about'>about</Link> page?</p>
        <p>Want to <Link to='/contact'>contact</Link> page?</p>
      </div>

      {/* //> Outlet
        - allows the entire component to be always visible on selected Routes */}
      <Outlet />
    </>
  )
}


export { SharedLayout }
