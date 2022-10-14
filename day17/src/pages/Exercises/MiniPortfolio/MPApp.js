import { NavLink } from "react-router-dom"
import { MPRoutes } from "./routes/routes"
import appStyles from "./styles/MPApp.module.css"


const { aside } = appStyles

const MPAppNav = () => {
  return (
    <aside className={aside}>
      <nav>
        <ul>
          <li><NavLink to='./'>Home</NavLink></li>
          <li><NavLink to='about'>About</NavLink></li>
          <li><NavLink to='projects'>Projects</NavLink></li>
          <li><NavLink to='contact'>Contact</NavLink></li>
        </ul>
      </nav>
    </aside>
  )
}

const MPApp = () => {
  return (
    <div>
      <MPAppNav />
      <MPRoutes />
    </div>
  )
}


export { MPApp }
