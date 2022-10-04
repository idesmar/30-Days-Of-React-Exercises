import { NavLink } from 'react-router-dom'
import navigationStyles from './navigation.module.css'

const { nav } = navigationStyles

const MainNav = () => {
  return (
    <nav className={nav} >
      <ul>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/about' >About</NavLink></li>
        <li><NavLink to='/challenges' >Challenges</NavLink></li>
        <li><NavLink to='/contact' >Contact</NavLink></li>
        <li><NavLink to='/blog' >Blog</NavLink></li>
      </ul>
    </nav>
  )
}

export { MainNav }
