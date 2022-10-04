import { NavLink } from 'react-router-dom'
import navigationStyles from './shared/navigation.module.css'

const { mainNav } = navigationStyles

const MainNav = () => {
  return (
    <nav className={mainNav} >
      <ul>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/about' >About</NavLink></li>
        <li><NavLink to='/challenges' >Challenges</NavLink></li>
        <li><NavLink to='/contact' >Contact</NavLink></li>
        <li><NavLink to='/blog' >Blog</NavLink></li>
        <li><NavLink to='/updates' >Updates</NavLink></li>
      </ul>
    </nav>
  )
}

export { MainNav }
