import { Outlet, Link } from "react-router-dom"
import sharedLayoutStyle from './shared/layout.module.css'

const { layout, outletSibling } = sharedLayoutStyle

/* //> wrapping multiple routes, with different paths, to share a layout
  sample for shared layout inside About and Contact pages
*/

const SharedLayout = () => {
  const LinkStyle = {
    color: '#61cc41',
  }
  return (
    <div className={layout}>
      <div className={outletSibling}>
        <h4>Hello! I'm a shared layout with About and Contact!</h4>
        <p>Learn more <Link to='/about' style={LinkStyle}>about</Link> page?</p>
        <p>Want to <Link to='/contact' style={LinkStyle}>contact</Link> page?</p>
      </div>

      {/* //> Outlet
        - allows the entire component to be always visible on selected Routes */}
      <Outlet />
    </div>
  )
}


export { SharedLayout }
