import React from "react"
import { NavLink } from "react-router-dom"


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/' end>Home</NavLink>
        </li>
        <li>
          <NavLink to='breeds'>Breeds</NavLink>
        </li>
        <li>
          <NavLink to='countries'>Countries</NavLink>
        </li>
      </ul>
    </nav>
  )
}


export { Navigation }
