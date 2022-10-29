import React from "react"
import { NavLink } from "react-router-dom"
import styles from './navigation.module.css'

const { nav, navLink, activeNavLink } = styles

const Navigation = () => {
  return (
    <nav className={nav}>
      <ul>
        <li>
          <NavLink
          to='/'
          end
          className={({isActive}) => isActive ? activeNavLink : navLink}
          >Home</NavLink>
        </li>
        <li>
          <NavLink
          to='breeds'
          className={({isActive}) => isActive ? activeNavLink : navLink}
          >Breeds</NavLink>
        </li>
        <li>
          <NavLink
          to='countries'
          className={({isActive}) => isActive ? activeNavLink : navLink}
          >Countries</NavLink>
        </li>
      </ul>
    </nav>
  )
}


export { Navigation }
