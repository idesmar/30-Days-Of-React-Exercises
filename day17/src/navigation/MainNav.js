import { NavLink } from 'react-router-dom'
import { CustomNavLink } from './shared/customNavLink'
import navigationStyles from './shared/navigation.module.css'
import './shared/_navigation.css'

const { mainNav, specialLink, activeNavLink } = navigationStyles

/* only used for NavLink to='/' */
const activeLink = {
  backgroundColor: '#a258bb',
  backgroundImage: 'linear-gradient(90deg, #61762e 24%, #6e26a4 80%)',
}

const MainNav = ({ handleUIChange }) => {
  return (
    <nav className={mainNav} >
      <ul>

        {/* //> Using NavLink's `isActive` prop to conditionally apply style (activeLink) */}
        <li><NavLink
          to='/'
          end /* //> forces to only add 'active' class if current path is EXACTLY '/' */
          style={({ isActive }) => (isActive ? activeLink : {})}
        >
          Home
        </NavLink></li>

        {/* //> Notice that all `to` values beyond this comment are in 'relative path' */}
        <li><CustomNavLink to='about' >About</CustomNavLink></li>
        <li><CustomNavLink to='challenges' >Challenges</CustomNavLink></li>

        {/* //! Unable to combine 'active' class from NavLink and class from css module
            code below uses NavLink's isActive prop to
            conditionally apply .activeNavLink from css module
            //NOTE: a custom NavLink can also be created similar to
            import { CustomNavLink } from './shared/customNavLink' */}
        <li><NavLink
          to='contact'
          className={({ isActive }) => (isActive ? activeNavLink : null)}
        >
          Contact
        </NavLink></li>
        <li><NavLink
          to='blog'
          className={({ isActive }) => (isActive ? activeNavLink : null)}
        >
          Blog
        </NavLink></li>

        {/* //> Using plain .css to style NavLink */}
        <li><NavLink className='cssNavLink' to='updates' >Updates</NavLink></li>
        <li><NavLink className='cssNavLink' to='navigate' >Navigate</NavLink></li>

        <li>
          <NavLink
            to='useRoutes'
            onClick={handleUIChange}
            className={specialLink}
          >
            useRoutes
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export { MainNav }
