import { NavLink, Outlet } from 'react-router-dom'
import exercisesStyle from './styles/exercises.module.css'


const { activeSideNav, sideNavContainer } = exercisesStyle

const ExercisesLayout = () => {
  return (
    <div>
      <aside className={sideNavContainer}>
        <nav>
          <ul>
            <li>
              <NavLink
                to='./'
                // end /* //> Uncomment to stop bread-crumbing active style */
                className={({ isActive }) => (isActive && activeSideNav)}
              >Exercises Home</NavLink>
            </li>
            <li>
              <NavLink
                to='level1'
                className={({ isActive }) => (isActive && activeSideNav)}
              >Level 1</NavLink>
            </li>
            <li>
              <NavLink
                to='level2'
                className={({ isActive }) => (isActive && activeSideNav)}
              >Level 2</NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      <Outlet />
    </div>
  )
}

const ExercisesHome = () => {
  return (
    <div>
      <h1>Exercises from 30 Days of React</h1>
      <p>Use secondary navigation bar to go to specific Exercises</p>
    </div>
  )
}


export { ExercisesHome, ExercisesLayout }
