import { NavLink } from 'react-router-dom'
import { NavRoutes } from './routes/NavRoutes'
import appStyle from './App.module.css'

/* //> IMPORTANT: Resource Material samples are based from v4 and the current
  REACT-ROUTER-DOM IS CURRENTLY IN V6
  Due to the outdated version, v6 of React Router will be used instead
*/


const { NavStyle } = appStyle

const HomeNavigation = () => {
  return (
    <nav className={NavStyle} >
      <ul>
        <li><NavLink to='/' >Home</NavLink></li>
        <li><NavLink to='/about' >About</NavLink></li>
        <li><NavLink to='/challenges' >Challenges</NavLink></li>
        <li><NavLink to='/contact' >Contact</NavLink></li>
      </ul>
    </nav>
  )
}

/* //> HOC practice
  this will be useful if it is used by more than one component */
const withContainer = (Comp) => {
  const containerStyle = {
    padding: '1rem',
  }
  return () => (
    <div style={containerStyle}>
      <Comp />
    </div>
  )
}
const PageContent = withContainer(NavRoutes)

const App = () => {
  return (
    <>
      <HomeNavigation />
      <PageContent />
    </>
  )
}


export default App
