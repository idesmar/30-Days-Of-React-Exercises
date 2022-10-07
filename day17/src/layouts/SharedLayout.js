import { Outlet, Link } from "react-router-dom"
import sharedLayoutStyle from './shared/layout.module.css'
import outletStyle from './shared/outlet.module.css'

const { layout, layout_centerElement, highlightText } = sharedLayoutStyle
const { outletContainer } = outletStyle

/* //> wrapping multiple routes, with different paths, to share a layout
  sample for shared layout inside About and Contact pages
*/

const LinkStyle = {
  paddingInline: '0.5em',
  borderRadius: '1000vw',
  backgroundColor: 'green',
  color: '#071c0f',
  fontWeight: '700',
}

const SharedLayout = () => {
  return (
    <div className={layout}>
      <div className={layout_centerElement}>
        <h4>Hello! I'm a center element that is part of a <br /> shared layout with <span className={highlightText}>About</span> and <span className={highlightText}>Contact</span>!</h4>
        <p>Learn more <Link to='/about' style={LinkStyle}>about</Link> page?</p>
        <p>Want to <Link to='/contact' style={LinkStyle}>contact</Link> page?</p>
      </div>

      {/* //> Outlet
        - allows the entire component to be always visible on selected Routes */}
      <div className={outletContainer}>
        <Outlet />
      </div>
    </div>
  )
}


export { SharedLayout }
